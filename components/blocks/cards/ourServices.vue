<template>
  <section class="card">
    <v-container>
      <div class="card--wrapper">
        <v-title v-if="fields.title" :title="fields.title" />
        <div class="card--inner rounded-xl mt-15 mt-md-15 pa-4 pa-md-10">
          <div class="card--inner--left">
            <v-collapse
              v-for="(item, idx) in fields.card.lists"
              :key="item.title"
              :content="[item]"
              :title="item.title"
              :text="item.text"
              @change="showStages(item)"
              class="card-collapse--header"
            >
              <template #header="{ list }">
                <div class="d-flex flex-wrap ga-4 justify-space-between text-title4 mb-4">
                  <div class="collapse--title text-sm-title3">
                    {{ list?.[0].title }}
                  </div>
                  <div class="text-neutrals-3">
                    {{ list?.[0].price }}
                  </div>
                  <div class="text-neutrals-3">
                    {{ list?.[0].duration }}
                  </div>
                </div>
              </template>

              <template #content>
                <v-title :title="item.text" tag="h5" defaultClass="text-body2" />
              </template>
            </v-collapse>
          </div>

          <div class="card--right">
            <div class="card--stages px-sm-5">
              <div class="card--stages--header text-body1 text-right px-5 py-3">
                {{ currentService?.title }}
              </div>
              <div class="text-title3 text-md-title2 px-5 py-9">
                {{ fields.card.listTitle }}
              </div>

              <div v-for="(item, idx) in currentService?.stages" :key="idx">
                <div class="card--divider my-3 my-md-5" />
                <div class="card--stages--item text-body2 px-3 px-sm-5">
                  <div class="card--stages--item--titles text-uppercase">
                    {{ item.title }}
                  </div>
                  <div class="card--stages--item--duration text-lg-right">
                    {{ item.duration }}
                  </div>
                  <div class="card--stages--item--price text-lg-right">{{ item.price }} ₽</div>
                  <div class="card--stages--item--button d-flex justify-end">
                    <IconCross
                      @click="addStage(item)"
                      size="24"
                      class="cursor-pointer"
                      :class="currentStages.includes(item) ? '' : 'rotate-45'"
                    />
                  </div>
                </div>
              </div>

              <transition-group name="fade" mode="out-in">
                <div v-if="totalCurrentStage.stagesCount > 0" class="card--divider my-3 my-md-5" />
                <div v-if="totalCurrentStage.stagesCount > 0" class="card--stages--footer px-5 mb-15">
                  <div class="card--stages--item text-body2">
                    <div class="d-none d-lg-block text-uppercase font-weight-bold"></div>
                    <div class="text-lg-right">{{ totalCurrentStage.price }} ₽</div>
                    <div class="text-lg-right">{{ totalCurrentStage.days }} ДНЕЙ</div>
                  </div>
                </div>
              </transition-group>

              <div class="card--divider my-2 my-md-3" />
              <div class="my-6 d-flex justify-center">
                <v-button
                  v-if="fields.card.buttonText"
                  :to="fields.card.buttonLink"
                  class="text-uppercase"
                  color="neutrals-2"
                  variant="text"
                  :block="xs"
                >
                  {{ fields.card.buttonText }}
                </v-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { IconCross } from '~/components/icons'
import { type IFieldsProps } from '~/core/types/components'
import { VTitle, VButton, VCollapse, type IListItem, type IListService } from '~/components/ui'
import { useDisplay } from 'vuetify'

defineOptions({
  name: 'BlockCardOurServices',
})

interface ICard {
  title?: string
  buttonText?: string
  buttonLink?: string
  image?: string
  lists: IListService[]
  buttonStagesOpen?: string
  buttonStagesClose?: string
  listTitle?: string
}

interface ICardOurServicesProps {
  title: string
  card: ICard
}

const props = defineProps<IFieldsProps<ICardOurServicesProps>>()

const { xs } = useDisplay()

const currentService = ref<IListService>()
const currentStages = ref<IListItem[]>([])
const selectedStages = ref(new Set())

const showStages = (list: IListService) => {
  currentService.value = list
  currentStages.value = [...(list.stages || [])]
  selectedStages.value = new Set(list.stages?.map(stage => stage.title) || [])
}

const addStage = (stage: IListItem) => {
  if (stage?.title && selectedStages.value.has(stage.title)) {
    currentStages.value = currentStages.value.filter(s => s.title !== stage.title)
    selectedStages.value.delete(stage.title)
  } else {
    currentStages.value.push(stage)
    selectedStages.value.add(stage.title)
  }
}

const getDurationDays = (duration: string): number => parseInt(duration.split(' ')[0]) || 0

const totalCurrentStage = computed(() => {
  const stages = currentService.value?.stages?.filter(stage => selectedStages.value.has(stage?.title)) || []

  return {
    days: stages.reduce((sum, stage) => sum + getDurationDays(stage.duration || ''), 0),
    price: stages.reduce((sum, stage) => sum + (stage.price || 0), 0),
    stagesCount: stages.length,
  }
})

onMounted(() => {
  currentService.value = props.fields.card.lists[0]
})
</script>

<style lang="scss" scoped>
.card {
  &--inner {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: $spacer * 8;

    @include above(map.get($grid-breakpoints, md)) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: $spacer * 12;
      row-gap: unset;
    }

    &--left {
      grid-row: 2;
    }

    &--right {
      grid-row: 1;
    }

    &--left,
    &--right {
      @include above(map.get($grid-breakpoints, md)) {
        grid-row: unset;
      }
    }
  }

  &--stages {
    border-radius: 1rem;
    border: 1px solid get-rgb-color(neutrals-2);
    overflow: hidden;

    &--item {
      display: grid;
      gap: $spacer;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        'title title title'
        'price duration button';
      align-items: center;
      @include above(map.get($grid-breakpoints, lg)) {
        align-items: center;
        grid-template-columns: 2fr 1fr 1fr 0.5fr;
        grid-template-areas: 'title price duration button';
        gap: $spacer * 4;
      }

      &--titles {
        grid-area: title;
      }

      &--duration {
        grid-area: duration;
        color: get-rgb-color(neutrals-3);
      }

      &--price {
        grid-area: price;
        color: get-rgb-color(neutrals-3);
      }

      &--button {
        grid-area: button;
        justify-self: end;
      }
    }
  }

  &--divider {
    height: 1px;
    width: 100%;
    background-color: get-rgb-color(neutrals-2, 0.5);
  }
}
</style>
