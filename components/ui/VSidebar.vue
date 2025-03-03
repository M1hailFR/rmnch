<template>
  <div
    class="v-sidebar"
    :class="[`v-sidebar-${position}`, `bg-${background}`, { 'v-sidebar-active': isActive }]"
    :style="{ 'z-index': zIndex, width: getWidth }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { SidesEnum, ColorsEnum, type SidesType } from '~/core/types/components';
defineOptions({
  name: 'VSidebar'
});

interface ISidebarProps {
  position?: SidesType;
  width?: string | number;
  zIndex?: string | number;
  background?: string;
  fullscreen?: boolean;
}

const props = withDefaults(defineProps<ISidebarProps>(), {
  position: SidesEnum.LEFT,
  width: 250,
  zIndex: 100,
  background: ColorsEnum.NEUTRALS_1,
  fullscreen: false
});

const isActive = defineModel<boolean>();

const getWidth = computed(() => {
  if (props.position === SidesEnum.BOTTOM || props.position === SidesEnum.TOP || props.fullscreen) return '100%';
  return `${props.width}px`;
});
</script>

<style lang="scss" scoped>
.v-sidebar {
  position: fixed;
  transition: transform 0.5s;
  inset: 0;
  &::-webkit-scrollbar {
    width: 0px;
    background-color: #f9f9fd;
  }
  overflow-y: auto;
  &-left {
    transform: translateX(-100%);
  }

  &-right {
    transform: translateX(100%);
  }

  &-left,
  &-right {
    height: 100vh;
  }

  &-top {
    transform: translateY(-100%);
  }

  &-bottom {
    transform: translateY(100%);
  }

  &-active {
    transform: translate(0, 0);
  }
}
</style>
