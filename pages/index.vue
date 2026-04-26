<template>
  <div ref="main">
    <MainNavbar />

    <!-- Hero Section -->
    <section class="hero-section">
      <ClientOnly>
        <div id="hero-content" class="hero-content">
          <h1 class="hero-title">
            Warp Your Pet<br/>Into Web3
          </h1>
          <p class="hero-sub">
            Chocho.meme 是你的寵物在 Web3 的專屬護照。<br/>
            我們不只玩 Meme，我們重新定義寵物社交與科技。
          </p>
          <div class="hero-cta-row">
            <NuxtLink to="/genesis-captain" class="btn-primary">加入創世隊長</NuxtLink>
            <a href="#features" class="btn-ghost">了解更多</a>
          </div>
          <div class="scroll-hint">
            <p class="scroll-label">Scroll to start journey</p>
            <div class="scroll-line"></div>
          </div>
        </div>

        <!-- SSR fallback -->
        <template #fallback>
          <div class="hero-content">
            <h1 class="hero-title">Warp Your Pet<br/>Into Web3</h1>
            <p class="hero-sub">
              Chocho.meme 是你的寵物在 Web3 的專屬護照。<br/>
              我們不只玩 Meme，我們重新定義寵物社交與科技。
            </p>
          </div>
        </template>
      </ClientOnly>

      <!-- Mascot -->
      <ClientOnly>
        <div class="hero-mascot">
          <NeonPoodle />
        </div>
      </ClientOnly>

      <!-- Background glows -->
      <div class="hero-bg">
        <div class="glow glow-amber"></div>
        <div class="glow glow-red"></div>
      </div>
    </section>

    <!-- UI Cards Section -->
    <section id="features" class="cards-section">
      <ClientOnly>
        <UICards />
      </ClientOnly>
    </section>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const main = ref(null)
let ctx

onMounted(async () => {
  try {
    const { gsap } = await import('gsap')
    const { ScrollTrigger } = await import('gsap/ScrollTrigger')
    gsap.registerPlugin(ScrollTrigger)

    ctx = gsap.context(() => {
      if (document.querySelector('#hero-content')) {
        gsap.from('#hero-content', {
          y: 60,
          opacity: 0,
          duration: 1.5,
          ease: 'expo.out',
          delay: 0.5,
        })
      }
      if (document.querySelector('.hero-mascot')) {
        gsap.from('.hero-mascot', {
          x: 80,
          opacity: 0,
          duration: 1.8,
          ease: 'expo.out',
          delay: 0.9,
        })
      }
    }, main.value)

    ScrollTrigger.refresh()
  } catch (e) {
    console.warn('GSAP load failed:', e)
  }
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
}

.hero-content {
  text-align: center;
  position: relative;
  z-index: 10;
  padding: 0 24px;
  max-width: 640px;
}

.hero-title {
  font-family: 'Orbitron', monospace;
  font-size: clamp(2.2rem, 6vw, 4.5rem);
  font-weight: 900;
  color: #FF9900;
  text-shadow: 0 0 10px #FF9900, 0 0 30px #FF9900, 0 0 60px rgba(255, 153, 0, 0.4);
  text-transform: uppercase;
  line-height: 1.1;
  margin-bottom: 24px;
  letter-spacing: -0.02em;
}

.hero-sub {
  color: rgba(255, 255, 255, 0.6);
  max-width: 500px;
  margin: 0 auto 40px;
  font-size: 1.05rem;
  line-height: 1.8;
}

.hero-cta-row {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 64px;
}

.btn-primary {
  background: linear-gradient(135deg, #EF4444, #F97316);
  padding: 14px 32px;
  border-radius: 9999px;
  color: white;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  box-shadow: 0 0 20px rgba(239, 68, 68, 0.5);
  transition: transform 0.2s, box-shadow 0.2s;
}
.btn-primary:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px rgba(239, 68, 68, 0.7);
}

.btn-ghost {
  border: 1px solid rgba(245, 158, 11, 0.5);
  padding: 13px 32px;
  border-radius: 9999px;
  color: rgba(245, 158, 11, 0.9);
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  transition: border-color 0.2s, color 0.2s;
}
.btn-ghost:hover {
  border-color: #F59E0B;
  color: #F59E0B;
}

.scroll-hint {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.scroll-label {
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.3);
  text-transform: uppercase;
}
.scroll-line {
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, #F59E0B, transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}

.hero-mascot {
  position: absolute;
  right: 6%;
  bottom: 8%;
  z-index: 5;
}
@media (max-width: 900px) {
  .hero-mascot { display: none; }
}

.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.glow {
  position: absolute;
  border-radius: 50%;
}
.glow-amber {
  top: 20%;
  left: 15%;
  width: 400px;
  height: 400px;
  background: rgba(245, 158, 11, 0.1);
  filter: blur(100px);
  animation: pulseGlow 4s ease-in-out infinite;
}
.glow-red {
  bottom: 20%;
  right: 15%;
  width: 540px;
  height: 540px;
  background: rgba(239, 68, 68, 0.08);
  filter: blur(120px);
  animation: pulseGlow 6s ease-in-out infinite reverse;
}

.cards-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 24px;
}

@keyframes pulseGlow {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50%       { opacity: 1;   transform: scale(1.2); }
}
@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; transform: scaleY(0.8); }
  50%       { opacity: 1;   transform: scaleY(1); }
}
</style>
