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
  </main>
</template>