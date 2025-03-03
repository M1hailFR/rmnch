<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-btn
      :variant="variant"
      :color="getColor(isHovering)"
      class="v-button-custom rounded-lg text-body2"
      size="custom"
      :class="sizeClasses"
      :disabled="disabled"
      v-bind="{ ...props, ...$attrs }"
    >
      <slot />
    </v-btn>
  </v-hover>
</template>

<script setup lang="ts">
import { type SizesType, SizesEnum, type ColorsType, ColorsEnum } from '~/core/types/components';
defineOptions({
  name: 'VButton',
  inheritAttrs: false
});
type ButtonColors = Extract<ColorsType, `${ColorsEnum.BRAND_1 | ColorsEnum.BRAND_2 | ColorsEnum.NEUTRALS_4}`>;
interface IButtonProps {
  size?: SizesType;
  disabled?: boolean;
  variant?: 'flat' | 'outlined';
}

const props = withDefaults(defineProps<IButtonProps>(), {
  size: SizesEnum.MEDIUM,
  disabled: false,
  variant: 'flat'
});

const sizeClasses = computed(() => {
  switch (props.size) {
    case SizesEnum.SMALL:
      return 'px-2 py-1';
    case SizesEnum.MEDIUM:
      return 'pa-3';
    case SizesEnum.LARGE:
      return 'px-5 py-4';
  }
});

const getColor = (isHovering: boolean | null): ButtonColors => {
  if (!isHovering && !props.disabled) return ColorsEnum.BRAND_1;
  if (isHovering && !props.disabled) return ColorsEnum.BRAND_2;

  return ColorsEnum.NEUTRALS_4;
};
</script>

<style lang="scss" scoped>
.v-button-custom {
  ::v-deep {
    &.v-btn .v-btn__overlay {
      display: none;
    }
  }
}
</style>
