import { defineStore } from 'pinia';
import { isClient } from '~/core/utils/process';

export const useScrollStore = defineStore('scroll', () => {
  const isScrollTop = ref(true);

  function checkScrollTop() {
    isScrollTop.value = !(isClient && document?.documentElement?.scrollTop);
  }

  return {
    isScrollTop,
    checkScrollTop
  };
});
