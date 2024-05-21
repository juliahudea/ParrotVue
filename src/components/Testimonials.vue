<template>
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-xl text-center">
          <h2 class="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Testimonials</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">We have worked with thousands of amazing people</p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="testimonial in testimonials" :key="testimonial.author.name" class="pt-8 sm:pt-0">
              <figure class="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                <blockquote class="text-gray-900">
                  <p>{{ `“${testimonial.body}”` }}</p>
                </blockquote>
                <figcaption class="mt-6 flex items-center gap-x-4">
                  <img class="h-10 w-10 rounded-full bg-gray-50" :src="testimonial.author.imageUrl" alt="" />
                  <div>
                    <div class="font-semibold text-gray-900">{{ testimonial.author.name }}</div>
                    <p class="sr-only">5 out of 5 stars</p>
                    <div class="flex gap-x-1 text-indigo-600">
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
    </div>
  </template>
  
  <script setup>
  import { StarIcon } from '@heroicons/vue/20/solid'
  
  const testimonials = [
    {
      body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
      author: {
        name: 'Julia',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
      author: {
        name: 'Erik',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
      author: {
        name: 'Amir',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ]
  </script>
  