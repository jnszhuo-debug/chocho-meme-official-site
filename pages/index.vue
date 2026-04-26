<template>
  <div>
    <MainNavbar />

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">
          Warp Your Pet<br/>Into Web3
        </h1>
        <p class="hero-sub">
          Chocho.meme 是你的寵物在 Web3 的專屬護照。<br/>
          我們不只玩 Meme，我們重新定義寵物社交與科技。
        </p>
        <div style="margin-top:60px;">
          <p style="font-size:0.7rem; letter-spacing:0.2em; color:rgba(255,255,255,0.3); margin-bottom:8px; text-transform:uppercase;">Scroll to start journey</p>
          <div style="width:1px; height:48px; background:#F59E0B; margin:0 auto;"></div>
        </div>
      </div>

      <!-- Background glows -->
      <div class="hero-bg">
        <div class="glow glow-amber"></div>
        <div class="glow glow-red"></div>
      </div>
    </section>

    <!-- Placeholder section -->
    <section style="height:100vh; display:flex; align-items:center; justify-content:center;">
      <h2 style="color:rgba(255,255,255,0.2); font-style:italic; font-size:1.8rem;">互動插畫內容加載中...</h2>
    </section>
  </div>
</template>

<script setup>
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
  animation: heroIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.hero-title {
  font-size: clamp(2.5rem, 7vw, 5rem);
  font-weight: 900;
  color: #FF9900;
  text-shadow: 0 0 10px #FF9900, 0 0 30px #FF9900, 0 0 60px rgba(255,153,0,0.4);
  text-transform: uppercase;
  line-height: 1.1;
  margin-bottom: 24px;
  letter-spacing: -0.02em;
}

.hero-sub {
  color: rgba(255, 255, 255, 0.6);
  max-width: 500px;
  margin: 0 auto 40px;
  font-size: 1.1rem;
  line-height: 1.7;
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
  top: 25%;
  left: 25%;
  width: 320px;
  height: 320px;
  background: rgba(245, 158, 11, 0.12);
  filter: blur(100px);
  animation: pulseGlow 4s ease-in-out infinite;
}

.glow-red {
  bottom: 25%;
  right: 25%;
  width: 480px;
  height: 480px;
  background: rgba(239, 68, 68, 0.1);
  filter: blur(120px);
  animation: pulseGlow 6s ease-in-out infinite reverse;
}

@keyframes heroIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulseGlow {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.15); }
}
</style>
