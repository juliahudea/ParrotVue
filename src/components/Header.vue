<template>
  <header class="absolute inset-x-0 top-0 z-50">
    <nav class="flex items-center justify-between p-5 lg:px-8" aria-label="Global">
      <div class="flex items-center lg:flex-1 relative">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Parrot</span>
          <img class="h-20 w-auto" src="../assets/ParrotLogo.svg" alt="Parrot Logo" />
        </a>
        <span class="ml-4 text-4xl font-extrabold text-parrotOrange parrot-text" style="font-family: 'Poppins', sans-serif;">parrot</span>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style scoped>
.parrot-text {
  position: relative;
  transform: translateY(-25%);
}
</style>
