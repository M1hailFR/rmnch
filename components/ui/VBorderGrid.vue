<template>
  <div class="v-border-grid">
    <div
      class="v-border-grid--wrapper"
      :class="{ 'v-border-grid-horizontal-scroll': horizontalScroll }"
      :style="{ 'grid-template-columns': `repeat(${cols}, 1fr)` }"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'VBorderGrid'
});

interface IVBorderGridProps {
  cols: string | number;
  horizontalScroll?: boolean;
}

defineProps<IVBorderGridProps>();
</script>

<style lang="scss" scoped>
.v-border-grid {
  $gap: 1px;
  $line-offset: 1px;
  $line-thickness: 1px;
  $line-color: get-rgb-color(neutrals-2);

  overflow: hidden;

  &-horizontal-scroll {
    overflow-x: auto;
    overflow-y: hidden;
  }

  &--wrapper {
    display: grid;

    & > * {
      position: relative;
    }

    & > *::before,
    & > *::after {
      content: '';
      position: absolute;
      background-color: $line-color;
      z-index: 1;
    }

    // Row Borders
    & > *::after {
      inline-size: 100%;
      block-size: $line-thickness;
      inset-inline-start: 0;
      inset-block-start: calc($line-offset * -1);
    }

    // Column Borders
    & > *::before {
      inline-size: $line-thickness;
      block-size: 100%;
      inset-inline-start: calc($line-offset * -1);
      inset-block-start: 0;
    }
  }
}
</style>
