<template>
  <v-dialog v-model="isActive" class="dialog" max-width="600" min-height="556" max-height="556">
    <div class="dialog--inner flex-grow-1 d-flex flex-column align-center rounded-xl py-14">
      <div class="dialog--close" @click="closeModal">
        <IconCross size="24" class="text-neutrals-2" />
      </div>

      <component
        :is="modalContent"
        :form-settings="modalSettings"
        class="flex-grow-1"
        @send-form="setSentStatus"
        @close="closeModal"
      />
    </div>
  </v-dialog>
</template>

<script setup lang="ts">
import { IconCross } from '~/components/icons';
import { SharedFormCallback, SharedFormSuccess } from '~/components/shared';
import { type FormSendStatusType } from '~/core/types/api';
import { type IFormCallbackSettings } from '~/components/shared';

defineOptions({
  name: 'ModalDefault'
});

defineProps<{ modalSettings: IFormCallbackSettings }>();
const isActive = defineModel<boolean>();
const isSentSuccess = ref(false);

const modalContent = computed(() => {
  return isSentSuccess.value ? SharedFormSuccess : SharedFormCallback;
});

const setSentStatus = (status: FormSendStatusType) => {
  isSentSuccess.value = status === 'success';
};

const closeModal = () => {
  isActive.value = false;
  isSentSuccess.value = false;
};
</script>

<style lang="scss" scoped>
.dialog {
  &--inner {
    background: get-rgb-color(neutrals-1);
    position: relative;
  }

  &--close {
    position: absolute;
    top: 24px;
    right: 24px;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
