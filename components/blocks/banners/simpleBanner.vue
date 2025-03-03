<template>
  <section v-if="fields">
    <v-container>
      <div class="simple-banner rounded-xl pa-6 px-md-0 py-md-14 d-flex justify-center">
        <NuxtImg v-if="fields.background" :src="fields.background" class="simple-banner--background" />
        <div class="simple-banner--wrapper d-flex flex-column justify-space-between align-center">
          <div
            v-if="fields.title"
            class="simple-banner--title text-md-center text-neutrals-1 text-title4 text-md-title2"
          >
            {{ fields.title }}
          </div>
          <div v-if="fields.title && fields.buttonText" class="mt-md-8" />
          <div v-if="fields.buttonText" class="align-self-stretch align-self-md-center">
            <v-button
              size="large"
              min-width="264px"
              class="d-none d-md-block simple-banner--button"
              @click="onOpenCallbackModal"
            >
              {{ fields.buttonText }}
            </v-button>
            <v-button size="medium" min-width="100%" class="d-md-none simple-banner--button" @click="onOpenCallbackModal">
              {{ fields.buttonText }}
            </v-button>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { type IFieldsProps } from '~/core/types/components';
import { VButton } from '~/components/ui';
import { ModalDefault } from '~/components/modals';
defineOptions({
  name: 'BlockBannerSimple'
});

interface IBannerSimpleProps {
  title: string;
  buttonText?: string;
  buttonLink?: string;
  background: string;
}

defineProps<IFieldsProps<IBannerSimpleProps>>();
const emit = defineEmits<{
  'open-modal': [];
}>();

const onOpenCallbackModal = () => {
  emit('open-modal');
};
</script>

<style lang="scss" scoped>
.simple-banner {
  overflow: hidden;
  min-height: 280px;
  background: linear-gradient(180deg, #151f38 0%, #1a2b52 100%);
  position: relative;

  &--background {
    position: absolute;
    top: 0;
    bottom: 0;
    transform: translateX(-50%);
    left: 50%;
    height: 100%;

    @include above(map.get($grid-breakpoints, md)) {
      width: 100%;
    }
  }

  &--wrapper {
    max-width: 800px;
    position: relative;
    z-index: 5;
  }

  &--button {
    width: 100%;

    @include above(map.get($grid-breakpoints, md)) {
      min-width: 264px;
    }
  }
}
</style>
