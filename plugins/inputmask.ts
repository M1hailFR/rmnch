// @ts-expect-error
import Inputmask from 'inputmask';

Inputmask.extendDefaults({
  rightAlign: false,
  showMaskOnHover: false,
  showMaskOnFocus: false
});

Inputmask.extendAliases({
  mobile: {
    mask: '+7 (\\999) 999-99-99'
  }
});

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('mask', (el, binding) => {
    const { value } = binding;
    if (value) {
      const inputEl = el.querySelector('.v-field__input');
      inputEl && Inputmask(value).mask(inputEl);
    }
  });
});
