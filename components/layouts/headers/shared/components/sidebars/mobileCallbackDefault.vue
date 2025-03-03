<template>
  <v-sidebar v-model="isOpenCallback" fullscreen z-index="200" class="sidebar">
    <v-container class="sidebar--container">
      <component
        :is="modalContent"
        :form-settings="modalSettings"
        :disable-padding="true"
        @send-form="setSentStatus"
        @close="closeModal"
        class="sidebar--content"
      />
    </v-container>
  </v-sidebar>
</template>

<script setup lang="ts">
import { VSidebar } from '~/components/ui';
import { SharedFormCallback, SharedFormSuccess } from '~/components/shared';
import { type FormSendStatusType } from '~/core/types/api';
import { type IFormCallbackSettings } from '~/components/shared';
defineOptions({
  name: 'MobileSidebarCallbackDefault'
});

defineProps<{ modalSettings: IFormCallbackSettings }>();

const emit = defineEmits<{
  'close-sidebar': [];
}>();

const isOpenCallback = defineModel<boolean>();

const isSentSuccess = ref(false);

const modalContent = computed(() => {
  return isSentSuccess.value ? SharedFormSuccess : SharedFormCallback;
});

const setSentStatus = (status: FormSendStatusType) => {
  isSentSuccess.value = status === 'success';
};

const closeModal = () => {
  emit('close-sidebar');
  isSentSuccess.value = false;
};

watch(isOpenCallback, newValue => {
  if (!newValue) isSentSuccess.value = false;
});
</script>

<style lang="scss" scoped>
.sidebar {
  padding-top: 88px;

  &--container {
    height: 100%;
  }

  &--content {
    height: 100%;
  }
}
</style>
