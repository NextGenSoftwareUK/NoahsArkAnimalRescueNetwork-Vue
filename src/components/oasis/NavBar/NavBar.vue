<template>
  <nav class="nav" :class="{ scrolled }">
    <a class="nav-brand" href="#">
      <span class="paw">🐾</span>
      <span>NOAH'S <em>ARK</em></span>
    </a>
    <button class="nav-toggle" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Menu">
      <span /><span /><span />
    </button>
    <ul class="nav-links" :class="{ open: menuOpen }">
      <li v-for="link in links" :key="link.href">
        <a :href="link.href" @click="menuOpen = false">{{ link.label }}</a>
      </li>
    </ul>
    <div class="nav-right">
      <a class="nav-cta" href="#adopt">🐾 Adopt Now</a>
      <AvatarConnect />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import AvatarConnect from '../AvatarConnect/AvatarConnect.vue'

const menuOpen = ref(false)
const scrolled = ref(false)

const links = [
  { href: '#mission', label: 'Mission' },
  { href: '#karma', label: 'Karma' },
  { href: '#profiles', label: 'Profiles' },
  { href: '#network', label: 'Network' },
  { href: '#strays', label: 'Report a Stray' },
  { href: '#community', label: 'Community' },
  { href: '#volunteer', label: 'Volunteer' },
  { href: '#features', label: 'Features' },
  { href: '#healing', label: 'Healing' },
  { href: '#digitalpet', label: 'Digital Pet' },
  { href: '#franchise', label: 'Franchise' },
]

function onScroll() { scrolled.value = window.scrollY > 40 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 18px 40px; display: flex; align-items: center; justify-content: space-between; background: rgba(3,7,20,.88); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(0,232,124,.12); transition: padding .3s; }
.nav.scrolled { padding: 12px 40px; }
.nav-brand { font-family: 'Orbitron', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .18em; color: #fff; text-decoration: none; display: flex; align-items: center; gap: 10px; white-space: nowrap; }
.nav-brand .paw { font-size: 18px; }
.nav-brand em { color: #00e87c; font-style: normal; }
.nav-links { display: flex; gap: 16px; list-style: none; padding: 0; }
.nav-links a { font-family: 'Share Tech Mono', monospace; font-size: 11px; letter-spacing: .07em; color: #a8bfd8; text-decoration: none; text-transform: uppercase; transition: color .2s; }
.nav-links a:hover { color: #00e87c; }
.nav-right { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
.nav-cta { font-family: 'Share Tech Mono', monospace; font-size: 11px; letter-spacing: .1em; color: #00e87c; border: 1px solid rgba(0,232,124,.35); border-radius: 999px; padding: 8px 18px; text-decoration: none; white-space: nowrap; transition: background .2s; }
.nav-cta:hover { background: rgba(0,232,124,.08); }
.nav-toggle { display: none; flex-direction: column; justify-content: center; gap: 5px; width: 32px; height: 32px; background: none; border: none; cursor: pointer; }
.nav-toggle span { display: block; width: 100%; height: 2px; background: #a8bfd8; transition: transform .25s, opacity .25s; }
.nav-toggle.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav-toggle.open span:nth-child(2) { opacity: 0; }
.nav-toggle.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
@media (max-width: 1100px) {
  .nav-toggle { display: flex; }
  .nav-links { position: fixed; top: 0; right: 0; height: 100vh; width: min(78vw,320px); flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 14px; padding: 76px 32px 24px; overflow-y: auto; background: rgba(3,7,20,.97); backdrop-filter: blur(12px); border-left: 1px solid rgba(0,232,124,.12); transform: translateX(100%); transition: transform .3s ease; }
  .nav-links.open { transform: translateX(0); }
  .nav { padding: 14px 20px; }
}
</style>
