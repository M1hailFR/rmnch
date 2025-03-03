<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width || size"
    :height="height || size"
    viewBox="0 0 64 65"
    fill="none"
    :transform="`rotate(${getIconRotate(rotate)})`"
  >
    <rect y=".497" width="64" height="64" rx="32" fill="#419FD9" />
    <rect y=".497" width="64" height="64" rx="32" fill="url(#a)" />
    <path
      d="M14.383 31.79Q28.342 25.58 33 23.603c8.865-3.765 10.707-4.419 11.908-4.44.264-.005.854.062 1.237.378.323.268.411.63.454.883.042.254.095.832.053 1.283-.48 5.154-2.559 17.66-3.616 23.432-.448 2.443-1.329 3.262-2.182 3.342-1.854.174-3.261-1.25-5.057-2.453-2.81-1.88-4.396-3.05-7.123-4.885-3.152-2.12-1.109-3.286.687-5.191.47-.499 8.638-8.084 8.796-8.772.02-.086.038-.407-.149-.576-.186-.17-.462-.112-.66-.066q-.423.099-13.465 9.087-1.911 1.34-3.462 1.306c-1.14-.025-3.332-.658-4.962-1.2-2-.663-3.588-1.014-3.45-2.14q.109-.88 2.375-1.801"
      fill="#fff"
    />
    <defs>
      <linearGradient id="a" x1="32" y1=".497" x2="32" y2="64.022" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2AABEE" />
        <stop offset="1" stop-color="#229ED9" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script setup lang="ts">
import { getIconRotate, type IPropsIcon } from '../shared';
defineOptions({
  name: 'IconTelegram'
});

withDefaults(defineProps<IPropsIcon>(), {
  width: '',
  height: '',
  size: 16,
  rotate: null
});
</script>
