<template>
  <div class="card">
    <div v-if="title" class="card--top d-flex align-center" :class="mobileCenterClasses">
      <component v-if="prependIcon" :is="getIconByKey(prependIcon)" size="32" class="text-brand-1" />
      <div class="text-neutrals-5" :class="[...mobileCenterClasses, ...adaptiveTextClasses]">{{ title }}</div>
      <component v-if="appendIcon" :is="getIconByKey(appendIcon)" size="32" class="text-brand-1" />
    </div>
    <div v-if="title && subtitle" class="mt-1" />
    <div v-if="subtitle" :class="mobileCenterClasses">
      <div class="card--description text-neutrals-5 text-title6" :class="mobileCenterClasses">
        {{ subtitle }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type ICardWithStatisticProps } from './shared';
import { getIconByKey } from '~/core/helpers/icons';

defineOptions({
  name: 'CardWithStatistic'
});

const { mobileCenter, adaptiveText } = defineProps<ICardWithStatisticProps>();

const mobileCenterClasses = computed(() => {
  return mobileCenter ? ['d-flex', 'justify-center', 'text-center', 'd-md-block', 'text-md-left'] : [''];
});

const adaptiveTextClasses = computed(() => {
  return adaptiveText ? ['text-title4', 'text-md-title3'] : ['text-title3'];
});
</script>

<style lang="scss" scoped>
.card {
  &--top {
    column-gap: $spacer * 1;
  }
}
</style>
