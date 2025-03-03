<template>
  <div class="card" :class="`card-${size}`">
    <div class="card--inner d-flex flex-column justify-center align-center">
      <img v-if="logo" :src="logo" class="card--logo" />
      <div v-if="isMediumCard" class="card--description">
        <div v-if="value" class="text-brand-1 text-title6 text-md-title4">{{ value }}</div>
        <div v-if="text" class="text-neutrals-5 text-body3 text-md-body2">{{ text }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type ICardWithLogoProps } from './shared';
import { SizesEnum } from '~/core/types/components';
defineOptions({
  name: 'CardWithLogo'
});

const props = withDefaults(defineProps<ICardWithLogoProps>(), {
  size: SizesEnum.MEDIUM
});

const isMediumCard = computed(() => {
  return props.size === SizesEnum.MEDIUM;
});
</script>

<style lang="scss" scoped>
.card {
  &-medium {
    height: 160px;
    padding: $spacer * 4;

    @include above(map.get($grid-breakpoints, md)) {
      height: 232px;
      padding: $spacer * 5 $spacer * 6;
    }
  }

  &-small {
    height: 75px;
    padding: $spacer * 5 $spacer * 2;

    @include above(map.get($grid-breakpoints, md)) {
      height: 122px;
      padding: $spacer * 8 $spacer * 3;
    }
  }

  &--inner {
    height: 100%;
    position: relative;
  }

  &--logo {
    max-height: 30px;

    @include above(map.get($grid-breakpoints, md)) {
      max-height: 50px;
    }
  }

  &--description {
    position: absolute;
    left: 0;
    bottom: 0;
  }
}
</style>
