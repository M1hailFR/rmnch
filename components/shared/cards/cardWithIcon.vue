<template>
  <div class="card">
    <div v-if="title" class="card--top d-flex align-center">
      <div v-if="icon" class="d-inline-flex">
        <component :is="getIconByKey(icon)" size="40" class="text-brand-1" />
      </div>
      <div class="text-neutrals-5 text-title5 text-md-title4">
        {{ title }}
      </div>
    </div>
    <div v-if="title && subtitle" class="mt-1" />
    <div v-if="subtitle" class="card--bottom d-flex">
      <div v-if="icon" class="card--empty" />
      <div class="text-neutrals-4 text-body2">
        {{ subtitle }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type ICardWithIconProps } from './shared';
import { getIconByKey } from '~/core/helpers/icons';
defineOptions({
  name: 'CardWithIcon'
});

defineProps<ICardWithIconProps>();
</script>

<style lang="scss" scoped>
.card {
  &--top,
  &--bottom {
    column-gap: $spacer * 4;
  }

  &--empty {
    width: 40px;
    min-width: 40px;
  }
}
</style>
