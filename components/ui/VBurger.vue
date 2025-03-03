<template>
  <v-button
    size="small"
    variant="flat"
    class="text-button"
    @click="changeIsActive"
  >
    <div class="v-burger d-flex py-0" :class="{ 'v-burger-active': isActive }">
      <IconMenu v-if="!isActive" size="24" />
      <IconCross v-else size="24" />
    </div>
    <div class="ml-1">
      <slot />
    </div>
  </v-button>
</template>

<script setup lang="ts">
import { IconMenu, IconCross } from '~/components/icons';
import { VButton } from '~/components/ui';
defineOptions({
  name: 'VBurger'
});

const isActive = defineModel<boolean>();

const changeIsActive = () => {
  isActive.value = !isActive.value;
};
</script>

<style lang="scss" scoped>
.v-burger {
  transition: transform 0.2s;

  &-active {
    transform: rotate(180deg);
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
