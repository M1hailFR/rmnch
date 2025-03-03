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
      d="M28.333 35.497v-3.334a6.667 6.667 0 0 0-6.666-6.666H8.333a6.666 6.666 0 0 0-6.666 6.666v3.334m36.666 0v-3.334a6.666 6.666 0 0 0-5-6.45m-6.666-20a6.667 6.667 0 0 1 0 12.917m-5-6.467a6.667 6.667 0 1 1-13.334 0 6.667 6.667 0 0 1 13.334 0"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">
import { getIconRotate, type IPropsIcon } from './shared';
defineOptions({
  name: 'IconAccountMultiple'
});

withDefaults(defineProps<IPropsIcon>(), {
  size: 16
});
</script>
