<script setup>
import {
  DrawerHeader,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import  EmailEntry  from "./EmailEntry.vue"
import { XMarkIcon } from "@heroicons/vue/24/outline";

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
        <DrawerClose class="w-min py-2 focus:outline-0 focus-visible:outline-0">
          <XMarkIcon class="w-8 h-8"></XMarkIcon>
        </DrawerClose>
      </DrawerHeader>
     <EmailEntry/>
    </DrawerContent>
  </Drawer>
</template>
