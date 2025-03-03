import { useI18n } from 'vue-i18n'
import { useAppStore } from '@/stores/app'
type LocaleLang = 'en' | 'ru'

export function useTranslation() {
  const { t, locale, d } = useI18n()
  return { t, locale, d }
}

export function useLanguageSwitch() {
  const { locale } = useI18n()
  const appStore = useAppStore()
  
  const switchLanguage = (newLang: LocaleLang) => {
      appStore.localeLang = newLang
      locale.value = newLang
  }
  
  return { switchLanguage }
}