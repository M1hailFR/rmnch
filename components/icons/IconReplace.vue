<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width || size"
    :height="height || size"
    viewBox="0 0 32 33"
    fill="none"
    :transform="`rotate(${getIconRotate(rotate)})`"
  >
    <g clip-path="url(#a)" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <path d="m22.664 1.83 5.333 5.334-5.333 5.333" />
      <path d="M4 15.163v-2.667a5.333 5.333 0 0 1 5.333-5.334H28M9.333 31.163 4 25.83l5.333-5.333" />
      <path d="M28 17.83v2.667a5.333 5.333 0 0 1-5.333 5.333H4" />
    </g>
  </svg>
</template>

<script setup lang="ts">
import { getIconRotate, type IPropsIcon } from './shared';
defineOptions({
  name: 'IconReplace'
});

withDefaults(defineProps<IPropsIcon>(), {
  size: 16
});
</script>
