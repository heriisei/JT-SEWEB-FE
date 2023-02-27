import { ref } from 'vue'
import { defineStore } from 'pinia'
import { RepositoryFactory } from '@/repositories/RepositoryFactory'

export const useRegionStore = defineStore('region', () => {
  const RegionsRepository = RepositoryFactory.get('regions')
  const allRegions = ref<RegionListApi>({})
  const selectedRegion = ref<Record<string, any>>()
  const selectRegionIsLoading = ref(false)

  const switchIsLoading = (state: boolean) => {
    selectRegionIsLoading.value = state
  } 

  const getRegions = async (query: string) => {
    try {
      switchIsLoading(true)
      allRegions.value = await RegionsRepository.get(query)
    } catch (error) {
      console.log(error)
    }
    switchIsLoading(false)
  }

  return {
    allRegions,
    selectedRegion,
    selectRegionIsLoading,
    getRegions,
    switchIsLoading,
  }
})
