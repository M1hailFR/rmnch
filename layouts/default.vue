<template>
  <v-app :theme="appStore.theme">
    <HeaderDefault :fields="HEADER_INDIVIDUAL_CONFIG.block_fields" />
    
    <slot />

    <Footer />
  </v-app>
</template>

<script setup lang="ts">
import { useAppStore } from '~/stores/app';
import { HeaderDefault } from '~/components/layouts/headers';
import { HEADER_INDIVIDUAL_CONFIG, FOOTER_DEFAULT_CONFIG } from '~/configs/layouts/default';
import Footer from '~/components/layouts/footer/footer.vue';

const appStore = useAppStore();
</script>
