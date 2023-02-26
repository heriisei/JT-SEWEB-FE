<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue';
import { RepositoryFactory } from '@/repositories/RepositoryFactory'
//@ts-ignore
import Multiselect from '@vueform/multiselect/dist/multiselect.vue2.js'
import "@vueform/multiselect/themes/default.css"


const RegionsRepository = RepositoryFactory.get('regions')
const allRegions = ref<RegionListApi>({})
const selectedRegion = ref()
const selectRegionIsLoading = ref(false)

onBeforeMount(async () => {
  try {
    allRegions.value = await RegionsRepository.get()
  } catch (error) {
    console.log(error)
  }
})

const searchRegions = async (query: string) => {
  selectRegionIsLoading.value = true
  allRegions.value = await RegionsRepository.get(query)
  selectRegionIsLoading.value = false
  return allRegions.value.data
}

const onOpen = (select$: Record<string, any>) => {
  if (select$.noOptions) {
    select$.resolveOptions()
  }
}
</script>

<template>
  <div>
    <Multiselect v-model="selectedRegion" placeholder="Pilih lokasi" :filter-results="false" :min-chars="0"
      :resolve-on-load="false" :delay="0" :searchable="true" :object="true" trackBy="id" label="full_name" valueProp="id"
      @open="onOpen" :options="searchRegions" :loading="selectRegionIsLoading" noResultsText="Lokasi tidak ditemukan" />
    <pre class="language-json"><code>{{ selectedRegion }}</code></pre>
  </div>
</template>

<!-- <style>
.v-select {
  /* Font */
  --vs-font-size: 0.875rem;
  --vs-line-height: 1.4;

  /* Borders */
  --vs-border-color: var(--border-color);
  --vs-border-width: 1px;
  --vs-border-style: solid;
  --vs-border-radius: 1px;

  /* Actions: house the component controls */
  --vs-actions-padding: 4px 12px 0 3px;
}
</style> -->