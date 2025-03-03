<template>
  <div v-if="formattedPhone.raw" class="v-telephone d-flex">
    <div class="mr-4 d-inline-flex align-center">
      <slot name="prepend-icon">
        <IconPhoneCall size="24" class="text-brand-1" />
      </slot>
    </div>
    <a :href="`tel:${formattedPhone.raw}`" :target="target" class="v-telephone__link text-neutrals-5">
      {{ formattedPhone.pretty }}
    </a>
  </div>
</template>

<script lang="ts" setup>
import { IconPhoneCall } from '~/components/icons';
import { getFormattedPhone } from '~/core/utils';
import { type LinkTargetType, LinkTargetEnum } from '~/core/types/components'

defineOptions({
  name: 'VTelephone'
});

interface ITelephoneProps {
  phone: string,
  target?: LinkTargetType
}

const { 
  phone, 
  target = LinkTargetEnum.TARGET 
} = defineProps<ITelephoneProps>();

const formattedPhone = getFormattedPhone(phone);
</script>

<style lang="scss" scoped>
.v-telephone {
  &__link {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
