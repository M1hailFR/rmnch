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
      <path
        d="M24 11.163h1.333a5.333 5.333 0 1 1 0 10.666H24M2.664 11.163h21.333v12a5.333 5.333 0 0 1-5.333 5.333H7.997a5.333 5.333 0 0 1-5.333-5.333zM8 1.83v4m5.336-4v4m5.328-4v4"
      />
    </g>
  </svg>
</template>

<script setup lang="ts">
import { getIconRotate, type IPropsIcon } from './shared';
defineOptions({
  name: 'IconCup'
});

withDefaults(defineProps<IPropsIcon>(), {
  size: 16
});
</script>
