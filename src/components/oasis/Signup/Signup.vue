<script setup lang="ts">
import { ref } from 'vue'
import { useOasis } from '../../../composables/useOasis'

const emit = defineEmits<{ switchTo: [view: 'login'] }>()

const { register } = useOasis()

const firstName = ref('')
const lastName = ref('')
const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const acceptTerms = ref(false)
const loading = ref(false)
const error = ref('')
const success = ref(false)

async function submit() {
  if (!firstName.value || !lastName.value || !username.value || !email.value || !password.value) {
    error.value = 'Please fill in all fields.'; return
  }
  if (password.value !== confirmPassword.value) { error.value = 'Passwords do not match.'; return }
  if (password.value.length < 6) { error.value = 'Password must be at least 6 characters.'; return }
  if (!acceptTerms.value) { error.value = 'Please accept the Terms of Service.'; return }
  loading.value = true
  error.value = ''
  try {
    await register(firstName.value, lastName.value, username.value, email.value, password.value)
    success.value = true
  } catch (e: any) {
    error.value = e?.message ?? 'Registration failed. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="oasis-auth-form">
    <div class="oasis-auth-header">
      <h2 class="oasis-auth-title">Sign Up</h2>
      <p class="oasis-auth-sub">
        Already have an account?
        <a class="oasis-link" href="#" @click.prevent="emit('switchTo', 'login')">Beam In</a>
      </p>
    </div>

    <div v-if="error" class="oasis-auth-error">{{ error }}</div>

    <template v-if="!success">
      <div class="oasis-grid-2">
        <div class="oasis-field">
          <label class="oasis-label" for="su-first">First Name</label>
          <input class="oasis-input" id="su-first" type="text" v-model="firstName" placeholder="John" />
        </div>
        <div class="oasis-field">
          <label class="oasis-label" for="su-last">Last Name</label>
          <input class="oasis-input" id="su-last" type="text" v-model="lastName" placeholder="Doe" />
        </div>
      </div>

      <div class="oasis-grid-2">
        <div class="oasis-field">
          <label class="oasis-label" for="su-username">Username</label>
          <input class="oasis-input" id="su-username" type="text" v-model="username" placeholder="johndoe" autocomplete="username" />
        </div>
        <div class="oasis-field">
          <label class="oasis-label" for="su-email">Email</label>
          <input class="oasis-input" id="su-email" type="email" v-model="email" placeholder="name@example.com" autocomplete="email" />
        </div>
      </div>

      <div class="oasis-grid-2">
        <div class="oasis-field">
          <label class="oasis-label" for="su-pwd">Password</label>
          <input class="oasis-input" id="su-pwd" type="password" v-model="password" placeholder="min 6 characters" autocomplete="new-password" />
        </div>
        <div class="oasis-field">
          <label class="oasis-label" for="su-cpwd">Confirm Password</label>
          <input class="oasis-input" id="su-cpwd" type="password" v-model="confirmPassword" placeholder="••••••••" autocomplete="new-password" />
        </div>
      </div>

      <div class="oasis-field oasis-field--row">
        <input class="oasis-checkbox" id="su-terms" type="checkbox" v-model="acceptTerms" />
        <label class="oasis-label oasis-label--inline" for="su-terms">I accept the Terms of Service</label>
      </div>

      <button class="oasis-btn" type="button" :disabled="loading" @click="submit">
        {{ loading ? 'Creating account…' : 'Create Account' }}
      </button>
    </template>

    <div v-else class="oasis-auth-success">
      ✅ Account created!
      <a class="oasis-link" href="#" @click.prevent="emit('switchTo', 'login')">Beam In</a>
    </div>
  </div>
</template>

<style scoped>
.oasis-auth-form { display:flex; flex-direction:column; gap:18px; }
.oasis-auth-header { text-align:center; }
.oasis-auth-title { font-family:'Orbitron',sans-serif; font-size:22px; color:#fff; margin:0 0 6px; }
.oasis-auth-sub { font-size:13px; color:#7a9bbf; margin:0; }
.oasis-auth-error { background:rgba(255,80,80,.12); border:1px solid rgba(255,80,80,.3); color:#ff6b6b; border-radius:8px; padding:10px 14px; font-size:13px; }
.oasis-auth-success { background:rgba(72,220,130,.12); border:1px solid rgba(72,220,130,.3); color:#48dc82; border-radius:8px; padding:10px 14px; font-size:13px; }
.oasis-grid-2 { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
.oasis-field { display:flex; flex-direction:column; gap:6px; }
.oasis-field--row { flex-direction:row; align-items:center; gap:10px; }
.oasis-label { font-size:12px; font-weight:600; letter-spacing:.06em; color:#7a9bbf; text-transform:uppercase; }
.oasis-label--inline { text-transform:none; font-size:13px; color:#a8bfd8; }
.oasis-input { width:100%; background:rgba(255,255,255,.05); border:1px solid rgba(0,200,255,.2); border-radius:8px; padding:10px 14px; color:#fff; font-size:14px; outline:none; box-sizing:border-box; transition:border-color .2s; }
.oasis-input:focus { border-color:rgba(0,200,255,.5); }
.oasis-checkbox { width:16px; height:16px; accent-color:#00c8ff; cursor:pointer; flex-shrink:0; }
.oasis-link { color:#00c8ff; text-decoration:none; cursor:pointer; }
.oasis-btn { background:linear-gradient(135deg,#00c8ff,#0080ff); border:none; border-radius:8px; color:#fff; font-family:'Orbitron',sans-serif; font-size:13px; font-weight:700; letter-spacing:.08em; padding:12px; cursor:pointer; transition:opacity .2s; }
.oasis-btn:disabled { opacity:.5; cursor:not-allowed; }
</style>
