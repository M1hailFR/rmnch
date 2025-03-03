<template>
  <v-hover v-slot="{ isHovering, props }">
    <div
      class="v-image-custom"
      :class="size"
      v-bind="props"
    >
      <span class="v-image-custom--text" v-html="text"/>
      <v-img
        v-show="isHovering"
        class="v-image--img"
        :src="href"
      />
    </div>
  </v-hover>
</template>

<script setup lang="ts">
import { type SizesType, SizesEnum } from '~/core/types/components'

defineOptions({
  name: 'VImage',
})

interface VImageProps {
  size?: SizesType
  text?: string
  href: string
}

const props = withDefaults(defineProps<VImageProps>(), {
  size: SizesEnum.LARGE,
  text: 'Наведи, чтобы увидеть <br> фотку основателя',
})
</script>

<style scoped lang="scss">
.v-image-custom {
  width: 100%;
  position: relative;
  cursor: pointer;
  border: 1px solid get-rgb-color(neutrals-2);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.1s ease-in-out;
  aspect-ratio: 1;
  box-sizing: border-box;
  
  &--text {
    position: absolute;
    text-align: center;
  }

  &--img {
    width: 100%;
    border-radius: 50%;
    transition: 0.3s linear;
  }

  &:hover {
    border: none;
    box-shadow: 0px 0px 100px 0px get-rgb-color(neutrals-2, 0.2);
  }
}

.small {
  margin: 10px 0;
  max-width: 300px;
}
.medium {
  margin: 20px 0;
  max-width: 400px;
}
.large {
  margin: 30px 0;
  max-width: 500px;
}
</style>
