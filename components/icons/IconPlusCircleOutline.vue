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
      d="M15.997 29.83c7.364 0 13.334-5.97 13.334-13.334S23.36 3.162 15.997 3.162 2.664 9.132 2.664 16.496s5.97 13.333 13.333 13.333M16 11.163v10.666m-5.336-5.332h10.667"
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
  name: 'IconPlusCircleOutline'
});

withDefaults(defineProps<IPropsIcon>(), {
  size: 16
});
</script>
