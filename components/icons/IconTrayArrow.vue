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
      d="m26 20.496-6-6m0 0-6 6m6-6v18m-12-21v-4c0-.53.281-1.039.781-1.414s1.178-.586 1.886-.586h18.666c.708 0 1.386.211 1.886.586S32 6.966 32 7.496v4"
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
  name: 'IconTrayArrow'
});

withDefaults(defineProps<IPropsIcon>(), {
  size: 16
});
</script>
