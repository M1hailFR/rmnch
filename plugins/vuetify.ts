import { createVuetify } from "vuetify";
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import { createI18n, useI18n } from 'vue-i18n'
import { messages } from '../locales'
import 'vuetify/styles'

export default defineNuxtPlugin((nuxtApp) => {
  
  const i18n = createI18n({
    legacy: false,
    locale: 'ru',
    fallbackLocale: 'en',
    messages,
  })

  const vuetify = createVuetify({
    locale: {
      adapter: createVueI18nAdapter({ i18n, useI18n }),
    },
    ssr: true,
    aliases: componentAliases,
    defaults,
    
    theme: {
      defaultTheme: LIGHT_THEME,
      themes: {
        light,
        dark,
      },
    },
  });
  
  nuxtApp.vueApp.use(i18n)
  nuxtApp.vueApp.use(vuetify);
});
