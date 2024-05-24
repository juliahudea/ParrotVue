<template>
  <Drawer>
    <div class="mt-10 mb-20 flex items-center justify-center gap-x-6">
        <a href="#" @click="sendEvent" class="ctaButton rounded-md bg-parrotOrange px-3.5 py-3.5 text-base font-bold text-white shadow-sm hover:bg-parrotBlue hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-parrotYellow" style="font-family: 'Poppins', sans-serif;">Start Watching For Free</a>
    </div>
  </Drawer>
</template>

<script setup>
import posthog from "posthog-js";
import Drawer from "./Drawer.vue";
function sendEvent(e) {
  posthog.capture("User Clicked Watch Now");
}
</script>
