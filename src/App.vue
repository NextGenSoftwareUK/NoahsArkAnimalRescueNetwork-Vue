<template>
  <StarField />
  <NavBar />
  <main class="main-content">
    <HeroSection />
    <VolunteerSection />
    <FooterSection />
  </main>
  <KarmaToast />
</template>

<script setup lang="ts">
import StarField from './components/oasis/StarField/StarField.vue'
import NavBar from './components/oasis/NavBar/NavBar.vue'
import KarmaToast from './components/oasis/KarmaToast/KarmaToast.vue'
import HeroSection from './sections/Hero/HeroSection.vue'
import VolunteerSection from './sections/Volunteer/VolunteerSection.vue'
import FooterSection from './sections/Footer/FooterSection.vue'
</script>

<style>
.main-content { position: relative; z-index: 1; }
</style>
