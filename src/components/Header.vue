<template>
  <header class="absolute inset-x-0 top-0 z-50">
    <nav class="flex items-center justify-between p-5 lg:px-8" aria-label="Global">
      <div class="flex items-center lg:flex-1 relative">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Parrot</span>
          <img class="logo" src="../assets/ParrotLogo.svg" alt="Parrot Logo" />
        </a>
        <span class="text-4xl font-extrabold text-parrotOrange parrot-text" style="font-family: 'Poppins', sans-serif;">parrot</span>
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
  transform: translateY(-24%);
}

.logo {
  height: 5rem; /* Set default size appropriate for computer screens */
}

/* Adjust logo and text sizes for smaller screens */
@media (max-width: 768px) {
  .logo {
    height: 2rem; /* Reduce logo size on mobile */
  }
  .parrot-text {
    font-size: 1.2rem;
    transform: translateY(-9%);
  }
}
</style>