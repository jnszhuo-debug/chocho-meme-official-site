<template>
  <div>
    <MainNavbar />

    <!-- Hero Section -->
    <section style="min-height:100vh; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden; padding-top:80px;">
      <ClientOnly>
        <div id="hero-content" style="text-align:center; position:relative; z-index:10; padding:0 24px;">
          <h1 style="font-size:clamp(2.5rem,7vw,5rem); font-weight:900; color:#FF9900; text-shadow:0 0 10px #FF9900,0 0 30px #FF9900; text-transform:uppercase; line-height:1.1; margin-bottom:24px; letter-spacing:-0.02em;">
            Warp Your Pet<br/>Into Web3
          </h1>
          <p style="color:rgba(255,255,255,0.6); max-width:500px; margin:0 auto 40px; font-size:1.1rem; line-height:1.7;">
            Chocho.meme 是你的寵物在 Web3 的專屬護照。<br/>
            我們不只玩 Meme，我們重新定義寵物社交與科技。
          </p>
          <div style="margin-top:60px;">
            <p style="font-size:0.7rem; letter-spacing:0.2em; color:rgba(255,255,255,0.3); margin-bottom:8px; text-transform:uppercase;">Scroll to start journey</p>
            <div style="width:1px; height:48px; background:#F59E0B; margin:0 auto;"></div>
          </div>
        </div>

        <template #fallback>
          <!-- SSR fallback：與客戶端 DOM 完全一致，避免 hydration mismatch -->
          <div style="text-align:center; position:relative; z-index:10; padding:0 24px;">
            <h1 style="font-size:clamp(2.5rem,7vw,5rem); font-weight:900; color:#FF9900; text-shadow:0 0 10px #FF9900,0 0 30px #FF9900; text-transform:uppercase; line-height:1.1; margin-bottom:24px; letter-spacing:-0.02em;">
              Warp Your Pet<br/>Into Web3
            </h1>
            <p style="color:rgba(255,255,255,0.6); max-width:500px; margin:0 auto 40px; font-size:1.1rem; line-height:1.7;">
              Chocho.meme 是你的寵物在 Web3 的專屬護照。<br/>
              我們不只玩 Meme，我們重新定義寵物社交與科技。
            </p>
          </div>
        </template>
      </ClientOnly>

      <!-- Background glows -->
      <div style="position:absolute; inset:0; pointer-events:none;">
        <div style="position:absolute; top:25%; left:25%; width:256px; height:256px; background:rgba(245,158,11,0.08); border-radius:50%; filter:blur(100px);"></div>
        <div style="position:absolute; bottom:25%; right:25%; width:384px; height:384px; background:rgba(239,68,68,0.08); border-radius:50%; filter:blur(120px);"></div>
      </div>
    </section>

    <!-- Placeholder section -->
    <section style="height:100vh; display:flex; align-items:center; justify-content:center;">
      <h2 style="color:rgba(255,255,255,0.2); font-style:italic; font-size:1.8rem;">互動插畫內容加載中...</h2>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(async () => {
  if (!process.client) return

  try {
    const { gsap } = await import('gsap')
    const { ScrollTrigger } = await import('gsap/ScrollTrigger')
    gsap.registerPlugin(ScrollTrigger)

    const targets = gsap.utils.toArray('#hero-content')
    console.log('GSAP Initialized', targets)

    if (targets.length > 0) {
      gsap.from('#hero-content', {
        y: 50,
        opacity: 0,
        duration: 1.4,
        ease: 'power4.out',
      })
    }

    ScrollTrigger.refresh()
  } catch (e) {
    console.warn('GSAP load failed:', e)
  }
})
</script>
