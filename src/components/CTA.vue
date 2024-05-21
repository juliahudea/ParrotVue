<template>
    <div class="mt-20 mb-20 flex items-center justify-center gap-x-6">
                <a href="#" @click="sendEvent" class="rounded-md bg-indigo-600 px-3.5 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Start Watching For Free</a>
    </div>
</template>

<script setup>
import posthog from "posthog-js";

function sendEvent(e) {
    posthog.capture("User Clicked Watch Now")
}
</script>