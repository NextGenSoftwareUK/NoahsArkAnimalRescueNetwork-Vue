<template>
  <section class="section-full" id="volunteer">
    <div class="section">
      <div class="section-kicker">GET INVOLVED</div>
      <h2 class="section-title">Volunteer &amp; Donate</h2>
      <span class="section-line" />
      <p class="section-sub">You don't need to be a vet or a professional rescuer to change an animal's life. Time, skills, donations and love — every form of contribution makes a real difference.</p>

      <div class="cards-grid">
        <div v-for="card in cards" :key="card.id"
          class="vol-card"
          :style="{ borderColor: card.border }">
          <div class="card-icon">{{ card.icon }}</div>
          <h3 class="card-title">{{ card.title }}</h3>
          <p class="card-desc" v-html="card.desc" />
          <button class="card-btn"
            :style="{ background: card.btnBg, color: card.btnColor, borderColor: card.border }"
            @click="openModal(card.id)">
            {{ card.cta }}
          </button>
        </div>
      </div>

      <div class="stats-band">
        <div class="stats-inner">
          <div><span class="stat-num" style="color:#00e87c">2,840</span><span class="stat-label">ACTIVE VOLUNTEERS</span></div>
          <div><span class="stat-num" style="color:#f0a500">614</span><span class="stat-label">FOSTER HOMES</span></div>
          <div><span class="stat-num" style="color:#a78bfa">£280K</span><span class="stat-label">DONATED THIS YEAR</span></div>
        </div>
        <p class="stats-note">Whether you give an afternoon or a lifetime, your involvement directly saves lives and builds karma that grows with you across the entire OASIS Omniverse.</p>
      </div>
    </div>
  </section>

  <OasisModal :open="modalOpen" accent-color="rgba(0,232,124,.25)" @close="modalOpen = false">
    <div class="modal-icon">🐾</div>
    <h2 class="modal-title">Noah's Ark — Get Involved</h2>
    <p class="modal-sub">Tell us how you'd like to help and we'll be in touch within 48 hours.</p>
    <form action="https://formsubmit.co/davidellams@hotmail.com" method="POST">
      <input type="hidden" name="_subject" value="Noah's Ark ARN — Volunteer / Donate Enquiry">
      <input type="hidden" name="_captcha" value="false">
      <input type="hidden" name="_template" value="table">
      <input class="oasis-input" name="name" placeholder="Your full name" required v-model="form.name">
      <input class="oasis-input" name="email" type="email" placeholder="your@email.com" required v-model="form.email">
      <input class="oasis-input" name="location" placeholder="City / Country" v-model="form.location">
      <select class="oasis-input" name="involvement_type" v-model="form.type">
        <option value="">How would you like to help?</option>
        <option value="centre">Centre volunteer (walking, feeding, events)</option>
        <option value="foster">Foster a pet</option>
        <option value="skills">Skills volunteer (design, marketing, admin)</option>
        <option value="donate">Make a donation</option>
        <option value="driver">Rescue driver (animal transport)</option>
        <option value="sponsor">Sponsor an animal</option>
        <option value="other">Other</option>
      </select>
      <textarea class="oasis-input" name="message" rows="3" placeholder="Anything else you'd like us to know?" v-model="form.message" />
      <button type="submit" class="btn-submit" @click="onSubmit">Send Enquiry</button>
    </form>
  </OasisModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useOasis } from '../../composables/useOasis'
import OasisModal from '../../components/oasis/OasisModal/OasisModal.vue'

const { addKarma } = useOasis()
const modalOpen = ref(false)
const form = ref({ name: '', email: '', location: '', type: '', message: '' })

const typeMap: Record<string, string> = {
  centre: 'centre', foster: 'foster', skills: 'skills',
  donate: 'donate', driver: 'driver', sponsor: 'sponsor',
}

function openModal(id: string) {
  form.value.type = typeMap[id] ?? ''
  modalOpen.value = true
}

function onSubmit() {
  addKarma(400, 'Volunteer / donation enquiry submitted')
}

const cards = [
  {
    id: 'centre', icon: '🐾', title: 'Centre Volunteer', cta: 'Apply to Volunteer',
    desc: 'Walk dogs, socialise cats, assist with feeding and cleaning, help with adoption events. No experience needed — just a big heart. Earn <span style="color:#00e87c">+400 karma per volunteer day</span>.',
    border: 'rgba(0,232,124,.18)', btnBg: 'linear-gradient(135deg,#00e87c,#059669)', btnColor: '#fff',
  },
  {
    id: 'foster', icon: '🏡', title: 'Foster a Pet', cta: 'Become a Foster',
    desc: 'Give an animal a temporary home while they wait for adoption. Fosters save lives — especially for animals that struggle in shelter environments. Earn <span style="color:#f0a500">+1,000 karma per foster</span>.',
    border: 'rgba(240,165,0,.18)', btnBg: 'linear-gradient(135deg,#f0a500,#d97706)', btnColor: '#fff',
  },
  {
    id: 'skills', icon: '💡', title: 'Skills Volunteer', cta: 'Offer Your Skills',
    desc: 'Contribute professional skills — web design, marketing, photography, admin, social media, fundraising. Help us grow the network. Earn <span style="color:#a78bfa">+600 karma per project</span>.',
    border: 'rgba(167,139,250,.18)', btnBg: 'transparent', btnColor: '#a78bfa',
  },
  {
    id: 'donate', icon: '💜', title: 'Donate', cta: 'Make a Donation',
    desc: 'Fund food, vet care, shelter improvements and rescue operations. Every pound, dollar or euro goes directly to the animals. Donations also generate karma for the donor.',
    border: 'rgba(255,95,160,.18)', btnBg: 'transparent', btnColor: '#ff5fa0',
  },
  {
    id: 'driver', icon: '🚗', title: 'Rescue Driver', cta: 'Become a Driver',
    desc: 'Transport animals between rescue centres, vet appointments and foster homes. A reliable driver can be the difference between life and death. Earn <span style="color:#00c8ff">+500 karma per rescue run</span>.',
    border: 'rgba(0,200,255,.18)', btnBg: 'transparent', btnColor: '#00c8ff',
  },
  {
    id: 'sponsor', icon: '⭐', title: 'Sponsor an Animal', cta: 'Sponsor an Animal',
    desc: 'Choose a specific resident animal at one of our centres and cover their food, vet care and enrichment with a monthly contribution. Earn <span style="color:#f0a500">+250 karma per month</span>.',
    border: 'rgba(240,165,0,.18)', btnBg: 'linear-gradient(135deg,#f0a500,#d97706)', btnColor: '#fff',
  },
]
</script>

<style scoped>
.section-full { background: linear-gradient(180deg,transparent,rgba(0,232,124,.03),transparent); }
.section { padding: 100px 40px; max-width: 1100px; margin: 0 auto; }
.section-kicker { font-family: 'Share Tech Mono',monospace; font-size: 11px; letter-spacing: .22em; color: #00e87c; margin-bottom: 16px; }
.section-title { font-family: 'Orbitron',sans-serif; font-size: clamp(24px,3.5vw,44px); font-weight: 900; color: #fff; margin: 0 0 16px; }
.section-line { display: block; width: 60px; height: 3px; background: linear-gradient(90deg,#00e87c,transparent); border-radius: 2px; margin-bottom: 24px; }
.section-sub { font-family: 'Rajdhani',sans-serif; font-size: 17px; color: #a8bfd8; line-height: 1.7; margin: 0 0 48px; max-width: 680px; }
.cards-grid { display: grid; grid-template-columns: repeat(auto-fit,minmax(min(300px,100%),1fr)); gap: 20px; margin-bottom: 48px; }
.vol-card { background: var(--bg-card,#0e1f44); border: 1px solid; border-radius: 16px; padding: 32px 26px; display: flex; flex-direction: column; }
.card-icon { font-size: 36px; margin-bottom: 16px; }
.card-title { font-family: 'Orbitron',sans-serif; font-size: 15px; font-weight: 700; color: #fff; letter-spacing: .06em; margin: 0 0 10px; }
.card-desc { font-size: 14px; color: #a8bfd8; line-height: 1.65; margin: 0 0 20px; flex: 1; }
.card-btn { padding: 12px 0; border: 1px solid; border-radius: 8px; font-family: 'Share Tech Mono',monospace; font-size: 12px; letter-spacing: .1em; cursor: pointer; width: 100%; transition: opacity .2s; }
.card-btn:hover { opacity: .8; }
.stats-band { background: linear-gradient(135deg,rgba(0,232,124,.06),rgba(10,21,53,.97)); border: 1px solid rgba(0,232,124,.18); border-radius: 20px; padding: 40px 36px; }
.stats-inner { display: grid; grid-template-columns: repeat(auto-fit,minmax(160px,1fr)); gap: 28px; text-align: center; margin-bottom: 24px; }
.stat-num { font-family: 'Orbitron',sans-serif; font-size: 32px; font-weight: 900; display: block; }
.stat-label { font-family: 'Share Tech Mono',monospace; font-size: 10px; letter-spacing: .18em; color: #a8bfd8; }
.stats-note { font-size: 15px; color: #a8bfd8; line-height: 1.7; text-align: center; max-width: 560px; margin: 0 auto; }
.modal-icon { font-size: 40px; text-align: center; margin-bottom: 12px; }
.modal-title { font-family: 'Orbitron',sans-serif; font-size: 20px; font-weight: 700; color: #fff; text-align: center; margin: 0 0 8px; }
.modal-sub { font-size: 14px; color: #a8bfd8; text-align: center; line-height: 1.6; margin: 0 0 24px; }
.oasis-input { width: 100%; background: rgba(255,255,255,.05); border: 1px solid rgba(0,232,124,.2); border-radius: 8px; padding: 11px 14px; color: #fff; font-size: 14px; outline: none; box-sizing: border-box; margin-bottom: 12px; display: block; font-family: inherit; }
option { background: #0a1535; }
.btn-submit { width: 100%; padding: 14px; background: linear-gradient(135deg,#00e87c,#059669); border: none; border-radius: 10px; color: #fff; font-family: 'Orbitron',sans-serif; font-size: 13px; font-weight: 700; letter-spacing: .08em; cursor: pointer; margin-top: 4px; }
</style>
