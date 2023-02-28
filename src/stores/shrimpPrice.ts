import { ref } from 'vue'
import { defineStore } from 'pinia'
import { RepositoryFactory } from '@/repositories/RepositoryFactory'
import dayjs from 'dayjs'

export const useShrimpPriceStore = defineStore('shrimpPrice', () => {
  const PricesRepository = RepositoryFactory.get('prices')
  const price_for_map = ref<MapMarker[]>([])
  const price_for_trend = ref<PriceTrend[]>([])
  const price_for_list = ref<PriceList[]>([])
  const shrimp_size = ref<number>(100)
  const shrimpPricesIsLoading = ref(false)
  const rawData = ref()
  
  const switchIsLoading = (state: boolean) => {
    shrimpPricesIsLoading.value = state
  }

  const setPriceMap = () => {
    rawData.value.forEach((item: ShrimpPricesRaw) => {
      const id = item.id
      const name = item.region.full_name
      const data = {
        priceLabel: item[`size_${shrimp_size.value}` as keyof ShrimpPricesRaw],
        date: item.date,
        dateCategory: {
          thisWeek: dayjs(new Date).diff(item.date, 'week') <= 1 ? true : false,
          olderThanAWeek: dayjs(new Date).diff(item.date, 'month') <= 1 ? true : false,
          olderThanAMonth: dayjs(new Date).diff(item.date, 'month') > 1 ? true : false,
        }
      }
      const coordinate = {
        lat: parseFloat(item.region.latitude),
        lng: parseFloat(item.region.longitude),
      }
      price_for_map.value.push({id, name, data, coordinate})
    })
  }

  const getShrimpPrices = async (query: string) => {
    try {
      switchIsLoading(true)
      const response = await PricesRepository.get(query)
      rawData.value = response.data
      setPriceMap()
    } catch (error) {
      console.log(error)
    }
    switchIsLoading(false)
  }

  return {
    rawData,
    price_for_map,
    price_for_trend,
    price_for_list,
    shrimp_size,
    getShrimpPrices,
  }
})