<template>
  <canvas ref="canvas" class="star-canvas" />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)
let animId = 0

onMounted(() => {
  const el = canvas.value!
  const ctx = el.getContext('2d')!
  const stars = Array.from({ length: 160 }, () => ({
    x: Math.random(), y: Math.random(),
    r: Math.random() * 1.2 + 0.2,
    o: Math.random(),
    s: (Math.random() - 0.5) * 0.002,
  }))

  const resize = () => { el.width = window.innerWidth; el.height = window.innerHeight }
  resize()
  window.addEventListener('resize', resize)

  const draw = () => {
    ctx.clearRect(0, 0, el.width, el.height)
    for (const s of stars) {
      s.o += s.s
      if (s.o < 0.1 || s.o > 1) s.s = -s.s
      ctx.beginPath()
      ctx.arc(s.x * el.width, s.y * el.height, s.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(200,220,255,${s.o.toFixed(2)})`
      ctx.fill()
    }
    animId = requestAnimationFrame(draw)
  }
  draw()

  onUnmounted(() => {
    cancelAnimationFrame(animId)
    window.removeEventListener('resize', resize)
  })
})
</script>

<style scoped>
.star-canvas {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  width: 100%;
  height: 100%;
}
</style>
