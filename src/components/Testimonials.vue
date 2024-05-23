<template>
  <section id="features" aria-label="Features section" class="py-18 sm:py-26">
    <div class="container mx-auto px-4 lg:px-8 mt-28">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-semibold leading-10 text-parrotBlue" style="font-family: 'Poppins', sans-serif;">Testimonials</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-3xl" style="font-family: 'Poppins', sans-serif;">We have worked with thousands of amazing people</p>
      </div>
      <div class="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mx-0 lg:max-w-none">
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="testimonial in testimonials" :key="testimonial.author.name" class="pt-8 sm:pt-0">
            <figure class="rounded-2xl bg-parrotLightView p-8 text-sm leading-6">
              <blockquote class="text-gray-900" style="font-family: 'Poppins', sans-serif;">
                <p>{{ `“${testimonial.body}”` }}</p>
              </blockquote>
              <figcaption class="mt-4 flex items-center gap-x-4">
                <img class="h-14 w-14 rounded-full bg-gray-50" :src="testimonial.author.imageUrl" alt="" />
                <div>
                  <div class="font-semibold text-gray-900" style="font-family: 'Poppins', sans-serif;">{{ testimonial.author.name }}</div>
                  <p class="sr-only">5 out of 5 stars</p>
                  <div class="flex gap-x-1 text-parrotYellow">
                    <StarIcon class="h-5 w-5 flex-none" aria-hidden="true" />
                    <StarIcon class="h-5 w-5 flex-none" aria-hidden="true" />
                    <StarIcon class="h-5 w-5 flex-none" aria-hidden="true" />
                    <StarIcon class="h-5 w-5 flex-none" aria-hidden="true" />
                    <StarIcon class="h-5 w-5 flex-none" aria-hidden="true" />
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { StarIcon } from '@heroicons/vue/20/solid'

const testimonials = [
  {
    body: 'YouTube videos with interactive transcripts are a game-changer. Learning through videos I enjoy has never been this fun and engaging!',
    author: {
      name: 'Julia (Bucharest, Romania)',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Using YouTube videos I love to learn a language is fantastic. Clicking on words for translations makes learning so much fun and effective. Highly recommend!',
    author: {
      name: 'Erik (Vancouver, Canada)',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Learning with YouTube videos I already enjoy keeps me motivated. The gamified approach and progress tracking make a huge difference!',
    author: {
      name: 'Amir (Cairo, Egypt)',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  }
]
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
