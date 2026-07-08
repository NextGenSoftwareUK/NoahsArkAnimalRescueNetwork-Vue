<script setup lang="ts">
defineProps<{ title?: string; message?: string; icon?: string; confirmLabel?: string; cancelLabel?: string }>()
const emit = defineEmits<{ confirm: []; cancel: [] }>()
</script>
<template>
  <div class="conf-shell">
    <div class="conf-icon">{{ icon ?? '⚠️' }}</div>
    <h2 class="conf-title">{{ title ?? 'Are you sure?' }}</h2>
    <p class="conf-body">{{ message ?? 'This action cannot be undone.' }}</p>
    <div class="conf-actions">
      <button class="conf-btn conf-btn--confirm" @click="emit('confirm')">{{ confirmLabel ?? 'Confirm' }}</button>
      <button class="conf-btn conf-btn--cancel" @click="emit('cancel')">{{ cancelLabel ?? 'Cancel' }}</button>
    </div>
  </div>
</template>
<style scoped>
.conf-shell{display:flex;flex-direction:column;align-items:center;gap:18px;padding:20px;text-align:center}.conf-icon{font-size:44px}.conf-title{font-family:'Orbitron',sans-serif;font-size:18px;color:#fff;margin:0}.conf-body{font-size:14px;color:#a8bfd8;line-height:1.6;margin:0;max-width:360px}.conf-actions{display:flex;gap:12px;margin-top:4px}.conf-btn{border:none;border-radius:8px;font-family:'Orbitron',sans-serif;font-size:12px;font-weight:700;letter-spacing:.08em;padding:11px 24px;cursor:pointer;transition:opacity .2s}.conf-btn--confirm{background:linear-gradient(135deg,#ff4444,#cc0000);color:#fff}.conf-btn--cancel{background:transparent;border:1px solid rgba(0,200,255,.3);color:#00c8ff}
</style>
