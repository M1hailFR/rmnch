<template>
  <div class="card rounded-xl pa-6 pa-md-10 bg-surface-2">
    <div v-if="title" class="card--title text-center text-title5 text-md-title4 text-neutrals-5">
      {{ title }}
    </div>
    <div class="card--content rounded-xl">
      <NuxtImg v-if="image" fit="cover" :src="image" class="card--image mt-4 mt-md-5" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { type ICardWithImageExampleProps } from './shared';

defineOptions({
  name: 'CardWithImageExample'
});

defineProps<ICardWithImageExampleProps>();
</script>

<style lang="scss" scoped>
.card {
  overflow: hidden;
  height: 255px;

  @include above(map.get($grid-breakpoints, md)) {
    height: 430px;
  }

  &--content {
    overflow: hidden;
  }

  &--image {
    width: 100%;
  }
}
</style>
