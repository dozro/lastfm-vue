<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const props = defineProps<{
  title: string,
  artist: string,
  url: string,
}>()
</script>

<template>
  <div class="track-container shadow-sm rounded-md bg-white/70 backdrop-blur-sm flex flex-col gap-2 border border-gray-200">
    <p class="track-artist flex items-center gap-2 text-gray-700 font-medium">
      <font-awesome-icon :icon="['fas', 'microphone-lines']" class="text-gray-500" height="15pt"/>
      <span class="track-artist-name" :innerText="artist">meow</span>
    </p>

    <p class="track-title flex items-center gap-2 text-gray-600">
      <font-awesome-icon :icon="['fas', 'music']" class="text-gray-500" height="15pt"/>
      <span class="track-title-name" :innerText="title">2</span>
    </p>
  </div>
</template>

<style scoped lang="scss">
@use "tailwindcss";
.track-container{
  border:1pt
}
</style>