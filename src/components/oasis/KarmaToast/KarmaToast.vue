<template>
  <Transition name="toast">
    <div v-if="karmaToast" class="karma-toast">
      <span class="kt-amount">+{{ karmaToast.amount }} ✦</span>
      <span class="kt-msg">{{ karmaToast.message }}</span>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useOasis } from '../../../composables/useOasis'
const { karmaToast } = useOasis()
</script>

<style scoped>
.karma-toast {
  position: fixed; bottom: 32px; right: 32px; z-index: 9999;
  background: linear-gradient(135deg, rgba(0,232,124,.15), rgba(0,100,60,.1));
  border: 1px solid rgba(0,232,124,.4); border-radius: 14px;
  padding: 16px 24px; display: flex; flex-direction: column; gap: 4px;
  backdrop-filter: blur(12px);
}
.kt-amount { font-family: 'Orbitron', sans-serif; font-size: 22px; font-weight: 900; color: #00e87c; }
.kt-msg { font-family: 'Share Tech Mono', monospace; font-size: 11px; letter-spacing: .1em; color: #a8bfd8; }
.toast-enter-active { transition: all .35s ease; }
.toast-leave-active { transition: all .3s ease; }
.toast-enter-from { transform: translateY(20px); opacity: 0; }
.toast-leave-to { transform: translateY(20px); opacity: 0; }
</style>
