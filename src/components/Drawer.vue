<script setup>
import {
  DrawerHeader,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ref } from "vue";
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
  SmallHeaderText.value = "We're working so hard to make Parrot ready for you. We will be reaching out soon.";
  preEmailEntry.value = false;
}
</script>

<style scoped>
@media (hover: hover) {
  #button-1 {
    overflow-x: hidden !important;
    overflow-y: hidden !important;
    position: relative !important;
  }
}
#shadedBg {
  --rgb-black: 35, 28, 51;

  box-shadow:
    0 0 0 1px rgba(var(--rgb-black), 0.05),
    0 0.2em 1.2em -0.4em rgba(var(--rgb-black), 0.2),
    0 0.4em 2em -0.8em rgba(var(--rgb-black), 0.3),
    0 0.4em 0.4em -0.8em rgba(var(--rgb-black), 0.4),
    0 0.8em 0.8em -1.2em rgba(var(--rgb-black), 0.5),
    0 1.2em 1.2em -1.6em rgba(var(--rgb-black), 0.6);
}

.gradientBeau {
  background-image: linear-gradient(
    135deg,
    rgb(240, 107, 0) 0%,
    rgb(251, 186, 0) 60%,
    rgb(12, 146, 241) 100%
  );
}
</style>

<template>
  <Drawer>
    <DrawerTrigger as-child>
      <slot />
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerClose>
          <div aria-label="close" class="-mt-7 p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        </DrawerClose>
      </DrawerHeader>
      <div ref="drawerContent" class="mx-auto w-full h-[80vh]">
        <div
          class="text-gray-800 flex-col text-4xl relative flex bg-neutral-100 lg:p-[]"
        >
          <div
            class="bg-white flex-col relative flex w-[min(100%, 36em)] rounded-3xl overflow-hidden lg:w-[min(100%, 40em)]"
          >
            <div
              class="flex-col px-4 text-center flex min-[576px]:pl-8 min-[576px]:pr-8 lg:pl-12 lg:pr-12"
            >
              <header
                class="items-center flex-col flex w-[min(100%, 36em)] gap-10"
              >
                <h1
                  class="gradientBeau text-2xl bg-clip-text sm:leading-tight md:leading-[4.5rem] md:text-4xl lg:leading-[5rem] lg:text-6xl font-black px-0 text-transparent"
                >
                  {{ BigHeaderText }}
                </h1>
                <h2
                  class="text-lg md:text-[1.50rem] lg:text-[2.50rem] leading-none -mt-1 -mb-1.5 max-w-6xl"
                >
                  {{ SmallHeaderText }}
                </h2>
              </header>
            </div>

            <div
              class="justify-center items-center flex-col px-4 relative flex mt-6 md:pl-8 md:pr-8 md:pt-10 lg:pt-10 pt-6"
            >
              <img
                v-if="preEmailEntry"
                class="md:max-w-2xl lg:max-w-3xl rounded-lg shadow-2xl"
                src="../assets/blurred-youtube-compressed.jpg"
                alt="AppSnapshot"
                rel="preload"
              />
              <img v-else src="../assets/ParrotLogo.svg" alt="Parrot Logo">
              <div
                v-if="preEmailEntry"
                class="absolute inset-0 flex justify-center items-center"
              >
                <div
                  class="flex flex-col items-center justify-center text-center text-4xl text-gray-800 bg-opacity-0 md:max-w-2xl lg:max-w-3xl w-full"
                >
                  <form
                    id="shadedBg"
                    target="_blank"
                    method="POST"
                    @submit.prevent="submitEmail()"
                    class="flex items-center gap-[0.63rem] rounded-3xl p-1 bg-white max-w-md w-3/4"
                  >
                    <input
                      ref="emailInput"
                      type="email"
                      value=""
                      placeholder="joesmith@gmail.com"
                      class="text-xs sm:text-lg rounded-lg md:h-11 flex-grow cursor-text pl-3.5 md:text-2xl focus:outline-none focus:ring-0 min-w-0"
                    />
                    <button
                      class="gradientBeau text-xs sm:text-lg md:text-lg md:shrink-0 w-32 h-10 md:h-12 md:w-32 cursor-pointer items-start justify-center rounded-3xl px-4 py-2 text-[1.38rem] font-medium leading-7 text-white"
                      id="button-1"
                    >
                      Enter
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DrawerContent>
  </Drawer>
</template>
