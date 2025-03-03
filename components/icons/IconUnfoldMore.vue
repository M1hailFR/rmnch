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
      d="m21.336 24.497 8-8-8-8m-10.672-.001-8 8 8 8"
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
  name: 'IconUnfoldMore'
});

withDefaults(defineProps<IPropsIcon>(), {
  size: 16
});
</script>
