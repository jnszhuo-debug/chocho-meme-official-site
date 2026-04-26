<template>
  <nav class="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-start">
    <div class="flex flex-col">
      <!-- Logo placeholder -->
      <div class="text-3xl font-black neon-text tracking-tighter">
        CHOCHO<span class="text-white">.MEME</span>
      </div>
      <!-- User requested Slogan below Logo -->
      <div class="mt-1 text-sm font-medium text-neon-orange/80">
        狗狗每一刻的陪伴<br/>
        值得與眾不同的獎勵
      </div>
    </div>
    
    <div class="flex items-center gap-8">
      <div class="hidden md:flex gap-6 text-sm font-bold text-white/70">
        <a href="#" class="hover:text-neon-orange transition-colors">關於協議</a>
        <a href="#" class="hover:text-neon-orange transition-colors">技術</a>
        <a href="#" class="hover:text-neon-orange transition-colors">社群</a>
      </div>
      <NuxtLink 
        to="/genesis-captain"
        class="bg-gradient-to-r from-red-500 to-orange-500 px-6 py-2 rounded-full text-white font-bold text-sm shadow-[0_0_15px_rgba(239,68,68,0.5)] hover:scale-105 transition-transform"
      >
        加入創世隊長招募
      </NuxtLink>
    </div>
  </nav>
</template>