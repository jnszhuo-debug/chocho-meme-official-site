<template>
  <nav class="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center">
    <!-- Logo -->
    <div class="flex items-center gap-3">
      <i class="fa-solid fa-dog text-amber-400 text-2xl" style="filter: drop-shadow(0 0 8px rgba(245,158,11,0.7))"></i>
      <span class="text-xl font-black tracking-tighter leading-none" style="font-family: 'Orbitron', monospace;">
        <span class="text-white">Chocho</span><span class="text-amber-400">.meme</span>
      </span>
    </div>

    <div class="flex items-center gap-8">
      <div class="hidden md:flex gap-6 text-sm font-bold text-white/70">
        <a href="#" class="hover:text-amber-400 transition-colors">關於協議</a>
        <a href="#" class="hover:text-amber-400 transition-colors">技術</a>
        <a href="#" class="hover:text-amber-400 transition-colors">社群</a>
      </div>
      <NuxtLink
        to="/genesis-captain"
        class="bg-gradient-to-r from-red-500 to-orange-500 px-6 py-2 rounded-full text-white font-bold text-sm shadow-[0_0_15px_rgba(239,68,68,0.5)] hover:scale-105 transition-transform"
      >
        加入創世隊長
      </NuxtLink>
    </div>
  </nav>
</template>
