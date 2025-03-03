<template>
  <div>
    <VVerticalPadding
      :desktop-padding="MAIN_BANNER_CONFIG.desktopPadding"
      :mobile-padding="MAIN_BANNER_CONFIG.mobilePadding"
    >
      <BlockBannerDefault :fields="MAIN_BANNER_CONFIG.block_fields" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="MAIN_INFO_CONFIG.desktopPadding"
      :mobile-padding="MAIN_INFO_CONFIG.mobilePadding"
    >
      <BlockBannerDefault :fields="MAIN_INFO_CONFIG.block_fields" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="MAIN_SERVICES_CONFIG.desktopPadding"
      :mobile-padding="MAIN_SERVICES_CONFIG.mobilePadding"
    >
      <BlockBannerDefault :fields="MAIN_SERVICES_CONFIG.block_fields" />
    </VVerticalPadding>
  </div>
</template>

<script setup lang="ts">
import { BlockBannerDefault } from '~/components/blocks'

import { VVerticalPadding } from '~/components/ui'
import { MAIN_BANNER_CONFIG, MAIN_INFO_CONFIG, MAIN_SERVICES_CONFIG } from '~/configs/pages/index'

defineOptions({
  name: 'PageMain',
})

const { t } = useTranslation()
</script>

<style scoped>
.dvh-100 {
  height: 100dvh;
}
</style>
