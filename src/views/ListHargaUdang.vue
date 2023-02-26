<script setup lang="ts">
import { CBox, CButton } from '@chakra-ui/vue'
import FilterShrimpPricesByLocation from '@/components/filter/FilterShrimpPricesByLocation.vue';
import dayjs from 'dayjs';
</script>

<template>
  <main class="container">
    <div class="wrapper-break bg-#fff">
      <filter-shrimp-prices-by-location></filter-shrimp-prices-by-location>
    </div>
    <section class="wrapper">
      <h2 class="sr-only">Promotional content</h2>
      <div class="flex flex-col md:flex-row gap-.875rem">
        <a href="https://api.whatsapp.com/send?phone=081325514194&amp;text=Halo%20JALA,%20saya%20ingin%20melakukan%20uji%20penyakit%20udang"
          target="_blank"><img src="https://drive.google.com/uc?id=15_wFMILzgqt-NZ5A_lxqlonQVYSNjw2_&amp;export=media"
            alt="box-img" title="Uji Penyakit Udang Anda di LabUdang
      Hubungi tim Jala untuk menguji penyakit udang Anda di LabUdang Jala" class="img-responsive m-t-sm"
            style="width: 100%;"></a>
        <a href="https://api.whatsapp.com/send?phone=081325514194&amp;text=Halo%20JALA,%20saya%20berencana%20melakukan%20panen%20udang"
          target="_blank"><img src="https://drive.google.com/uc?id=1YIyOuyXFoJ5e6FFtRKnnX_iKUuRBk7nX&amp;export=media"
            alt="box-img" title="Jala Harvest
      Shrimp harvest is paid fast with JALA Harvest, harvest-pay!" class="img-responsive m-t-sm"
            style="width: 100%;"></a>
      </div>
    </section>
  </main>
</template>