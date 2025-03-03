<script setup lang="ts">
defineOptions({
  name: 'VTitle'
});

interface ITitleProps {
  tag?: string;
  defaultClass?: string;
  additionalClass?: string;
  title: string | undefined;
}

const props = withDefaults(defineProps<ITitleProps>(), {
  tag: 'h2',
  defaultClass: 'text-center text-title3 text-sm-title2 text-md-title1 text-neutrals-5',
  additionalClass: ''
});

const titleHTML = () => {
  return h(props.tag, { innerHTML: props.title, class: `${props.defaultClass} ${props.additionalClass}` });
};
</script>

<template>
  <titleHTML />
</template>
