<script setup lang="ts">
import { ref } from 'vue'
import { OASISClient } from '@oasisomniverse/web4-api'

const emit = defineEmits<{ switchTo: [view: 'login'] }>()
const password = ref(''); const confirmPassword = ref('')
const loading = ref(false); const error = ref(''); const done = ref(false)

async function submit() {
  if (!password.value || !confirmPassword.value) { error.value = 'Please fill in all fields.'; return }
  if (password.value !== confirmPassword.value) { error.value = 'Passwords do not match.'; return }
  if (password.value.length < 6) { error.value = 'Password must be at least 6 characters.'; return }
  loading.value = true; error.value = ''
  try {
    const oasis = new OASISClient({ baseUrl: 'https://api.web4.oasisomniverse.one' })
    await (oasis.auth as any).resetPassword({ password: password.value })
    done.value = true
  } catch (e: any) { error.value = e?.message ?? 'Reset failed. Please try again.' }
  finally { loading.value = false }
}
</script>
<template>
  <div class="oasis-auth-form">
    <div class="oasis-auth-header">
      <h2 class="oasis-auth-title">Reset Password</h2>
      <p class="oasis-auth-sub">Enter your new password below.</p>
    </div>
    <div v-if="error" class="oasis-auth-error">{{ error }}</div>
    <template v-if="!done">
      <div class="oasis-field"><label class="oasis-label">New Password</label><input class="oasis-input" type="password" v-model="password" placeholder="min 6 characters" autocomplete="new-password" /></div>
      <div class="oasis-field"><label class="oasis-label">Confirm Password</label><input class="oasis-input" type="password" v-model="confirmPassword" placeholder="••••••••" autocomplete="new-password" /></div>
      <button class="oasis-btn" :disabled="loading" @click="submit">{{ loading ? 'Resetting…' : 'Reset Password' }}</button>
    </template>
    <div v-else class="oasis-auth-success">✅ Password reset! <a class="oasis-link" href="#" @click.prevent="emit('switchTo','login')">Beam In</a></div>
  </div>
</template>
<style scoped>
.oasis-auth-form{display:flex;flex-direction:column;gap:20px}.oasis-auth-header{text-align:center}.oasis-auth-title{font-family:'Orbitron',sans-serif;font-size:20px;color:#fff;margin:0 0 6px}.oasis-auth-sub{font-size:13px;color:#7a9bbf;margin:0}.oasis-auth-error{background:rgba(255,80,80,.12);border:1px solid rgba(255,80,80,.3);color:#ff6b6b;border-radius:8px;padding:10px 14px;font-size:13px}.oasis-auth-success{background:rgba(72,220,130,.12);border:1px solid rgba(72,220,130,.3);color:#48dc82;border-radius:8px;padding:10px 14px;font-size:13px}.oasis-field{display:flex;flex-direction:column;gap:6px}.oasis-label{font-size:12px;font-weight:600;letter-spacing:.06em;color:#7a9bbf;text-transform:uppercase}.oasis-input{width:100%;background:rgba(255,255,255,.05);border:1px solid rgba(0,200,255,.2);border-radius:8px;padding:10px 14px;color:#fff;font-size:14px;outline:none;box-sizing:border-box;transition:border-color .2s}.oasis-input:focus{border-color:rgba(0,200,255,.5)}.oasis-link{color:#00c8ff;text-decoration:none;cursor:pointer}.oasis-btn{background:linear-gradient(135deg,#00c8ff,#0080ff);border:none;border-radius:8px;color:#fff;font-family:'Orbitron',sans-serif;font-size:13px;font-weight:700;letter-spacing:.08em;padding:12px;cursor:pointer;transition:opacity .2s}.oasis-btn:disabled{opacity:.5;cursor:not-allowed}
</style>
