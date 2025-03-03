<template>
  <ul class="v-list">
    <template v-for="(item, idx) in list">
      <li v-if="divider && idx" class="v-list--divider bg-neutrals-2 my-3" />
      <li class="v-list--item d-flex align-center">
        <component
          v-if="customMark"
          :is="getIconByKey(item.icon || defaultCustomIcon)"
          size="24"
          class="v-list--marker-custom text-brand-1"
        />
        <span v-else class="v-list--marker-standart rounded-circle" :class="`bg-${textColor}`" />
        <span v-if="item.text" class="text-title6" :class="`text-${textColor}`">
          {{ item.text }}
        </span>
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
import { getIconByKey } from '~/core/helpers/icons';
import { type IListItem } from './shared';
import { ColorsEnum, IconsEnum, type ColorsType } from '~/core/types/components';

defineOptions({
  name: 'VList'
});

interface IVListProps {
  list: IListItem[];
  divider?: boolean;
  customMark?: boolean;
  textColor?: ColorsType;
}

withDefaults(defineProps<IVListProps>(), {
  divider: false,
  customMark: false,
  textColor: ColorsEnum.NEUTRALS_5
});

const defaultCustomIcon = IconsEnum.Check;
</script>

<style lang="scss" scoped>
.v-list {
  list-style-type: none;

  &--divider {
    height: 1px;
  }

  &--item {
    column-gap: $spacer * 2;
    &:has(.v-list--marker-custom) {
      column-gap: $spacer * 4;
    }
  }

  &--marker {
    &-custom {
      min-width: 24px;
    }

    &-standart {
      width: 4px;
      height: 4px;
      min-width: 4px;
    }
  }
}
</style>
