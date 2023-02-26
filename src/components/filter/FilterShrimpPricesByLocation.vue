<script setup lang="ts">
import { ref } from 'vue';
import FieldSelectSearch from '../fields/FieldSelectSearch.vue';
import { CSelect, CGrid, CGridItem } from '@chakra-ui/vue'

const sizesOption = Array.from({ length: (200 - 20) / 10 + 1 }, (_, i) => i * 10 + 20);
const sizesSelected = ref('100')
const speciesOption = ['vannamei']
const speciesSelected = ref(speciesOption[0])
</script>

<template>
  <section class="wrapper bg-#fff px-.625rem lg:px-$padding-x-desktop py-.625rem flex flex gap-.625rem items-center">
    <h2 class="hidden lg:block text-13px font-700">Filter</h2>
    <c-grid :template-rows="['repeat(2, 1fr)', null, 'repeat(1, 1fr)']" :template-columns="['repeat(12, 1fr)']" gap="10px"
      class="w-full">
      <c-grid-item :col-span="['12', null, '6']">
        <FieldSelectSearch></FieldSelectSearch>
      </c-grid-item>
      <c-grid-item :col-span="['5', null, '2']">
        <c-select size="sm" v-model="sizesSelected" height="34px">
          <option v-for="(opt, index) in sizesOption" :key="index" :value="opt">{{ `Size ${opt}` }}</option>
        </c-select>
      </c-grid-item>
      <c-grid-item :col-span="['7', null, '2']">
        <c-select size="sm" v-model="speciesSelected" height="34px">
          <option v-for="(it, index) in speciesOption" :key="index" :value="it">{{ it.charAt(0).toUpperCase() +
            it.slice(1)
          }}</option>
        </c-select>
      </c-grid-item>
    </c-grid>
  </section>
</template>