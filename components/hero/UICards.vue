<template>
  <div class="cards-wrapper">
    <div class="section-label">LIVE ON-CHAIN DATA</div>
    <h2 class="section-title">你的寵物，你的資產</h2>
    <p class="section-sub">每一步遛狗都是鏈上紀錄，每一次互動都是 CHO 收益。</p>

    <div class="cards-grid">
      <!-- CHO Balance Card -->
      <div class="card card-balance">
        <div class="card-header">
          <span class="card-tag">WALLET</span>
          <i class="fa-solid fa-circle-dollar-to-slot card-icon amber"></i>
        </div>
        <div class="balance-amount">
          <span class="balance-num">2,847</span>
          <span class="balance-unit">CHO</span>
        </div>
        <div class="balance-hint">≈ 折抵服務費用 NT$142</div>

        <div class="balance-stats">
          <div class="stat">
            <span class="stat-label">今日收益</span>
            <span class="stat-val green">+38 CHO</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-label">本週總計</span>
            <span class="stat-val amber">+214 CHO</span>
          </div>
        </div>

        <div class="income-list">
          <div class="income-row" v-for="item in incomeItems" :key="item.label">
            <div class="income-dot" :style="{ background: item.color }"></div>
            <span class="income-label">{{ item.label }}</span>
            <span class="income-val">{{ item.val }}</span>
          </div>
        </div>

        <!-- Neon border glow -->
        <div class="card-glow amber-glow"></div>
      </div>

      <!-- Walk Track Card -->
      <div class="card card-track">
        <div class="card-header">
          <span class="card-tag">GPS TRACK</span>
          <i class="fa-solid fa-route card-icon cyan"></i>
        </div>
        <div class="track-stats-row">
          <div class="track-stat">
            <span class="track-num">3.42</span>
            <span class="track-unit">km</span>
          </div>
          <div class="track-stat">
            <span class="track-num">42</span>
            <span class="track-unit">min</span>
          </div>
          <div class="track-stat">
            <span class="track-num">+56</span>
            <span class="track-unit">CHO</span>
          </div>
        </div>

        <!-- SVG Mock Map -->
        <div class="map-container">
          <svg viewBox="0 0 320 180" class="track-map">
            <!-- Grid lines -->
            <line v-for="i in 6" :key="'h'+i" :x1="0" :y1="i*30" :x2="320" :y2="i*30" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
            <line v-for="i in 11" :key="'v'+i" :x1="i*32" :y1="0" :x2="i*32" :y2="180" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>

            <!-- Walk path -->
            <path
              d="M 40 140 C 60 120, 80 130, 100 100 S 140 60, 160 80 S 200 120, 220 90 S 260 50, 280 70"
              fill="none"
              stroke="rgba(6,182,212,0.3)"
              stroke-width="6"
              stroke-linecap="round"
            />
            <path
              d="M 40 140 C 60 120, 80 130, 100 100 S 140 60, 160 80 S 200 120, 220 90 S 260 50, 280 70"
              fill="none"
              stroke="#06B6D4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-dasharray="6 3"
              class="track-line"
            />

            <!-- Start dot -->
            <circle cx="40" cy="140" r="6" fill="#10B981"/>
            <circle cx="40" cy="140" r="10" fill="none" stroke="#10B981" stroke-width="1.5" opacity="0.5"/>
            <text x="50" y="155" font-size="9" fill="rgba(255,255,255,0.5)">START</text>

            <!-- End dot -->
            <circle cx="280" cy="70" r="6" fill="#F59E0B"/>
            <circle cx="280" cy="70" r="10" fill="none" stroke="#F59E0B" stroke-width="1.5" opacity="0.5" class="end-pulse"/>
            <text x="255" y="60" font-size="9" fill="rgba(255,255,255,0.5)">NOW</text>

            <!-- CHO reward pop -->
            <rect x="145" y="50" width="52" height="20" rx="10" fill="rgba(245,158,11,0.15)" stroke="rgba(245,158,11,0.5)" stroke-width="1"/>
            <text x="171" y="64" text-anchor="middle" font-size="9" fill="#F59E0B" font-weight="bold">+56 CHO</text>
          </svg>
        </div>

        <!-- Pets nearby -->
        <div class="nearby-row">
          <span class="nearby-label">附近夥伴</span>
          <div class="nearby-avatars">
            <img v-for="(av, i) in nearbyAvatars" :key="i" :src="av" class="nearby-avatar" :style="{ zIndex: 10 - i }"/>
          </div>
          <span class="nearby-count">+3 位正在溜狗中</span>
        </div>

        <div class="card-glow cyan-glow"></div>
      </div>

      <!-- Leaderboard Card -->
      <div class="card card-leaderboard">
        <div class="card-header">
          <span class="card-tag">LEADERBOARD</span>
          <i class="fa-solid fa-ranking-star card-icon red"></i>
        </div>
        <div class="rank-list">
          <div class="rank-row" v-for="(user, i) in rankUsers" :key="i">
            <span class="rank-num" :class="i < 3 ? 'rank-top' : ''">{{ i + 1 }}</span>
            <img :src="user.avatar" class="rank-avatar"/>
            <span class="rank-name">{{ user.name }}</span>
            <span class="rank-km">{{ user.km }} km</span>
            <span class="rank-cho">{{ user.cho }} CHO</span>
          </div>
        </div>
        <div class="card-glow red-glow"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const incomeItems = [
  { label: '遛狗任務', val: '+38 CHO', color: '#06B6D4' },
  { label: '邀請獎勵', val: '+120 CHO', color: '#10B981' },
  { label: '互助任務', val: '+56 CHO', color: '#F59E0B' },
]

const nearbyAvatars = [
  'https://i.pravatar.cc/100?img=11',
  'https://i.pravatar.cc/100?img=5',
  'https://i.pravatar.cc/100?img=33',
]

const rankUsers = [
  { name: 'Lisa W.', avatar: 'https://i.pravatar.cc/100?img=47', km: '28.4', cho: '892' },
  { name: 'Jack C.', avatar: 'https://i.pravatar.cc/100?img=11', km: '24.1', cho: '764' },
  { name: 'Amy L.',  avatar: 'https://i.pravatar.cc/100?img=5',  km: '22.7', cho: '710' },
  { name: 'Kevin T.', avatar: 'https://i.pravatar.cc/100?img=33', km: '19.2', cho: '598' },
  { name: 'You',    avatar: 'https://i.pravatar.cc/100?img=22', km: '16.8', cho: '+214' },
]
</script>

<style scoped>
.cards-wrapper {
  width: 100%;
  max-width: 1100px;
  text-align: center;
}

.section-label {
  font-size: 0.65rem;
  letter-spacing: 0.25em;
  color: rgba(245, 158, 11, 0.6);
  text-transform: uppercase;
  margin-bottom: 12px;
}

.section-title {
  font-family: 'Orbitron', monospace;
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 900;
  color: white;
  margin-bottom: 16px;
  text-shadow: 0 0 20px rgba(245, 158, 11, 0.2);
}

.section-sub {
  color: rgba(255, 255, 255, 0.5);
  font-size: 1rem;
  margin-bottom: 56px;
  line-height: 1.7;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

/* Base card */
.card {
  position: relative;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 20px;
  padding: 28px;
  overflow: hidden;
  text-align: left;
  border: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(8px);
  transition: transform 0.3s;
}
.card:hover { transform: translateY(-4px); }

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.card-tag {
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: rgba(255, 255, 255, 0.35);
}

.card-icon { font-size: 1.1rem; }
.card-icon.amber { color: #F59E0B; filter: drop-shadow(0 0 6px rgba(245,158,11,0.6)); }
.card-icon.cyan  { color: #06B6D4; filter: drop-shadow(0 0 6px rgba(6,182,212,0.6)); }
.card-icon.red   { color: #EF4444; filter: drop-shadow(0 0 6px rgba(239,68,68,0.6)); }

/* Glow backgrounds */
.card-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  border-radius: 20px;
}
.amber-glow { box-shadow: inset 0 0 40px rgba(245,158,11,0.06); border: 1px solid rgba(245,158,11,0.2); }
.cyan-glow  { box-shadow: inset 0 0 40px rgba(6,182,212,0.06);  border: 1px solid rgba(6,182,212,0.2); }
.red-glow   { box-shadow: inset 0 0 40px rgba(239,68,68,0.06);  border: 1px solid rgba(239,68,68,0.2); }

/* ── Balance Card ── */
.balance-amount {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 4px;
}
.balance-num {
  font-family: 'Orbitron', monospace;
  font-size: 2.8rem;
  font-weight: 900;
  color: #F59E0B;
  text-shadow: 0 0 20px rgba(245,158,11,0.5);
  line-height: 1;
}
.balance-unit {
  font-size: 1rem;
  color: rgba(245,158,11,0.6);
  font-weight: 700;
}
.balance-hint {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.3);
  margin-bottom: 20px;
}
.balance-stats {
  display: flex;
  gap: 0;
  margin-bottom: 20px;
  background: rgba(255,255,255,0.04);
  border-radius: 12px;
  overflow: hidden;
}
.stat {
  flex: 1;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.stat-divider {
  width: 1px;
  background: rgba(255,255,255,0.08);
}
.stat-label { font-size: 0.7rem; color: rgba(255,255,255,0.35); }
.stat-val   { font-size: 0.9rem; font-weight: 700; }
.stat-val.green  { color: #10B981; }
.stat-val.amber  { color: #F59E0B; }

.income-list { display: flex; flex-direction: column; gap: 10px; }
.income-row {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.82rem;
}
.income-dot   { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.income-label { flex: 1; color: rgba(255,255,255,0.5); }
.income-val   { color: rgba(255,255,255,0.8); font-weight: 600; }

/* ── Track Card ── */
.track-stats-row {
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
}
.track-stat { display: flex; align-items: baseline; gap: 4px; }
.track-num  {
  font-family: 'Orbitron', monospace;
  font-size: 1.6rem;
  font-weight: 900;
  color: #06B6D4;
  text-shadow: 0 0 12px rgba(6,182,212,0.5);
}
.track-unit { font-size: 0.75rem; color: rgba(6,182,212,0.6); font-weight: 600; }

.map-container {
  background: rgba(0,0,0,0.4);
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 16px;
  border: 1px solid rgba(6,182,212,0.1);
}
.track-map { width: 100%; display: block; }

.track-line { animation: dashMove 8s linear infinite; }
@keyframes dashMove {
  to { stroke-dashoffset: -100; }
}

.end-pulse { animation: endPulse 2s ease-in-out infinite; }
@keyframes endPulse {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50%       { opacity: 0.8; transform: scale(1.4); }
}

.nearby-row {
  display: flex;
  align-items: center;
  gap: 10px;
}
.nearby-label { font-size: 0.72rem; color: rgba(255,255,255,0.35); }
.nearby-avatars { display: flex; }
.nearby-avatar {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 2px solid rgba(6,182,212,0.4);
  margin-left: -6px;
  object-fit: cover;
}
.nearby-avatar:first-child { margin-left: 0; }
.nearby-count { font-size: 0.72rem; color: #06B6D4; margin-left: 6px; }

/* ── Leaderboard Card ── */
.rank-list { display: flex; flex-direction: column; gap: 10px; }
.rank-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 10px;
  background: rgba(255,255,255,0.03);
  font-size: 0.82rem;
  transition: background 0.2s;
}
.rank-row:last-child {
  background: rgba(245,158,11,0.08);
  border: 1px solid rgba(245,158,11,0.2);
}
.rank-row:hover { background: rgba(255,255,255,0.06); }

.rank-num {
  width: 20px;
  font-size: 0.78rem;
  font-weight: 700;
  color: rgba(255,255,255,0.3);
  text-align: center;
}
.rank-num.rank-top { color: #F59E0B; text-shadow: 0 0 8px rgba(245,158,11,0.6); }

.rank-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid rgba(255,255,255,0.15);
}
.rank-name { flex: 1; color: rgba(255,255,255,0.8); font-weight: 500; }
.rank-km   { color: rgba(6,182,212,0.7); font-size: 0.75rem; }
.rank-cho  { color: #F59E0B; font-weight: 700; font-size: 0.8rem; min-width: 60px; text-align: right; }
</style>
