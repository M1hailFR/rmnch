<template>
  <div :style="computedPadding">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs';
defineOptions({
  name: 'VVerticalPadding'
});

interface IPaddingDetails {
  top: string;
  bottom: string;
}

interface IPaddingProps {
  desktopPadding: IPaddingDetails;
  mobilePadding: IPaddingDetails;
}

const { desktopPadding, mobilePadding } = defineProps<IPaddingProps>();

const { smAndDown } = useDisplay();

const computedPadding = computed(() => {
  const padding = !smAndDown.value ? desktopPadding : mobilePadding;

  return {
    'padding-top': padding.top,
    'padding-bottom': padding.bottom
  };
});
</script>
