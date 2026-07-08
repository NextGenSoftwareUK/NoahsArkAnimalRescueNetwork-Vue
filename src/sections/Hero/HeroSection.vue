<template>
  <section class="hero" id="hero">
    <div class="hero-glow" />
    <div class="hero-content">
      <div class="hero-kicker">🐾 OASIS OMNIVERSE · NOAH'S ARK ANIMAL RESCUE NETWORK</div>
      <h1 class="hero-title">Ready to make a<br><em>difference?</em></h1>
      <p class="hero-sub">Report strays, adopt animals, volunteer, foster and fundraise. Every action earns OASIS karma and saves real lives. One global network, united for animals.</p>
      <div class="hero-ctas">
        <a href="#adopt" class="btn-primary">🐾 Adopt Now</a>
        <a href="#strays" class="btn-outline">Report a Stray</a>
      </div>
      <div class="hero-stats">
        <div class="hs"><span class="hs-n">12,480</span><span class="hs-l">Animals Rescued</span></div>
        <div class="hs-div" />
        <div class="hs"><span class="hs-n">3,400</span><span class="hs-l">Active Volunteers</span></div>
        <div class="hs-div" />
        <div class="hs"><span class="hs-n">84</span><span class="hs-l">Countries</span></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 120px 40px 80px; position: relative; text-align: center; }
.hero-glow { position: absolute; top: 20%; left: 50%; transform: translateX(-50%); width: 600px; height: 400px; background: radial-gradient(ellipse, rgba(0,232,124,.1) 0%, transparent 70%); pointer-events: none; }
.hero-content { position: relative; z-index: 1; max-width: 780px; }
.hero-kicker { font-family: 'Share Tech Mono', monospace; font-size: 11px; letter-spacing: .2em; color: #00e87c; margin-bottom: 24px; }
.hero-title { font-family: 'Orbitron', sans-serif; font-size: clamp(36px,6vw,80px); font-weight: 900; color: #fff; line-height: 1.1; margin: 0 0 24px; letter-spacing: .04em; }
.hero-title em { background: linear-gradient(135deg, #00e87c, #34d399); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-style: normal; }
.hero-sub { font-family: 'Rajdhani', sans-serif; font-size: clamp(16px,2vw,20px); color: #a8bfd8; line-height: 1.7; margin: 0 0 40px; max-width: 620px; margin-left: auto; margin-right: auto; }
.hero-ctas { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-bottom: 56px; }
.btn-primary { background: linear-gradient(135deg,#00e87c,#059669); color: #fff; padding: 16px 36px; border-radius: 10px; font-family: 'Orbitron',sans-serif; font-size: 13px; font-weight: 700; letter-spacing: .1em; text-decoration: none; }
.btn-outline { border: 1px solid rgba(0,232,124,.4); color: #00e87c; padding: 16px 36px; border-radius: 10px; font-family: 'Orbitron',sans-serif; font-size: 13px; font-weight: 700; letter-spacing: .1em; text-decoration: none; }
.hero-stats { display: flex; align-items: center; justify-content: center; gap: 32px; }
.hs { text-align: center; }
.hs-n { font-family: 'Orbitron', sans-serif; font-size: 28px; font-weight: 900; color: #00e87c; display: block; }
.hs-l { font-family: 'Share Tech Mono', monospace; font-size: 10px; letter-spacing: .16em; color: #a8bfd8; }
.hs-div { width: 1px; height: 40px; background: rgba(0,232,124,.2); }
</style>
