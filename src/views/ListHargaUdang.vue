<script setup lang="ts">
import { computed, onBeforeMount } from 'vue';
import { CBox, CButton } from '@chakra-ui/vue'
import dayjs from 'dayjs';
import FilterShrimpPricesByLocation from '@/components/filter/FilterShrimpPricesByLocation.vue';
import GMaps from '@/components/maps/GMaps.vue';
import { useI18n } from 'vue-i18n-bridge';
import { storeToRefs } from 'pinia';
import { useRegionStore } from '@/stores/region';
import { useShrimpPriceStore } from '@/stores/shrimpPrice';

const { t } = useI18n()
const { selectedRegion, selectRegionIsLoading } = storeToRefs(useRegionStore())
const { price_for_map, shrimp_size } = storeToRefs(useShrimpPriceStore())
const { getShrimpPrices } = useShrimpPriceStore()

onBeforeMount(async () => {
  await getShrimpPrices('')
})

const markerLegends = [
  {
    label: `> 1 ${t('month')}`,
    color: 'bg-$c-black-2',
  },
  {
    label: `> 1 ${t('week')}`,
    color: 'bg-$c-black-blue-1',
  },
  {
    label: t('new'),
    color: 'bg-$brand-base',
  },
]
</script>

<template>
  <main class="container">
    <div class="wrapper-break bg-#fff">
      <filter-shrimp-prices-by-location></filter-shrimp-prices-by-location>
    </div>
    <section class="wrapper my-.875rem">
      <h2 class="sr-only">{{ $t('promotionalContent') }}</h2>
      <div class="flex flex-col md:flex-row gap-.875rem">
        <a href="https://api.whatsapp.com/send?phone=081325514194&amp;text=Halo%20JALA,%20saya%20ingin%20melakukan%20uji%20penyakit%20udang"
          target="_blank"><img src="https://drive.google.com/uc?id=15_wFMILzgqt-NZ5A_lxqlonQVYSNjw2_&amp;export=media"
            alt="box-img"
            title="Uji Penyakit Udang Anda di LabUdang Hubungi tim Jala untuk menguji penyakit udang Anda di LabUdang Jala"
            class="img-responsive" style="width: 100%;"></a>
        <a href="https://api.whatsapp.com/send?phone=081325514194&amp;text=Halo%20JALA,%20saya%20berencana%20melakukan%20panen%20udang"
          target="_blank"><img src="https://drive.google.com/uc?id=1YIyOuyXFoJ5e6FFtRKnnX_iKUuRBk7nX&amp;export=media"
            alt="box-img" title="Jala Harvest Shrimp harvest is paid fast with JALA Harvest, harvest-pay!"
            class="img-responsive" style="width: 100%;"></a>
      </div>
    </section>
    <div class="wrapper flex flex-col md:flex-row gap-.875rem">
      <section class="w-full h-max">
        <c-box border-width="1px" border-color="var(--color-border)" border-radius="0.5rem" overflow="hidden">
          <c-box bg="var(--c-white)" class="px-1rem pt-1rem pb-.75rem">
            <h2 class="capitalize font-700">{{ $t('shrimpPrizeMapTitle') }} {{ shrimp_size }}</h2>
          </c-box>
          <g-maps :locations="price_for_map" mapHeight="h-298px">
          </g-maps>
          <c-box bg="var(--c-white)" p="1rem" class="flex gap-1rem justify-center">
            <div v-for="(cat, index) in markerLegends" :key="index" class="flex gap-.5rem items-center">
              <div :class="`${cat.color} w-20px h-20px`"></div>
              <div class="capitalize text-.875rem">{{ cat.label }}</div>
            </div>
          </c-box>
        </c-box>
      </section>
      <section class="bg-white w-full h-400px"></section>
    </div>
  </main>
</template>