<template>
  <header
    v-if="fields"
    dark
    class="header"
  >
    <div
      class="header--wrapper bg-background py-4"
      :class="{ 'header-shadow': !isScrollTop && !isOpenMenu }"
    >
      <v-container>
        <div class="d-flex justify-space-between w-100">
          <div class="header--left d-flex align-center justify-space-between w-100">
            <nuxt-link
              to="/"
              @click="isOpenMenu = false"
              class="d-flex align-center justify-center ga-2"
            >
              <img
                v-if="fields.logo"
                cover
                :src="fields.logo"
                class="header--logo"
              />
              <v-title
                tag="h5"
                defaultClass="text-title4"
                :title="fields.text"
              />
            </nuxt-link>

            <v-burger v-model="isOpenMenu"
              >{{ !isOpenMenu ? t(fields.buttonOpen ?? '') : t(fields.buttonClose ?? '') }}
            </v-burger>

            <div class="d-none d-sm-flex align-center ga-3">
              <v-button
                size="small"
                @click="changeIsOpenCallback"
                class="text-button"
              >
                {{ t(fields.buttonForm ?? '') }}
              </v-button>
              <component
                :is="getIconTheme()"
                class="cursor-pointer"
                @click="appStore.toggleTheme"
                :size="24"
              />
              <component
                :is="IconLang"
                @click="switchLanguage(appStore.localeLang === 'ru' ? 'en' : 'ru')"
                :size="24"
                class="cursor-pointer"
                :class="appStore.localeLang === 'ru' ? 'text-brand-1' : 'text-brand-2'"
              />
            </div>
          </div>
          <!-- <div class="header--right d-flex align-center justify-end">
            <div v-if="fields.buttonText" class="d-none d-md-block">
              <v-button size="small" @click="changeIsOpenCallback">
                {{ fields.buttonText }}
              </v-button>
            </div>
            
          </div> -->
        </div>
      </v-container>
    </div>
    <mobile-sidebar-menu-default
      v-model="isOpenMenu"
      :button-text="fields.buttonForm"
      :menu="fields.menu"
      :contacts="fields.contacts"
      @open-callback="changeIsOpenCallback"
    />
    <mobile-sidebar-callback-default
      v-model="isOpenCallback"
      :modal-settings="fields.formSettings"
      @close-sidebar="onCloseSidebar"
      class="d-md-none"
    />
    <modal-default
      v-model="isOpenCallback"
      :modal-settings="fields.formSettings"
      class="d-none d-md-flex"
    />
  </header>
</template>

<script setup lang="ts">
import { type IFieldsProps } from '~/core/types/components'
import { type IHeaderIndividualProps, MobileSidebarMenuDefault, MobileSidebarCallbackDefault } from './shared'
import { useAppStore } from '~/stores/app'
import { useScrollStore } from '~/stores/scroll'
import { storeToRefs } from 'pinia'
import { useLanguageSwitch, useTranslation } from '~/composables/useTranslation'
import { VButton, VLink, VInput, VSocials, VTitle, VBurger } from '~/components/ui'
import { IconSunny, IconNight, IconLang } from '~/components/icons'
import { ModalDefault } from '~/components/modals'

const appStore = useAppStore()
const { switchLanguage } = useLanguageSwitch()
const { t } = useTranslation()

defineOptions({
  name: 'HeaderDefault',
})

defineProps<IFieldsProps<IHeaderIndividualProps>>()

const scrollStore = useScrollStore()

const { isScrollTop } = storeToRefs(scrollStore)

const isOpenMenu = ref<boolean | undefined>(false)
const isOpenCallback = ref<boolean | undefined>(false)

const changeIsOpenCallback = () => {
  isOpenCallback.value = !isOpenCallback.value
}

const onCloseSidebar = () => {
  isOpenMenu.value = false
}

watch(isOpenMenu, newValue => {
  if (!newValue) isOpenCallback.value = false
})

const getIconTheme = () => {
  return appStore.theme === 'light' ? IconSunny : IconNight
}
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;

  &-shadow {
    box-shadow: 0px 0px 16px 0px get-rgb-color(neutrals-2, 0.05);
  }

  &--wrapper {
    position: relative;
    z-index: 1000;
    // background: get-rgb-color(neutrals-1);
  }

  &--left {
    column-gap: $spacer * 1;
  }

  &--right {
    column-gap: $spacer * 1;
  }

  &--logo {
    height: 28px;
  }

  &--menu {
    column-gap: $spacer * 6;
  }
}
</style>
