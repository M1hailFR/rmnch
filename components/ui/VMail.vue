<template>
  <div v-if="mail" class="v-mail d-flex">
    <div class="mr-4 d-inline-flex align-center">
      <slot name="prepend-icon">
        <IconMail size="24" class="text-brand-1" />
      </slot>
    </div>
    <a :href="`mailto:${mail}`" :target="target" class="v-mail__link text-neutrals-5">
      {{ mail }}
    </a>
  </div>
</template>

<script lang="ts" setup>
import { IconMail } from '~/components/icons';
import { type LinkTargetType, LinkTargetEnum } from '~/core/types/components'

defineOptions({
  name: 'VMail'
});

interface IMailProps {
  mail: string,
  target?: LinkTargetType
}

withDefaults(defineProps<IMailProps>(), {
  target: LinkTargetEnum.TARGET
})
</script>

<style lang="scss" scoped>
.v-mail {
  &__link {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
