<template>
  <section id="features" aria-label="Features section" class="py-16 sm:py-22">
    <div class="container mx-auto px-4 lg:px-8">
      <!-- Centered Text Container -->
      <div class="flex flex-col items-center text-center mx-auto max-w-3xl lg:max-w-3xl" style="font-family: 'Poppins', sans-serif;">
        <h2 class="text-3xl font-semibold tracking-tight text-parrotOrange">
          Every feature you need to master a new language.
        </h2>
        <p class="mt-4 text-lg font-medium text-gray-700">
          Parrot is here to transform every video into an interactive learning session. Where other apps offer simulations, Parrot delivers real-world immersion. Get ready to explore, engage, and excel with each click.
        </p>
      </div>
    </div>
    <div class="container mx-auto px-4 lg:px-8 mt-14">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <!-- Left Column: Image Block -->
        <div class="relative flex items-center justify-center rounded-md shadow-lg ring-1 ring-gray-900/10 col-span-1 md:col-span-2">
          <img :src="selectedFeature.image" alt="Feature Image" class="h-full w-full object-contain rounded-md" />
        </div>
        <!-- Right Column: Feature Descriptions -->
        <div class="space-y-6 col-span-1">
          <div
            v-for="(feature, index) in features"
            :key="feature.name"
            :class="['p-6 rounded-2xl cursor-pointer', selectedFeatureIndex === index ? 'bg-parrotBlue text-white font-bold shadow-lg' : 'bg-parrotLightView text-parrotBlue font-semibold']"
            @click="selectFeature(index)"
          >
            <h3 class="text-lg font-semibold">{{ feature.name }}</h3>
            <p class="mt-2 text-sm">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

// Import images directly
import wordClick from '../assets/word-click.png'
import videoRecommendations from '../assets/video-recommendations.png'
import vocabularyTracker from '../assets/vocab-tracker.png'

const features = [
  {
    name: 'Instant Word Lookup',
    description: 'Click words you don’t know to learn the meaning.',
    image: wordClick
  },
  {
    name: 'Tailored Video Recommendations',
    description: 'Get recommended videos based on your interests.',
    image: videoRecommendations
  },
  {
    name: 'Personal Vocabulary Builder',
    description: 'Build and practice a list of words for real conversations.',
    image: vocabularyTracker
  }
]

const selectedFeatureIndex = ref(0)
const selectedFeature = ref(features[selectedFeatureIndex.value])
const autoRotate = ref(true)
let intervalId

const selectFeature = (index) => {
  autoRotate.value = false
  selectedFeatureIndex.value = index
  selectedFeature.value = features[index]
}

// Auto-rotate through the feature blocks
onMounted(() => {
  intervalId = setInterval(() => {
    if (autoRotate.value) {
      selectedFeatureIndex.value = (selectedFeatureIndex.value + 1) % features.length
      selectedFeature.value = features[selectedFeatureIndex.value]
    } else {
      clearInterval(intervalId)
    }
  }, 3000) // Change feature every 3 seconds
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})

watch(autoRotate, (newValue) => {
  if (!newValue) {
    clearInterval(intervalId)
  }
})
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
