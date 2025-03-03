<template>
  <section class="banner">
    <v-container>
      <div
        class="banner--title"
        :class="!fields.logo ? '' : 'd-grid'"
      >
        <NuxtImg
          v-if="fields.logo"
          
          :src="fields.logo"
          class="banner--logo"
        />

        <v-title
          v-if="fields.title"
          :title="fields.title"
          :additional-class="!isSingle ? `text-md-left ${fields.titleTextSize}` : ''"
          class="d-flex flex-column"
        />
        
      </div>

      <v-image
        v-if="fields.image"
        class=""
        :href="fields.image"
      />

      <div
        v-if="fields.subtitle"
        v-html="fields.subtitle"
        class="text-neutrals-2 banner--subtitle"
        :class="[
          !isSingle ? 'text-left w-86 w-md-66 flex-column flex-sm-row' : 'text-center',
          fields.subscribeTextSize,
          fields.subscribeType,
        ]"
      />

      <!-- <div class="banner--left d-flex flex-column justify-center" :class="{ 'align-center': isSingle }">
        <div class="banner--left--inner">
          <v-title v-if="fields.title" :title="fields.title" :additional-class="!isSingle ? 'text-md-left' : ''" />

          <div
            v-if="fields.subtitle"
            v-html="fields.subtitle"
            class="mt-5 mt-md-4 text-center text-neutrals-4 text-body-1"
            :class="!isSingle ? 'text-md-left' : ''"
          />

          <div v-if="fields.buttonText" class="d-none d-md-block" :class="isSingle ? 'd-md-flex justify-center' : ''">
            <v-button size="large" min-width="285" class="mt-8 banner--button">
              {{ fields.buttonText }}
            </v-button>
          </div>
        </div>
      </div> -->
      <!-- <div
        class="banner--wrapper"
        :class="{ 'banner--wrapper-single': isSingle, 'banner--wrapper-with-cards': fields.cards }"
      >
        <div class="banner--left d-flex flex-column justify-center" :class="{ 'align-center': isSingle }">
          <div class="banner--left--inner">
            <v-title v-if="fields.title" :title="fields.title" :additional-class="!isSingle ? 'text-md-left' : ''" />
            <div
              v-if="fields.subtitle"
              v-html="fields.subtitle"
              class="mt-5 mt-md-4 text-center text-neutrals-4 text-body-1"
              :class="!isSingle ? 'text-md-left' : ''"
            />
            <div v-if="fields.buttonText" class="d-none d-md-block" :class="isSingle ? 'd-md-flex justify-center' : ''">
              <v-button size="large" min-width="285" class="mt-8 banner--button">
                {{ fields.buttonText }}
              </v-button>
            </div>
          </div>
        </div>
        <div v-if="fields.image" class="banner--right">
          <v-img :src="fields.image" />
        </div>
        <div v-else-if="fields.cards" class="banner--cards">
          <VBorderGrid cols="2">
            <CardWithLogo v-for="(card, idx) in fields.cards" :key="idx" v-bind="{ ...card, size: fields.size }" />
          </VBorderGrid>
        </div>
        <div v-if="fields.buttonText" class="banner--bottom-button d-flex justify-center d-md-none">
          <v-button size="large" :block="xs" :min-width="!xs ? 285 : undefined" class="mt-4 banner--button">
            {{ fields.buttonText }}
          </v-button>
        </div>
      </div> -->
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { VButton, VTitle, VImage, VBorderGrid } from '~/components/ui'
import { type ICardWithLogoProps } from '~/components/shared'
import { CardWithLogo } from '~/components/shared'
import { type SizesType, type IFieldsProps } from '~/core/types/components'
import { useDisplay } from 'vuetify'

defineOptions({
  name: 'BlockBannerDefault',
})

interface IBannerDefautProps {
  title: string | null
  subtitle?: string | null
  buttonText?: string | null
  buttonLink?: string | null
  image?: string | null
  logo?: string | null
  cards?: ICardWithLogoProps[]
  size?: SizesType
  titleTextSize?: string | null
  subscribeTextSize?: string | null
  subscribeType?: string | null
}

const { fields } = defineProps<IFieldsProps<IBannerDefautProps>>()

const { xs } = useDisplay()
const isSingle = computed(() => {
  return !fields.image && !fields.cards && !fields.logo
})
</script>

<style lang="scss" scoped>
.banner {
  $root: '.banner';
  display: flex;
  justify-content: center;
  align-items: center;

  &--title {
    grid-template-columns: auto 1fr;
    column-gap: $spacer * 5;
    align-items: start;
    @include above(map.get($grid-breakpoints, md)) {
      grid-template-columns: auto 1fr;
      column-gap: $spacer * 15;
    }
    &--content {
      display: flex;
      flex-direction: column;
    }
  }

  &--subtitle {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: $spacer * 15;

    &-negative {
      padding-left: 2em;
      text-indent: -2em;
      margin-left: auto;
    }

    &-positive {
      padding-left: 0;
      text-indent: 2em;
      margin-left: auto;
    }
  }

  &--wrapper {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: $spacer * 4;

    @include above(map.get($grid-breakpoints, md)) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: $spacer * 5;
    }

    &-single {
      grid-template-columns: repeat(1, 1fr);

      & #{$root}--left--inner {
        max-width: 589px;
      }
    }

    &-with-cards {
      row-gap: $spacer * 6;
      column-gap: $spacer * 10;
    }
  }

  &--cards {
    grid-row: 1;

    @include above(map.get($grid-breakpoints, md)) {
      grid-column: 2;
    }
  }

  &--logo {
    height: 40px;
    @media screen and (min-width: 375px) {
      height: 70px;
    }
  }
}
</style>
