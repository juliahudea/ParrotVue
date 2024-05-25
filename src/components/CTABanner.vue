<template>
    <div class="relative -z-10 mt-20 lg:mt-28 px-6 lg:px-8">
        <div class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 transform-gpu justify-center overflow-hidden blur-3xl sm:bottom-0 sm:right-[calc(50%-6rem)] sm:top-auto sm:translate-y-0 sm:transform-gpu sm:justify-end" aria-hidden="true">
          <div class="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r to-parrotOrange from-parrotBlue opacity-25" style="clip-path: polygon(73.6% 48.6%, 91.7% 88.5%, 100% 53.9%, 97.4% 18.1%, 92.5% 15.4%, 75.7% 36.3%, 55.3% 52.8%, 46.5% 50.9%, 45% 37.4%, 50.3% 13.1%, 21.3% 36.2%, 0.1% 0.1%, 5.4% 49.1%, 21.4% 36.4%, 58.9% 100%, 73.6% 48.6%)" />
        </div>
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl" style="font-family: 'Poppins', sans-serif;">Become Fluent Faster, With YouTube.</h2>
          <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-700" style="font-family: 'Poppins', sans-serif;">Turn any YouTube video into language learning lessons. Click words for translation, track your vocabulary, get excellent content recommendations.</p>
          <div class="mt-6 flex items-center justify-center gap-x-6">
            <CTA />
          </div>
        </div>
      </div>
</template>

<script setup>
import CTA from './CTA.vue'
</script>