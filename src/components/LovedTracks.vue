<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { getLovedTracks } from '../scripts/lastFmApi'
import { UserLovedTracks }  from '../scripts/index'

import MusicTrack from './MusicTrack.vue'
import SimpleContainer from './helper/SimpleContainer.vue'

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

const lovedTracks = ref<UserLovedTracks>()

watchEffect(async () => {
  if (props.username && props.apiKey) {
    try {
      lovedTracks.value = await getLovedTracks(props.username, props.apiKey)

    } catch (err) {
      console.error('Failed to fetch user avatar:', err)
    }
  }
})
</script>

<template>
  <SimpleContainer v-if="lovedTracks">
    <!-- TODO: Make this an actual component -->
    <h2>Loved Tracks for {{ username }}</h2>
    <ul>
      <li v-for="track in lovedTracks.getLovedTracks()" :key="track.name">
        <MusicTrack :title="track.name" :artist="track.artist.name" :url="track.url"/>
      </li>
    </ul>
  </SimpleContainer>
</template>
../scripts/User/UserTracks