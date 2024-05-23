<template>
  <section id="graph" aria-label="Graph section" class="py-8 sm:py-18">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
        <!-- Text Container -->
        <div class="lg:col-span-2 text-left" style="font-family: 'Poppins', sans-serif;">
          <h2 class="text-3xl font-semibold tracking-tight text-parrotOrange">
            Exponentially increase your vocabulary!
          </h2>
          <p class="mt-4 text-lg font-medium text-gray-700">
            Learning through YouTube videos means learning from context while doing something you enjoy rather than just drilling words. No other language learning platform helps you learn as quickly.
          </p>
        </div>
        <!-- Image Container -->
        <div class="lg:col-span-3 flex justify-center">
          <img src="../assets/graph.png" alt="Graph showing vocabulary increase" class="w-full max-w-3xl rounded-md shadow-lg ring-1 ring-gray-900/10" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
</script>

<style>
/* Global Styles, if needed */
</style>
