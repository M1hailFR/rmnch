<template>
  <div class="callback d-flex flex-column align-center justify-center" :class="{ 'callback-padding': !disablePadding }">
    <div v-if="formSettings && formSettings.title" class="text-center text-title4 text-md-title3" :class="titleColor && `text-${titleColor}`">
      {{ formSettings.title }}
    </div>
    <div v-if="formSettings && formSettings.subtitle" class="mt-1 text-body2 text-center" :class="subtitleColor && `text-${subtitleColor}`">
      {{ formSettings.subtitle }}
    </div>
    <div class="callback--body">
      <v-form
        v-model="isValidForm"
        class="callback--actions mt-6 mt-md-8 d-flex flex-column"
        @submit.prevent="onSendForm"
      >
        <v-input label="Имя*" required :rules="namePules" v-model="form.name" />
        <v-input label="Телефон*" v-mask="'mobile'" required :rules="phonePules" v-model="form.phone" />
        <v-input label="E-mail" :rules="emailPules" v-model="form.email" />
        <v-button v-if="formSettings && formSettings.buttonText" block type="submit"> {{ formSettings.buttonText }} </v-button>
      </v-form>
      <div v-if="formSettings && formSettings.description" class="callback--body--description mt-5 mt-sm-10 text-body3 text-center text-decoration-none" :class="descriptionColor && `text-${descriptionColor}`" v-html="formSettings.description" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { VInput, VButton } from '~/components/ui';
import { type FormSendStatusType, ApiSendFormStatus } from '~/core/types/api';
import { type IFormCallbackSettings } from './shared'
import { type ColorsType, ColorsEnum } from '~/core/types/components';
import { namePules, phonePules, emailPules } from '~/core/utils/validation';
defineOptions({
  name: 'SharedFormCallback'
});

interface ISharedFormCallbackProps {
  formSettings: IFormCallbackSettings;
  disablePadding?: boolean;
  titleColor?: ColorsType;
  subtitleColor?: ColorsType;
  descriptionColor?: ColorsType;
}

withDefaults(defineProps<ISharedFormCallbackProps>(), {
  disablePadding: false,
  titleColor: ColorsEnum.NEUTRALS_5,
  subtitleColor: ColorsEnum.NEUTRALS_5,
  descriptionColor: ColorsEnum.NEUTRALS_4
});

const emit = defineEmits<{
  'send-form': [status: FormSendStatusType];
}>();

const isValidForm = ref(false);
const form = ref({
  name: '',
  phone: '',
  email: ''
});

const onSendForm = async () => {
  if (isValidForm.value) {
    // TODO: прикрутить апи и остальную логику
    console.log('типа отправлено');
    emit('send-form', ApiSendFormStatus.success);
  }
};
</script>

<style lang="scss" scoped>
.callback {
  &-padding {
    padding: 0 20px;

    @include above(map.get($grid-breakpoints, md)) {
      padding: 0 80px;
    }
  }

  &--body {
    width: 100%;
    max-width: 375px;

    &--description {
      ::v-deep {
        & > a {
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  &--actions {
    row-gap: $spacer;
  }
}
</style>
