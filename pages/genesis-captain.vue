<template>
  <div class="min-h-screen p-10 flex flex-col items-center justify-center text-center">
    <NuxtLink to="/" class="mb-10 text-white/50 hover:text-white transition-colors">← 返回主站</NuxtLink>
    <h1 class="text-4xl font-bold neon-text mb-4">創世隊長招募計畫</h1>
    <p class="text-xl text-white/70 mb-10 max-w-2xl">
      App 即將上線，我們正在尋找首批 500 位隊長引領 Chocho 宇宙。
    </p>
    <div class="bg-white/5 border border-white/10 p-8 rounded-3xl max-w-md w-full">
      <p class="text-left mb-4 font-bold">即刻申請封測資格</p>
      <input type="email" placeholder="輸入您的 Email" class="w-full bg-white/10 border border-white/20 p-4 rounded-xl mb-4 focus:outline-none focus:border-neon-orange transition-colors">
      <button class="w-full bg-neon-orange text-black font-black py-4 rounded-xl hover:brightness-110 transition-all">
        提交申請
      </button>
    </div>
  </div>
</template>