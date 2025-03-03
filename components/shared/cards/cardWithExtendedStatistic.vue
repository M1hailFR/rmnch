<template>
  <div class="card pa-6 pa-md-10 rounded-xl bg-surface-1">
    <div v-if="title" v-html="title" class="text-title5 text-md-title4 text-neutrals-5" />
    <div v-if="top || bottom" class="card--body">
      <cardWithStatistic v-if="top" v-bind="top" />
      <div v-if="top && bottom" class="card--divider bg-neutrals-2 my-4 my-md-5" />
      <cardWithStatistic v-if="bottom" v-bind="bottom" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { type ICardWithExtendedStatisticProps } from './shared';
import cardWithStatistic from './cardWithStatistic.vue';

defineOptions({
  name: 'CardWithExtendedStatistic'
});

defineProps<ICardWithExtendedStatisticProps>();
</script>

<style lang="scss" scoped>
.card {
  &--divider {
    height: 1px;
  }

  &--body {
    margin-top: 56px;

    @include above(map.get($grid-breakpoints, md)) {
      margin-top: 70px;
    }
  }
}
</style>
