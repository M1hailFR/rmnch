import { defineStore } from 'pinia'
import { useTranslation } from '../composables/useTranslation'
type Theme = 'light' | 'dark'
type LocaleLang = 'en' | 'ru'

export const useAppStore = defineStore('app', {
  
  state: () => ({
    loading: false as boolean,
    theme: 'dark' as Theme,
    localeLang: 'ru' as LocaleLang
  }),
  
  actions: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
    },
    setLoading(value: boolean) {
      this.loading = value
    }
  }
})
