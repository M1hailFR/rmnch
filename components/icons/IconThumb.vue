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
      d="M11.667 37.163h-5a3.333 3.333 0 0 1-3.334-3.333V22.163a3.334 3.334 0 0 1 3.334-3.333h5m11.666-3.333V8.83a5 5 0 0 0-5-5l-6.666 15v18.333h18.8A3.33 3.33 0 0 0 33.8 34.33l2.3-15a3.334 3.334 0 0 0-3.333-3.833z"
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
  name: 'IconThumb'
});

withDefaults(defineProps<IPropsIcon>(), {
  size: 16
});
</script>
