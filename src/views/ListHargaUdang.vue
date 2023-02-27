<script setup lang="ts">
import { computed } from 'vue';
import { CBox, CButton } from '@chakra-ui/vue'
import dayjs from 'dayjs';
import FilterShrimpPricesByLocation from '@/components/filter/FilterShrimpPricesByLocation.vue';
import GMaps from '@/components/maps/GMaps.vue';
</script>

<template>
  <main class="container">
    <div class="wrapper-break bg-#fff">
      <filter-shrimp-prices-by-location></filter-shrimp-prices-by-location>
    </div>
    <section class="wrapper my-.875rem">
      <h2 class="sr-only">Promotional content</h2>
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
    <section class="wrapper">
      <h2>persebaran harga udang size 100</h2>
      <g-maps :locations="[
        {
          name: 'operaHouse',
          coordinate: { lat: -33.8567844, lng: 151.213108 }
        },
        {
          name: 'gaZoo',
          coordinate: { lat: -33.8472767, lng: 151.2188164 }
        },
        {
          name: 'manlyBeach',
          coordinate: { lat: -33.8209738, lng: 151.2563253 }
        }
      ]">
      </g-maps>
    </section>
  </main>
</template>