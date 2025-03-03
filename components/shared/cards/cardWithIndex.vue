<template>
  <div class="card pa-6 pa-md-8 rounded-xl bg-surface-1">
    <div v-if="isNumber(index)" class="text-brand-1 text-title3">
      {{ index + 1 }}
    </div>
    <div v-if="isNumber(index) && text" class="mt-4" />
    <div v-if="text" class="mt-md-6 text-neutrals-5 text-title6 text-md-title5">
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { type ICardWithIndexProps } from './shared';
import { isNumber } from '~/core/utils/typeCheck';
defineOptions({
  name: 'CardWithIndex'
});

defineProps<ICardWithIndexProps>();
</script>
