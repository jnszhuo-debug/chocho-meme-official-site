<template>
  <div class="relative">
    <MainNavbar />
    
    <!-- Hero Section -->
    <section class="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div id="hero-content" class="text-center z-10">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 neon-text uppercase leading-tight">
          Warp Your Pet<br/>Into Web3
        </h1>
        <p class="text-white/60 max-w-xl mx-auto text-lg mb-10">
          Chocho.meme 是你的寵物在 Web3 的專屬護照。<br/>
          我們不只玩 Meme，我們重新定義寵物社交與科技。
        </p>
        <div class="animate-bounce mt-20">
          <p class="text-xs tracking-widest text-white/30 mb-2 uppercase">Scroll to start journey</p>
          <div class="w-px h-12 bg-neon-orange mx-auto"></div>
        </div>
      </div>
      
      <!-- Interactive Elements Placeholder -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-orange/10 rounded-full blur-[100px]"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-[120px]"></div>
      </div>
    </section>

    <!-- Additional sections would go here -->
    <section class="h-screen flex items-center justify-center">
      <h2 class="text-3xl font-bold opacity-30 italic">互動插畫內容加載中...</h2>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(async () => {
  const { gsap } = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)

  gsap.from("#hero-content", {
    y: 50,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out"
  })
})
</script>