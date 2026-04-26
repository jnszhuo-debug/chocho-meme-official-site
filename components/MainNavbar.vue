<template>
  <nav class="navbar">
    <!-- Logo -->
    <NuxtLink to="/" class="logo-wrap">
      <i class="fa-solid fa-dog logo-icon"></i>
      <div class="logo-text-block">
        <span class="logo-name">
          <span class="logo-white">Chocho</span><span class="logo-amber">.meme</span>
        </span>
        <span class="logo-tagline">狗狗每一刻的陪伴，值得與眾不同的獎勵</span>
      </div>
    </NuxtLink>

    <div class="nav-right">
      <div class="nav-links">
        <a href="#features" class="nav-link">關於協議</a>
        <a href="#features" class="nav-link">技術</a>
        <a href="#features" class="nav-link">社群</a>
      </div>
      <NuxtLink to="/genesis-captain" class="btn-join">
        加入創世隊長
      </NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  padding: 12px 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(245, 158, 11, 0.1);
}

.logo-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.logo-icon {
  font-size: 1.6rem;
  color: #F59E0B;
  filter: drop-shadow(0 0 8px rgba(245, 158, 11, 0.7));
}

.logo-text-block {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.logo-name {
  font-family: 'Orbitron', monospace;
  font-weight: 900;
  font-size: 1.15rem;
  letter-spacing: -0.01em;
}

.logo-white { color: #ffffff; }
.logo-amber { color: #F59E0B; }

.logo-tagline {
  font-size: 0.6rem;
  color: rgba(255, 255, 255, 0.35);
  letter-spacing: 0.04em;
  margin-top: 2px;
  white-space: nowrap;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-links {
  display: flex;
  gap: 24px;
}

@media (max-width: 768px) {
  .nav-links { display: none; }
}

.nav-link {
  font-size: 0.85rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.2s;
}
.nav-link:hover { color: #F59E0B; }

.btn-join {
  background: linear-gradient(135deg, #EF4444, #F97316);
  padding: 9px 22px;
  border-radius: 9999px;
  color: white;
  font-weight: 700;
  font-size: 0.85rem;
  text-decoration: none;
  box-shadow: 0 0 15px rgba(239, 68, 68, 0.5);
  transition: transform 0.2s, box-shadow 0.2s;
  white-space: nowrap;
}
.btn-join:hover {
  transform: scale(1.05);
  box-shadow: 0 0 25px rgba(239, 68, 68, 0.7);
}
</style>
