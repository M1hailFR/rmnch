<template>
  <v-hover v-slot:default="{ isHovering, props }">
    <v-link
      v-if="link"
      class="card rounded-xl pa-6 px-md-10 py-md-8 d-flex align-center"
      :class="getBgColor(isHovering, 'bg-surface-2')"
      :link="link"
      v-bind="props"
    >
      <component
        v-if="icon"
        :is="getIconByKey(icon)"
        size="32"
        class="card--icon text-brand-1"
        :class="getTextColor(isHovering, 'text-brand-1')"
      />
      <div
        v-if="title"
        class="card--title flex-grow-1 text-title6 text-md-title4"
        :class="getTextColor(isHovering, 'text-neutrals-5')"
      >
        {{ title }}
      </div>
      <span class="d-flex" :class="getTextColor(isHovering, 'text-neutrals-3')">
        <slot name="append-icon">
          <IconChevron size="24" rotate="right" class="card--icon--append" />
        </slot>
      </span>
    </v-link>
  </v-hover>
</template>

<script setup lang="ts">
import { type ICardWithLinkProps } from './shared';
import { getIconByKey } from '~/core/helpers/icons';
import { VLink } from '~/components/ui';
import { IconChevron } from '~/components/icons';

defineOptions({
  name: 'CardWithLink'
});

defineProps<ICardWithLinkProps>();

const getTextColor = (isHovering: boolean | null, color: string, colorActive: string = 'text-neutrals-1') => {
  return !isHovering ? color : colorActive;
};
const getBgColor = (isHovering: boolean | null, color: string, colorActive: string = 'bg-brand-1') => {
  return !isHovering ? color : colorActive;
};
</script>

<style lang="scss" scoped>
.card {
  column-gap: $spacer * 4;
  transition: background 0.5s;

  @include above(map.get($grid-breakpoints, md)) {
    column-gap: $spacer * 6;
  }

  &--icon {
    min-width: 32px;

    &--append {
      min-width: 24px;
    }
  }

  &--title,
  &--icon,
  &--icon--append {
    transition: color 0.5s;
  }
}
</style>
