<template>
  <div class="v-collapse transition-all" v-click-outside="close">
    <div @click="toggle" :class="isOpen ? 'v-collapse--active' : ''">
      <div class="v-collapse--header">
        <slot name="header" :list="props.content" />
      </div>
      <transition
        name="collapse"
        mode="out-in"
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
      >
        <div v-show="isOpen && hasContent" class="v-collapse--content">
          <div class="v-collapse--wrapper">
            <slot name="content" />
          </div>
        </div>
      </transition>
      <div class="v-collapse--show text-uppercase">
        {{ isOpen ? 'Скрыть' : 'Показать' }}
        <IconCross size="24" class="mx-2" :class="isOpen ? '' : 'rotate-45'" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconCross } from '~/components/icons'
import { useDisplay } from 'vuetify'
import { type IListService } from '~/components/ui'

interface ICollapseProps {
  openIndicator?: boolean
  icon?: string
  title?: string
  text?: string
  content?: IListService[]
}

const emit = defineEmits<{
  (e: 'change'): void
}>()

const props = withDefaults(defineProps<ICollapseProps>(), {
  openIndicator: true,
})

const { mdAndUp } = useDisplay()

const isOpen = ref(false)
const hasContent = computed(() => props.content && props.content.length > 0)

const close = () => (isOpen.value = false)
const open = () => (isOpen.value = true)
const toggle = () => {
  if (isOpen.value) {
    close()
  } else {
    open()
    emit('change')
  }
}

const beforeEnter = (el: Element) => {
  const element = el as HTMLElement
  requestAnimationFrame(() => {
    element.style.height = '0px'
    element.style.display = 'block'
  })
}

const enter = (el: Element, done: () => void) => {
  const element = el as HTMLElement
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.style.height = `${element.scrollHeight}px`
      done()
    })
  })
}

const afterEnter = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = 'auto'
}

const beforeLeave = (el: Element) => {
  const element = el as HTMLElement
  requestAnimationFrame(() => {
    element.style.height = `${element.offsetHeight}px`
  })
}

const leave = (el: Element) => {
  const element = el as HTMLElement
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.style.height = '0px'
    })
  })
}

const afterLeave = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = 'auto'
  element.style.display = 'none'
}

onMounted(() => {
  if (props?.content && props?.content[0].title === 'ЛЕНДИНГ') {
    open()
  }
})
</script>

<style lang="scss" scoped>
.v-collapse {
  border: 1px solid get-rgb-color(neutrals-2);
  border-radius: 1rem;
  margin-bottom: $spacer * 3;
  padding: $spacer * 6;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;

  &--header {
    margin-bottom: $spacer * 2;
  }

  &--icon {
    margin-left: auto;
    display: none;
    @include above(map.get($grid-breakpoints, md)) {
      display: block;
    }
  }

  &--content {
    overflow: hidden;
    transition: height 0.3s ease;
  }

  &--wrapper {
    padding-bottom: $spacer * 5;
    max-width: 900px;
  }

  &--show {
    display: flex;
    align-items: center;
    color: get-rgb-color(neutrals-3, 0.5);
  }

  &:hover,
  .v-collapse--active {
    border-color: get-rgb-color(brand-1, 0.5);

    .v-collapse--header {
      color: get-rgb-color(brand-1);
    }
    .v-collapse--show {
      color: get-rgb-color(neutrals-2);
    }
  }

  &:first-child {
    border-top-style: none;
  }

  &:last-child {
    border-bottom-style: none;
  }
}
</style>
