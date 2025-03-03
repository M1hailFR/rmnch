<template>
  <div class="v-socials d-flex" :style="{ gap: `${gap}px` }">
    <template v-for="social in socials">
      <v-link v-if="social.link" :link="social.link" class="v-socials--item d-inline-flex align-center">
        <component v-if="social.name" :is="getSocial(social.shortName)" :size="socialSize" />
      </v-link>
    </template>
  </div>
</template>

<script setup lang="ts">
import { IconVk, IconTelegram, IconWhatsApp } from '~/components/icons';
import { type ISocialItem, type SocialsType, SocialsEnum } from '~/core/types/socials';
import { type SizesType, SizesEnum } from '~/core/types/components'
import { VLink } from '~/components/ui';

defineOptions({
  name: 'VSocials'
});

interface ISocialsProps {
  socials?: ISocialItem[];
  gap?: number | string;
  iconSize?: SizesType;
}

const props = withDefaults(defineProps<ISocialsProps>(), {
  socials: () => [],
  gap: 0,
  iconSize: 'medium'
});

const socialSize = computed(() => {
  switch (props.iconSize) {
    case SizesEnum.SMALL:
      return 32;
    case SizesEnum.MEDIUM:
      return 44;
    case SizesEnum.LARGE:
      return 60;
  }
});

const getSocial = (key: SocialsType) => {
  switch (key) {
    case SocialsEnum.VK:
      return IconVk;
    case SocialsEnum.TELEGRAM:
      return IconTelegram;
    case SocialsEnum.WHATSAPP:
      return IconWhatsApp;
  }
};
</script>

<style lang="scss" scoped>
.v-socials {
  &--item {
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
