<template>
  <v-sidebar v-model="isOpenMenu" fullscreen class="sidebar" background="background">
    <v-container class="sidebar--container ">
      <v-row no-gutters class="sidebar--menu">
        <v-col :cols="cols[0]" class="d-flex flex-column">
          <v-link
            v-for="(link, idx) in menu"
            :key="idx"
            :link="link.link"
            class="text-title3 text-sm-title2 text-md-title1  mt-6"
            @click="isOpenMenu = false"
          >
            {{ t(link.text) }}
          </v-link>
        </v-col>
        <v-col :cols="cols[1]" class="d-flex flex-column">
          <v-container class="px-0">
            <div class="location mt-6 mb-8 mb-sm-15">
              <v-title tag="h2" defaultClass="text-title6" :title="t(contacts.title)" />
              <v-title tag="h2" defaultClass="text-title6 text-neutrals-4" :title="t(contacts.subtitle)" />
            </div>
            <v-row no-gutters class="">
              <v-col 
                :cols="(idx === 2 || idx === 3) ? 6 : 12"
                
                :class="idx === 3 ? 'text-right' : ''"
                class="text-body1 mb-15 d-flex flex-column" 
                v-for="(c, idx) in contacts.info" 
                :key="idx"
              >
                <v-title tag="h2" defaultClass="text-title5 text-neutrals-4" :title="t(c.label)" />
                <v-title v-if="c.value" tag="h3" defaultClass="text-title5" :title="c.value" />
                <v-link v-for="(link, idx) in c?.items" :key="idx" :link="link.link" class="text-title5">
                  {{ link.name }}
                </v-link>
              </v-col>
            </v-row>
          </v-container>

          <!-- <v-socials v-if="socials && socials.length" :socials="socials" gap="16" class="mt-8" /> -->
        </v-col>
      </v-row>
      <!-- <div class="sidebar--wrapper d-flex flex-column justify-space-between">
        <div class="sidebar--menu mt-8 d-flex flex-column justify-center align-center">
          <v-link
            v-for="(link, idx) in menu"
            :key="idx"
            :link="link.link"
            class="text-center text-title3"
            @click="isOpenMenu = false"
          >
            {{ link.text }}
          </v-link>
        </div>
        <div class="d-flex flex-column align-center">
          <v-telephone v-if="phone" :phone="phone" class="text-title6" />
          <v-mail v-if="email" :mail="email" class="mt-4 text-title5" />
          <v-socials v-if="socials && socials.length" :socials="socials" gap="16" class="mt-8" />
          <client-only>
            <v-button v-if="buttonText" size="large" :block="xs" class="mt-14 mb-8" @click="onOpenCallback">
              {{ buttonText }}
            </v-button>
          </client-only>
        </div>
      </div> -->
    </v-container>
  </v-sidebar>
</template>

<script setup lang="ts">
import { type IHeaderIndividualProps } from '../..';
import { useDisplay } from 'vuetify';
import { VButton, VTelephone, VLink, VSocials, VMail, VSidebar, VTitle } from '~/components/ui';
import { useTranslation } from '~/composables/useTranslation';

defineOptions({
  name: 'MobileSidebarMenuDefault'
});

const isOpenMenu = defineModel<boolean>();
const { xs, lg, sm, mdAndUp  } = useDisplay();
const { t } = useTranslation();

const props = withDefaults(defineProps<Omit<IHeaderIndividualProps, 'logo' | 'formSettings'>>(), {
  menu: () => [],
  contacts: () => ({
    title: '',
    subtitle: '',
    info: []
  }),
  buttonText: ''
});

const emit = defineEmits<{
  'open-callback': [];
}>();

const onOpenCallback = () => {
  emit('open-callback');
};

const cols = computed(() => ( mdAndUp.value ? [8, 4] : [12, 12]));
const contactsCols = computed(() => {
  props.contacts.info
})
</script>

<style lang="scss" scoped>
.sidebar {
  padding-top: 100px;
  // &--container {}
  &--container,
  &--wrapper,
  &--menu {
    height: 100%;
  }

  &--wrapper,
  &--menu {
    row-gap: $spacer * 8;
  }
}
</style>
