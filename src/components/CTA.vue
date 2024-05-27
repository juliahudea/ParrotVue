<template>
  <Drawer>
    <div class="mt-10 mb-10 flex items-center justify-center gap-x-6">
      <a href="#" @click="sendEvent" class="flex justify-evenly items-center rowctaButton rounded-md bg-parrotOrange px-3.5 py-3.5 text-base font-bold text-white hover:bg-parrotBlue hover:text-white shadow-md shadow-inner-sm" style="font-family: 'Poppins', sans-serif;">
        <div>Start Watching For Free</div>
        <ArrowLongRightIcon class="pl-2 w-10"/>
      </a>
    </div>
  </Drawer>
</template>

<script setup>
import { ArrowLongRightIcon } from "@heroicons/vue/24/outline";
import Drawer from "./Drawer.vue";
function sendEvent() {
  console.log(posthog)
  console.log(window)
  posthog.capture("User Clicked Watch Now");
}
</script>
