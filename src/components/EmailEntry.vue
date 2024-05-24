<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div class="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2"
      >
        <div class="max-w-xl lg:max-w-lg">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
           {{ BigHeaderText }}
          </h2>
          <p class="mt-4 text-lg leading-8">{{ SmallHeaderText }}</p>
          <div v-if="preEmailEntry" class="mt-6 flex max-w-md gap-x-4">
            <label for="email-address" class="sr-only">Email address</label>
            <input
              ref="emailInput"
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required=""
              class="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <button
              @click="submitEmail"
              type="submit"
              class="flex-none rounded-md bg-parrotOrange px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Enter
            </button>
          </div>
        </div>
        <dl v-if="preEmailEntry" class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
          <div class="flex flex-col items-start">
            <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
              <CursorArrowRaysIcon class="text-parrotOrange h-6 w-6" aria-hidden="true" />
            </div>
            <dt class="mt-4 font-semibold">Instant Word Lookup</dt>
            <dd class="mt-2 leading-7">
              While watching your favourite Youtube Videos, click words you
              don’t know to learn the meaning.
            </dd>
          </div>
          <div class="flex flex-col items-start">
            <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
              <BookOpenIcon class="text-parrotOrange h-6 w-6" aria-hidden="true" />
            </div>
            <dt class="mt-4 font-semibold">Personal Vocabulary Builder</dt>
            <dd class="mt-2 leading-7">
              Learn words faster than ever before. Build and practice a list of
              words for real conversations.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CursorArrowRaysIcon, BookOpenIcon } from "@heroicons/vue/24/outline";
import { ref, onMounted } from "vue";
import axios from "axios";

const BigHeaderText = ref("Start watching now, enter your email...");
const SmallHeaderText = ref("Binge-watch Youtube to Fluency");

const emailInput = ref(null);
const preEmailEntry = ref(true);

function submitEmail() {
  // Create URLSearchParams object
  const formData = new URLSearchParams();
  formData.append("email", emailInput.value.value);

  // Set the content type header for 'application/x-www-form-urlencoded'
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  // Post the form data using Axios
  axios
    .post("api/submit-email", formData, config)
    .then((response) => {
      console.log("Success:", response.data);
      transitionToThankYou();
    })
    .catch((error) => {
      transitionToThankYou();
      console.error("Error posting email:", error);
    });
}

function transitionToThankYou() {
  BigHeaderText.value = "Thank you so much!";
  SmallHeaderText.value =
    "We're working so hard to make Parrot ready for you. We will be reaching out soon.";
  preEmailEntry.value = false;
}

onMounted(() => {
  console.log(`the component is now mounted.`)
  emailInput.value.focus()
})
</script>
