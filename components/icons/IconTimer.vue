<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width || size"
    :height="height || size"
    viewBox="0 0 40 41"
    fill="none"
    :transform="`rotate(${getIconRotate(rotate)})`"
  >
    <path
      d="m31.35 13.893 1.344-1.345a1.337 1.337 0 1 0-1.892-1.891L29.458 12a14.35 14.35 0 0 0-7.92-3.28V6.029h1.293a1.338 1.338 0 0 0 0-2.675h-5.26a1.337 1.337 0 1 0 0 2.675h1.292v2.692c-7.317.665-13.152 6.813-13.152 14.428 0 8.009 6.48 14.49 14.49 14.49 8.008 0 14.49-6.48 14.49-14.49a14.38 14.38 0 0 0-3.342-9.256ZM20.2 34.964c-6.514 0-11.814-5.3-11.814-11.815s5.3-11.814 11.815-11.814 11.815 5.3 11.815 11.814-5.3 11.815-11.815 11.815Zm6.2-18.013c.522.522.522 1.37 0 1.892l-5.253 5.252a1.337 1.337 0 1 1-1.892-1.891l5.253-5.253a1.34 1.34 0 0 1 1.892 0Z"
      fill="currentColor"
      stroke="currentColor"
      stroke-width=".5"
    />
  </svg>
</template>

<script setup lang="ts">
import { getIconRotate, type IPropsIcon } from './shared';
defineOptions({
  name: 'IconTimer'
});

withDefaults(defineProps<IPropsIcon>(), {
  size: 16
});
</script>
