<template>
  <nuxt-link v-if="link" :to="link" :class="linkClass" :external="isExternalUrl(link)" :target="target">
    <slot />
  </nuxt-link>
  <span v-else :class="linkClass">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { isExternalUrl } from '~/core/utils';
import { type LinkTargetType, type ElementVariantsTypes, LinkTargetEnum, ElementVariantsEnum } from '~/core/types/components'
defineOptions({
  name: 'VLink'
});

interface ILinkProps {
  link: string;
  target?: LinkTargetType;
  variant?: ElementVariantsTypes;
}

const props = withDefaults(defineProps<ILinkProps>(), {
  target: LinkTargetEnum.SELF,
  variant: ElementVariantsEnum.PRIMARY
});

const linkClass = computed(() => {
  return ['v-link', 'text-decoration-none', `v-link-${props.variant}`];
});
</script>

<style lang="scss" scoped>
.v-link {
  &-primary {
    color: get-rgb-color(neutrals-6);
  }

  &-secondary {
    color: get-rgb-color(neutrals-4);
  }

  &[href] {
    &:hover,
    &:active,
    &.router-link-exact-active {
      color: get-rgb-color(brand-1);
    }
  }
}
</style>
