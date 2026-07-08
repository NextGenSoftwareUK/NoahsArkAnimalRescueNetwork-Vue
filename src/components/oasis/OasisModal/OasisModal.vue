<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="open" class="modal-backdrop" @click="$emit('close')">
        <div class="modal-box" :style="{ borderColor: accentColor }" @click.stop>
          <button class="modal-close" @click="$emit('close')">✕</button>
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{ open: boolean; accentColor?: string }>()
defineEmits<{ close: [] }>()
</script>

<style scoped>
.modal-backdrop {
  position: fixed; inset: 0; z-index: 9000;
  background: rgba(3,7,20,.85); backdrop-filter: blur(8px);
  display: flex; align-items: center; justify-content: center; padding: 20px;
}
.modal-box {
  background: #0a1535; border: 1px solid rgba(0,232,124,.25); border-radius: 20px;
  padding: 40px 36px; max-width: 520px; width: 100%;
  position: relative; max-height: 90vh; overflow-y: auto;
}
.modal-close {
  position: absolute; top: 16px; right: 18px;
  background: none; border: none; color: #a8bfd8; font-size: 20px; cursor: pointer;
}
.modal-enter-active, .modal-leave-active { transition: all .25s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; transform: scale(.96); }
</style>
