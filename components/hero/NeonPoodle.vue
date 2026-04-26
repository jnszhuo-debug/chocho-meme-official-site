<template>
  <div class="neon-poodle-wrap">
    <svg
      width="280"
      height="320"
      viewBox="0 0 280 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="neon-poodle"
    >
      <defs>
        <!-- Amber neon glow filter -->
        <filter id="neonAmber" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3" result="blur1"/>
          <feGaussianBlur stdDeviation="8" result="blur2"/>
          <feMerge>
            <feMergeNode in="blur2"/>
            <feMergeNode in="blur1"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <!-- Red neon glow filter -->
        <filter id="neonRed" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="4" result="blur1"/>
          <feGaussianBlur in="blur1" stdDeviation="10" result="blur2"/>
          <feMerge>
            <feMergeNode in="blur2"/>
            <feMergeNode in="blur1"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <!-- Body -->
      <ellipse cx="140" cy="210" rx="52" ry="46" fill="none" stroke="#F59E0B" stroke-width="2.5" filter="url(#neonAmber)" class="body-stroke"/>

      <!-- Head -->
      <circle cx="140" cy="130" r="42" fill="none" stroke="#F59E0B" stroke-width="2.5" filter="url(#neonAmber)" class="head-stroke"/>

      <!-- Top pom-pom (head fur) -->
      <circle cx="140" cy="88" r="22" fill="none" stroke="#EF4444" stroke-width="2" filter="url(#neonRed)" class="pom-top"/>
      <circle cx="118" cy="96" r="14" fill="none" stroke="#EF4444" stroke-width="2" filter="url(#neonRed)" class="pom-top"/>
      <circle cx="162" cy="96" r="14" fill="none" stroke="#EF4444" stroke-width="2" filter="url(#neonRed)" class="pom-top"/>

      <!-- Ears -->
      <ellipse cx="100" cy="138" rx="16" ry="28" fill="none" stroke="#F59E0B" stroke-width="2" filter="url(#neonAmber)" class="ear-stroke"/>
      <ellipse cx="180" cy="138" rx="16" ry="28" fill="none" stroke="#F59E0B" stroke-width="2" filter="url(#neonAmber)" class="ear-stroke"/>

      <!-- Eyes -->
      <circle cx="126" cy="126" r="5" fill="#F59E0B" filter="url(#neonAmber)" class="eye"/>
      <circle cx="154" cy="126" r="5" fill="#F59E0B" filter="url(#neonAmber)" class="eye"/>
      <!-- Eye shine -->
      <circle cx="128" cy="124" r="2" fill="white" opacity="0.8"/>
      <circle cx="156" cy="124" r="2" fill="white" opacity="0.8"/>

      <!-- Nose -->
      <ellipse cx="140" cy="142" rx="6" ry="4" fill="#EF4444" filter="url(#neonRed)"/>

      <!-- Smile -->
      <path d="M 128 150 Q 140 162 152 150" fill="none" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" filter="url(#neonAmber)"/>

      <!-- Neck -->
      <rect x="128" y="170" width="24" height="14" rx="4" fill="none" stroke="#F59E0B" stroke-width="2" filter="url(#neonAmber)"/>

      <!-- Collar tag -->
      <circle cx="140" cy="190" r="7" fill="none" stroke="#EF4444" stroke-width="2" filter="url(#neonRed)"/>
      <text x="140" y="194" text-anchor="middle" font-size="7" fill="#EF4444" font-weight="bold">C</text>

      <!-- Front legs -->
      <line x1="114" y1="248" x2="104" y2="292" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round" filter="url(#neonAmber)" class="leg"/>
      <line x1="166" y1="248" x2="176" y2="292" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round" filter="url(#neonAmber)" class="leg"/>

      <!-- Back legs -->
      <line x1="124" y1="254" x2="110" y2="296" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" filter="url(#neonAmber)" class="leg"/>
      <line x1="156" y1="254" x2="170" y2="296" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" filter="url(#neonAmber)" class="leg"/>

      <!-- Paw poms -->
      <circle cx="104" cy="296" r="9" fill="none" stroke="#EF4444" stroke-width="2" filter="url(#neonRed)"/>
      <circle cx="176" cy="296" r="9" fill="none" stroke="#EF4444" stroke-width="2" filter="url(#neonRed)"/>
      <circle cx="110" cy="300" r="7" fill="none" stroke="#EF4444" stroke-width="1.5" filter="url(#neonRed)"/>
      <circle cx="170" cy="300" r="7" fill="none" stroke="#EF4444" stroke-width="1.5" filter="url(#neonRed)"/>

      <!-- Tail -->
      <path d="M 190 210 Q 230 190 220 165 Q 210 145 235 140" fill="none" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round" filter="url(#neonAmber)" class="tail"/>
      <!-- Tail pom -->
      <circle cx="235" cy="137" r="12" fill="none" stroke="#EF4444" stroke-width="2" filter="url(#neonRed)"/>

      <!-- Body pom (chest) -->
      <circle cx="140" cy="205" r="18" fill="none" stroke="#EF4444" stroke-width="1.5" stroke-dasharray="4 3" filter="url(#neonRed)" opacity="0.6"/>

      <!-- Floating data particles -->
      <circle cx="50" cy="100" r="3" fill="#F59E0B" opacity="0.7" filter="url(#neonAmber)" class="particle p1"/>
      <circle cx="230" cy="80" r="2" fill="#EF4444" opacity="0.7" filter="url(#neonRed)" class="particle p2"/>
      <circle cx="240" cy="200" r="3" fill="#F59E0B" opacity="0.6" filter="url(#neonAmber)" class="particle p3"/>
      <circle cx="40" cy="240" r="2" fill="#EF4444" opacity="0.6" filter="url(#neonRed)" class="particle p4"/>
      <circle cx="260" cy="150" r="2" fill="#F59E0B" opacity="0.5" filter="url(#neonAmber)" class="particle p5"/>
    </svg>

    <!-- Reflection / ground glow -->
    <div class="ground-glow"></div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.neon-poodle-wrap {
  position: relative;
  display: inline-block;
}

.neon-poodle {
  display: block;
  filter: drop-shadow(0 0 20px rgba(245, 158, 11, 0.3));
}

/* Breathing animation for the whole poodle */
.head-stroke,
.body-stroke {
  animation: breathe 3s ease-in-out infinite;
}

/* Tail wag */
.tail {
  transform-origin: 190px 210px;
  animation: tailWag 1.2s ease-in-out infinite;
}

/* Eye blink */
.eye {
  animation: blink 4s ease-in-out infinite;
}

/* Leg bob */
.leg {
  transform-origin: center top;
  animation: legBob 2.4s ease-in-out infinite;
}

/* Floating particles */
.particle { animation: floatUp 3s ease-in-out infinite; }
.p1 { animation-delay: 0s;    animation-duration: 3.2s; }
.p2 { animation-delay: 0.8s;  animation-duration: 2.8s; }
.p3 { animation-delay: 1.4s;  animation-duration: 3.6s; }
.p4 { animation-delay: 2.0s;  animation-duration: 3.0s; }
.p5 { animation-delay: 0.4s;  animation-duration: 2.6s; }

/* Ear stroke subtle */
.ear-stroke {
  animation: breathe 3.5s ease-in-out infinite reverse;
}

/* Pom-pom pulse */
.pom-top {
  animation: pomPulse 2s ease-in-out infinite;
}

.ground-glow {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 180px;
  height: 24px;
  background: radial-gradient(ellipse, rgba(245, 158, 11, 0.25) 0%, transparent 70%);
  filter: blur(8px);
  animation: breathe 3s ease-in-out infinite;
}

@keyframes breathe {
  0%, 100% { opacity: 0.7; }
  50%       { opacity: 1; }
}

@keyframes tailWag {
  0%, 100% { transform: rotate(-8deg); }
  50%       { transform: rotate(12deg); }
}

@keyframes blink {
  0%, 92%, 100% { transform: scaleY(1); }
  95%           { transform: scaleY(0.1); }
}

@keyframes legBob {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-4px); }
}

@keyframes floatUp {
  0%   { transform: translateY(0);    opacity: 0.7; }
  50%  { transform: translateY(-18px); opacity: 1; }
  100% { transform: translateY(-36px); opacity: 0; }
}

@keyframes pomPulse {
  0%, 100% { opacity: 0.8; transform: scale(1); }
  50%       { opacity: 1;   transform: scale(1.05); }
}
</style>
