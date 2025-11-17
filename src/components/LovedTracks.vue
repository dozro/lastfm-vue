<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { getLovedTracks } from '../scripts/lastFmApi'
import { UserLovedTracks }  from '../scripts/index'

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
  <div v-if="lovedTracks">
    <!-- TODO: Make this an actual component -->
    <h2>Loved Tracks for {{ username }}</h2>
    <ul>
      <li v-for="track in lovedTracks.getLovedTracks()" :key="track.name">
        {{ track.name }} by {{ track.artist.name }}
      </li>
    </ul>
  </div>
</template>
../scripts/User/UserTracks