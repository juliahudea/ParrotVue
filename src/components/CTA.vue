<template>
    <div class="mt-10 mb-10 flex items-center justify-center gap-x-6">
                <a href="#" @click="sendEvent" class="rounded-md bg-parrotOrange px-3.5 py-3.5 text-base font-bold text-white hover:bg-parrotBlue hover:text-white shadow-md shadow-inner-sm" style="font-family: 'Poppins', sans-serif;">Start Watching For Free</a>
    </div>
</template>

<script setup>
import posthog from "posthog-js";

function sendEvent(e) {
    posthog.capture("User Clicked Watch Now")
}
</script>