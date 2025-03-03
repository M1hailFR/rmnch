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
      d="M33 24.83a2.89 2.89 0 0 1-2.889 2.889H12.778L7 33.496v-23.11a2.89 2.89 0 0 1 2.889-2.89H30.11a2.89 2.89 0 0 1 2.89 2.89z"
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
  name: 'IconMessage'
});

withDefaults(defineProps<IPropsIcon>(), {
  size: 16
});
</script>
