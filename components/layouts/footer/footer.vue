<script setup lang="ts">
import { useAppStore } from "~/stores/app";

const appStore = useAppStore();
</script>

<template>
  <v-container class="">
    <span>&copy; {{ new Date().getFullYear() }} rmnch</span>
  </v-container>
</template>
