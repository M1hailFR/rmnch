<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width || size"
    :height="height || size"
    viewBox="0 0 32 33"
    fill="none"
    :transform="`rotate(${getIconRotate(rotate)})`"
  >
    <path
      d="m12 15.164 4 4L29.333 5.83"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M28 16.497v9.333a2.667 2.667 0 0 1-2.667 2.667H6.667A2.667 2.667 0 0 1 4 25.83V7.163a2.667 2.667 0 0 1 2.667-2.667h14.666"
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
  name: 'IconCheckBox'
});

withDefaults(defineProps<IPropsIcon>(), {
  size: 16
});
</script>
