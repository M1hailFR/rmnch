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
      d="M8.242 22.988a.92.92 0 0 0 1.572-.651v-1.84h4.665a3.687 3.687 0 0 1 3.683 3.683v11.11c0 .51.412.92.92.92h1.842a.92.92 0 0 0 .92-.92V24.18c0-4.062-3.303-7.366-7.365-7.366H9.814v-1.842a.92.92 0 0 0-1.572-.65l-3.683 3.682a.92.92 0 0 0 0 1.302zm11.76-6.128a9.2 9.2 0 0 1 1.842-1.108v-5.446h1.841a.92.92 0 0 0 .651-1.572l-3.683-3.683a.92.92 0 0 0-1.302 0l-3.683 3.683a.92.92 0 0 0 .651 1.572h1.842v5.446a9.2 9.2 0 0 1 1.841 1.108m11.758-2.539a.92.92 0 0 0-1.571.651v1.842h-4.665c-1.55 0-2.985.485-4.172 1.306a9.2 9.2 0 0 1 1.84 3.232 3.65 3.65 0 0 1 2.332-.855h4.665v1.84a.92.92 0 0 0 1.572.651l3.683-3.682a.92.92 0 0 0 0-1.302z"
      fill="currentColor"
    />
  </svg>
</template>

<script setup lang="ts">
import { getIconRotate, type IPropsIcon } from './shared';
defineOptions({
  name: 'IconMulticast'
});

withDefaults(defineProps<IPropsIcon>(), {
  size: 16
});
</script>
