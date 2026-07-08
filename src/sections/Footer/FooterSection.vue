<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-about">
        <div class="footer-brand">🐾 NOAH'S ARK ARN</div>
        <p>Part of the OASIS Omniverse — the world's first karma-powered animal rescue network. Every rescue, adoption and act of care is logged on the OASIS blockchain.</p>
      </div>
      <div class="footer-col">
        <div class="footer-heading">RESCUE</div>
        <a href="#strays">Report a Stray</a>
        <a href="#adopt">Adopt a Pet</a>
        <a href="#network">Find a Centre</a>
        <a href="#profiles">Animal Profiles</a>
      </div>
      <div class="footer-col">
        <div class="footer-heading">COMMUNITY</div>
        <a href="#volunteer">Volunteer</a>
        <a href="#community">Forum</a>
        <a href="#karma">Karma System</a>
        <a href="#healing">Animal Healing</a>
      </div>
      <div class="footer-col">
        <div class="footer-heading">OASIS</div>
        <a href="https://oasisomniverse.one" target="_blank">OASIS Omniverse</a>
        <a href="#features">Features</a>
        <a href="#digitalpet">Digital Pet</a>
        <a href="#franchise">Franchise</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 Noah's Ark Animal Rescue Network · OASIS Omniverse</span>
      <span>Built with love on WEB4</span>
    </div>
  </footer>
</template>

<style scoped>
.footer { background: rgba(3,7,20,.97); border-top: 1px solid rgba(0,232,124,.1); padding: 80px 40px 40px; }
.footer-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; margin-bottom: 60px; }
.footer-brand { font-family: 'Orbitron',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .16em; color: #00e87c; margin-bottom: 16px; }
.footer-about p { font-size: 14px; color: #a8bfd8; line-height: 1.7; }
.footer-heading { font-family: 'Share Tech Mono',monospace; font-size: 10px; letter-spacing: .2em; color: #00e87c; margin-bottom: 16px; }
.footer-col { display: flex; flex-direction: column; gap: 10px; }
.footer-col a { font-size: 14px; color: #a8bfd8; text-decoration: none; transition: color .2s; }
.footer-col a:hover { color: #00e87c; }
.footer-bottom { max-width: 1100px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(0,232,124,.08); padding-top: 24px; font-family: 'Share Tech Mono',monospace; font-size: 11px; color: #a8bfd8; letter-spacing: .06em; flex-wrap: wrap; gap: 12px; }
@media (max-width: 768px) { .footer-inner { grid-template-columns: 1fr 1fr; } }
</style>
