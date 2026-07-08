<template>
  <div>
    <div v-if="session" class="avatar-badge">
      <span class="avatar-icon">⬡</span>
      <span class="avatar-name">{{ session.username }}</span>
      <span class="karma-pill">{{ session.karma.toLocaleString() }} ✦</span>
      <button class="logout-btn" @click="logout">✕</button>
    </div>
    <button v-else class="connect-btn" @click="open = true">⬡ CONNECT AVATAR</button>

    <OasisModal :open="open" accent-color="rgba(0,232,124,.25)" @close="open = false">
      <div class="modal-icon">⬡</div>
      <h2 class="modal-title">Connect Your Avatar</h2>
      <p class="modal-sub">Sign in to your OASIS avatar to earn karma across Noah's Ark ARN.</p>
      <input v-model="username" class="oasis-input" placeholder="Avatar username" />
      <input v-model="password" class="oasis-input" type="password" placeholder="Password" />
      <p v-if="error" class="error-msg">{{ error }}</p>
      <button class="btn-primary" :disabled="loading" @click="doLogin">
        {{ loading ? 'Connecting…' : 'Connect Avatar' }}
      </button>
    </OasisModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useOasis } from '../../../composables/useOasis'
import OasisModal from '../OasisModal/OasisModal.vue'

const { session, login, logout } = useOasis()
const open = ref(false)
const loading = ref(false)
const error = ref('')
const username = ref('')
const password = ref('')

async function doLogin() {
  if (!username.value || !password.value) { error.value = 'Please fill in both fields.'; return }
  loading.value = true; error.value = ''
  try {
    await login(username.value, password.value)
    open.value = false; username.value = ''; password.value = ''
  } catch {
    error.value = 'Login failed. Please check your credentials.'
  } finally { loading.value = false }
}
</script>

<style scoped>
.connect-btn { background: none; border: 1px solid rgba(0,232,124,.4); border-radius: 999px; padding: 8px 18px; color: #00e87c; font-family: 'Share Tech Mono', monospace; font-size: 11px; letter-spacing: .1em; cursor: pointer; transition: background .2s; }
.connect-btn:hover { background: rgba(0,232,124,.08); }
.avatar-badge { display: flex; align-items: center; gap: 8px; }
.avatar-icon { color: #00e87c; font-size: 16px; }
.avatar-name { font-family: 'Share Tech Mono', monospace; font-size: 12px; color: #fff; letter-spacing: .06em; }
.karma-pill { background: rgba(0,232,124,.12); border: 1px solid rgba(0,232,124,.3); border-radius: 999px; padding: 2px 10px; font-family: 'Share Tech Mono', monospace; font-size: 11px; color: #00e87c; }
.logout-btn { background: none; border: none; color: #a8bfd8; cursor: pointer; font-size: 14px; }
.modal-icon { font-size: 40px; text-align: center; color: #00e87c; margin-bottom: 16px; }
.modal-title { font-family: 'Orbitron', sans-serif; font-size: 20px; font-weight: 700; color: #fff; text-align: center; margin: 0 0 8px; }
.modal-sub { font-size: 14px; color: #a8bfd8; text-align: center; line-height: 1.6; margin: 0 0 24px; }
.oasis-input { width: 100%; background: rgba(255,255,255,.05); border: 1px solid rgba(0,232,124,.2); border-radius: 8px; padding: 11px 14px; color: #fff; font-size: 14px; outline: none; box-sizing: border-box; margin-bottom: 12px; display: block; font-family: inherit; }
.btn-primary { width: 100%; padding: 14px; background: linear-gradient(135deg, #00e87c, #059669); border: none; border-radius: 10px; color: #fff; font-family: 'Orbitron', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: .08em; cursor: pointer; margin-top: 4px; }
.btn-primary:disabled { opacity: .5; cursor: not-allowed; }
.error-msg { color: #f87171; font-size: 13px; text-align: center; margin-bottom: 8px; }
</style>
