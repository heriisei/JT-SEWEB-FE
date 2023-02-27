<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue';
//@ts-ignore
import Multiselect from '@vueform/multiselect/dist/multiselect.vue2.js'
import "@vueform/multiselect/themes/default.css"
import { storeToRefs } from 'pinia';
import { useRegionStore } from '@/stores/region';

const { allRegions, selectedRegion, selectRegionIsLoading } = storeToRefs(useRegionStore())
const { getRegions } = useRegionStore()
const optionIsOpen = ref(false)

onBeforeMount(async () => {
  getRegions('')
})

const searchRegions = async (query: string) => {
  await getRegions(query)
  return allRegions.value.data
}

const onOpen = (select$: Record<string, any>) => {
  optionIsOpen.value = true
  if (select$.noOptions) {
    select$.resolveOptions()
  }
}
const onClose = (select$: Record<string, any>) => {
  optionIsOpen.value = false
}
</script>

<template>
  <div>
    <Multiselect v-model="selectedRegion" :placeholder="$t('locationChoose')" :filter-results="false" :min-chars="0"
      :resolve-on-load="false" :delay="0" :searchable="true" :object="true" trackBy="id" label="full_name" valueProp="id"
      :options="searchRegions" :loading="selectRegionIsLoading" @open="onOpen" @close="onClose"
      :noOptionsText="$t('locationNA')" :noResultsText="$t('locationNA')" :classes="{
        container: 'multiselect min-h-auto',
        wrapper: 'multiselect-wrapper h-32px min-h-auto',
        search: 'multiselect-search pl-.75rem pr-2rem py-6px rtl:(pl-2rem pr-.75) lh-140% text-.875rem! h-32px',
        spinner: 'multiselect-spinner mr-2rem',
        clear: 'multiselect-clear pr-0 mr-2rem',
        clearIcon: 'multiselect-clear-icon w-20px',
        placeholder: 'multiselect-placeholder pl-.75rem',
        optionSelected: 'is-selected bg-$brand-base!',
        optionSelectedPointed: 'is-selected is-pointed bg-$brand-darkest!',
        option: 'multiselect-option text-.875rem',
        containerActive: '',
      }">
      <template #caret>
        <svg data-chakra-component="CIcon" viewBox="0 0 24 24" role="presentation" aria-hidden="true"
          :class="`caret ${optionIsOpen ? 'is-open' : ''}`">
          <path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
        </svg>
      </template>
    </Multiselect>
  </div>
</template>

<style>
.caret {
  overflow: hidden;
  width: var(--chakra-sizes-5);
  height: var(--chakra-sizes-5);
  display: inline-block;
  vertical-align: middle;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: absolute;
  right: 0.5rem;
  transform: rotate(0deg);
  transition: transform .3s;
}

.caret.is-open {
  transform: rotate(180deg);
}

.multiselect {
  --ms-font-size: 0.875rem;
  --ms-line-height: 1.4;
  --ms-border-color: var(--color-border);
  --ms-border-width: 1px;
  --ms-border-color-active: var(--brand-main);
  --ms-border-width-active: 1px;
  --ms-radius: 1px;
  --ms-placeholder-color: var(--color-text);
}

.multiselect-search:focus,
.multiselect-search[data-focus] {
  border-color: var(--brand-base);
  box-shadow: 0 0 0 2px var(--brand-base);
}
</style>