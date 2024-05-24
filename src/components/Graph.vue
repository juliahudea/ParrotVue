<template>
  <section id="graph" aria-label="Graph section" class="py-10 sm:py-22">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center text-center lg:text-left">
        <!-- Text Container -->
        <div class="lg:col-span-2" style="font-family: 'Poppins', sans-serif;">
          <h2 class="text-3xl font-semibold tracking-tight text-parrotOrange">
            Exponentially increase your vocabulary!
          </h2>
          <p class="mt-4 text-lg font-medium text-gray-700">
            Learning through YouTube means absorbing language in its natural context while engaging with content you love. Unlike traditional word drilling apps, Parrot accelerates your learning by integrating seamlessly with your daily content engagement, making it the fastest route to language fluency.
          </p>
        </div>
        <!-- Image Container -->
        <div class="lg:col-span-3 flex justify-center">
          <img src="../assets/graph.png" alt="Graph showing vocabulary increase" class="w-full max-w-3xl rounded-md shadow-md ring-1 ring-gray-900/10" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
</script>

<style>
@media (max-width: 1024px) {
  .grid {
    text-center:
  }
}
</style>