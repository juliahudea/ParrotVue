<script lang="ts" setup>
import type { HtmlHTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HtmlHTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('grid gap-1.5 px-2 py-0 sm:p-2 md:p-4 text-center sm:text-left', props.class)">
    <slot />
  </div>
</template>
