<script setup lang="ts">
import { ref } from 'vue';
import { CBox, CButton } from '@chakra-ui/vue'
import Multiselect from 'vue-multiselect'

const value = ref('')
const options = ['Select option', 'options', 'selected', 'multiple', 'label', 'searchable', 'clearOnSelect', 'hideSelected', 'maxHeight', 'allowEmpty', 'showLabels', 'onChange', 'touched']
</script>

<template>
  <main>
    <c-box>
      <c-button>
        Chakra Consumed! ⚡️
      </c-button>
    </c-box>
    <div>
      <label class="typo__label">Single select</label>
      <multiselect v-model="value" :options="options" :searchable="false" :close-on-select="false" :show-labels="false"
        placeholder="Pick a value"></multiselect>
      <pre class="language-json"><code>{{ value }}</code></pre>
    </div>
  </main>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>