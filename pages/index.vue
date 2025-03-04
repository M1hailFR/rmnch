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
      :desktop-padding="MAIN_CARD_OUR_SERVICES_BLOCK.desktopPadding"
      :mobile-padding="MAIN_CARD_OUR_SERVICES_BLOCK.mobilePadding"
    >
      <BlockCardOurServices :fields="MAIN_CARD_OUR_SERVICES_BLOCK.block_fields" />
    </VVerticalPadding>
  </div>
</template>

<script setup lang="ts">
import { BlockBannerDefault, BlockCardOurProducts, BlockCardOurServices } from '~/components/blocks'

import { VVerticalPadding } from '~/components/ui'
import { MAIN_BANNER_CONFIG, MAIN_INFO_CONFIG, MAIN_CARD_OUR_SERVICES_BLOCK } from '~/configs/pages/index'

defineOptions({
  name: 'PageMain',
})
</script>

<style scoped>
.dvh-100 {
  height: 100dvh;
}
</style>
