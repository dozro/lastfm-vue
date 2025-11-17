<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { getRecentTracks } from '../scripts/lastFmApi';
import { UserRecentTracks } from '../scripts/index';
import type { Track } from '../scripts/types/Track'

import SimpleContainer from './helper/SimpleContainer.vue'
import MusicTrack from './MusicTrack.vue'

const props = defineProps<{
  /**
   * The username you want to look up
   */
  username: string,
  /**
   * your api-key
   */
  apiKey: string,
}>()

const tracks = ref<UserRecentTracks>()
const mostrecentTrack = ref<Track>()

watchEffect(async () => {
  if (props.username && props.apiKey) {
    try {
      let urt=  await getRecentTracks(props.username, props.apiKey)
      tracks.value = urt
      if(urt.getMostRecentTrack() === undefined)
        throw new Error("value is undefined");
      mostrecentTrack.value = urt.getMostRecentTrack()
    } catch (err) {
      console.error('Failed to fetch user avatar:', err)
    }
  }
})
</script>

<template>
  <SimpleContainer v-if="tracks">
    <p>listening now <font-awesome-icon :icon="['fas', 'headphones']" class="text-gray-500" height="15pt"/></p>
    <MusicTrack :artist="mostrecentTrack!.artist.name" :url="mostrecentTrack!.url" :title="mostrecentTrack!.name"/>
  </SimpleContainer>
</template>