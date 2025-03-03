<template>
  <v-text-field
    v-model="model"
    variant="solo-filled"
    clearable
    flat
    :label="label"
    required
    density="comfortable"
    bg-color="surface-2"
    base-color="neutrals-3"
    color="neutrals-3"
    rounded="lg"
    class="v-input-custom text-body2"
    v-bind="$attrs"
  >
    <template v-slot:clear>
      <span class="d-inline-flex align-items-center text-neutrals-3" @click="reset">
        <slot name="clear">
          <IconCross size="24" />
        </slot>
      </span>
    </template>
  </v-text-field>
</template>

<script setup lang="ts">
import { IconCross } from '../icons';
defineOptions({
  name: 'VInput'
});

interface IInputProps {
  label?: string;
}

withDefaults(defineProps<IInputProps>(), {
  label: ''
});

const model = defineModel({ required: true });

const reset = () => {
  model.value = '';
};
</script>

<style lang="scss" scoped>
.v-input-custom {
  ::v-deep {
    &.v-input {
      .v-field {
        // border: 1px solid get-rgb-color(surface-2) inset;
        box-shadow: inset 0 0 0 1px get-rgb-color(surface-2);
        // transition: border-color 0.3s;
        &__overlay {
          display: none;
        }

        &:hover,
        &--active {
          // border-color: get-rgb-color(neutrals-3);
          box-shadow: inset 0 0 0 1px get-rgb-color(neutrals-3);
        }

        &--error {
          // border-color: get-rgb-color(danger);
          box-shadow: inset 0 0 0 1px get-rgb-color(danger);

          .v-label {
            color: get-rgb-color(neutrals-3);
          }
        }

        .v-label {
          opacity: unset;
        }
      }

      .v-input__details {
        padding-inline: unset;
        padding-top: 2px;
      }

      &--error {
        .v-messages__message {
          color: get-rgb-color(danger);
        }
      }
    }
  }
}
</style>
