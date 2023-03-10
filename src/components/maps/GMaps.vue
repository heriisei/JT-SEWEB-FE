<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Loader } from '@googlemaps/js-api-loader'
import { useI18n } from 'vue-i18n-bridge';
import router from '@/router';

const { n } = useI18n()

const props = defineProps<{
  locations: MapMarker[];
  mapHeight: string;
}>()

type Libraries = ("drawing" | "geometry" | "localContext" | "marker" | "places" | "visualization")[];
const apiOptions = {
  apiKey: `${import.meta.env.VITE_GMAPS_API_KEY ? import.meta.env.VITE_GMAPS_API_KEY : ''}`,
  version: 'beta',
  libraries: ['marker'] as Libraries,
}
const map = ref()
const loader = new Loader(apiOptions);

loader.load().then(() => {
  // console.log('Maps JS API Loaded');
  displayMap()
  addMarkers()
});

const displayMap = () => {
  const mapOptions = {
    center: props.locations[0].coordinate,
    zoom: 6,
    mapId: 'DEMO_MAP_ID'
  };
  const mapEl = document.querySelector('#map')
  mapEl?.classList.add(props.mapHeight)
  //@ts-ignore
  map.value = new google.maps.Map(mapEl, mapOptions);
  return map.value
}

const addMarkers = () => {
  const markers: Record<string, any> = []
  props.locations.forEach((loc, index: number) => {
    // Create advance map marker with HTML element
    const priceMarker = document.createElement('div');
    priceMarker.className = `price-marker ${loc.data.dateCategory.thisWeek
      ? 'new'
      : loc.data.dateCategory.olderThanAWeek
        ? 'older-week'
        : loc.data.dateCategory.olderThanAMonth
          ? 'older-month'
          : 'older-month'
      }`;
    priceMarker.textContent = n(loc.data.priceLabel, 'currency');

    const markerOptions = {
      map: map.value,
      position: props.locations[index].coordinate,
      content: priceMarker,
    }
    //@ts-ignore
    const marker: Record<string, any> = new google.maps.marker.AdvancedMarkerView(markerOptions)

    marker.addListener('click', () => {
      router.push(`/harga_udang/${loc.id}`)
    });
    markers.push(marker)
  })
  return markers
}

onMounted(() => {
  // displayMap()
})
</script>
<template>
  <div>
    <div id="map" ref="mapEl"></div>
  </div>
</template>

<style scoped>
#map {
  width: 100%;
}
</style>

<style>
.price-marker {
  border-radius: 0.25rem;
  color: #FFFFFF;
  font-size: 14px;
  padding: 0.325rem 0.75rem;
  position: relative;
}

.price-marker.new {
  background-color: var(--brand-base);
}

.price-marker.older-week {
  background-color: var(--c-black-blue-1);
}

.price-marker.older-month {
  background-color: var(--c-black-2);
}

.price-marker::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%, 0);
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
}

.price-marker.new::after {
  border-top: 8px solid var(--brand-base);
}

.price-marker.older-week::after {
  border-top: 8px solid var(--c-black-blue-1);
}

.price-marker.older-month::after {
  border-top: 8px solid var(--c-black-2);
}

[class$=api-load-alpha-banner] {
  display: none;
}
</style>