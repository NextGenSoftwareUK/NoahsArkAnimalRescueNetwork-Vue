import { ref, readonly } from 'vue'
import { OASISClient } from '@oasisomniverse/web4-api'

export interface OasisSession {
  avatarId: string
  username: string
  karma: number
}

const SESSION_KEY = 'oasis_arn_session'
const API_URL = 'https://api.web4.oasisomniverse.one'

function loadSession(): OasisSession | null {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY)
    return raw ? JSON.parse(raw) : null
  } catch { return null }
}

const _session = ref<OasisSession | null>(loadSession())
const _karmaToast = ref<{ message: string; amount: number } | null>(null)

export function useOasis() {
  async function login(username: string, password: string): Promise<void> {
    const oasis = new OASISClient({ baseUrl: API_URL })
    const result = await oasis.auth.login({ username, password })
    const karma = await oasis.karma.getKarmaForAvatar({ avatarId: result.avatarId })
    const sess: OasisSession = { avatarId: result.avatarId, username, karma: karma.total ?? 0 }
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(sess))
    _session.value = sess
  }

  function logout(): void {
    sessionStorage.removeItem(SESSION_KEY)
    _session.value = null
  }

  async function register(firstName: string, lastName: string, username: string, email: string, password: string): Promise<void> {
    const oasis = new OASISClient({ baseUrl: API_URL })
    await (oasis.auth as any).register({ firstName, lastName, username, email, password })
  }

  async function forgotPassword(email: string): Promise<void> {
    const oasis = new OASISClient({ baseUrl: API_URL })
    await (oasis.auth as any).forgotPassword({ email })
  }

  async function addKarma(amount: number, reason: string): Promise<void> {
    const sess = _session.value
    if (!sess) return
    try {
      const oasis = new OASISClient({ baseUrl: API_URL })
      await oasis.karma.addKarmaToAvatar({ avatarId: sess.avatarId, karmaAmount: amount, karmaSourceTitle: reason })
      const updated = { ...sess, karma: sess.karma + amount }
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(updated))
      _session.value = updated
      _karmaToast.value = { message: reason, amount }
      setTimeout(() => { _karmaToast.value = null }, 4000)
    } catch { /* silent */ }
  }

  return {
    session: readonly(_session),
    karmaToast: readonly(_karmaToast),
    login,
    logout,
    register,
    forgotPassword,
    addKarma,
  }
}
