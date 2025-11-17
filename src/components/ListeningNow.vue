<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { getRecentTracks } from '../scripts/lastFmApi';
import { UserRecentTracks } from '../scripts/index';

import SimpleContainer from './helper/SimpleContainer.vue'

const props = defineProps<{
  username: string,
  apiKey: string,
}>()

const tracks = ref<UserRecentTracks>()

watchEffect(async () => {
  if (props.username && props.apiKey) {
    try {
      tracks.value = await getRecentTracks(props.username, props.apiKey)
    } catch (err) {
      console.error('Failed to fetch user avatar:', err)
    }
  }
})
</script>

<template>
  <SimpleContainer v-if="tracks">
    <!-- TODO: Make this an actual component -->
    <h2>Recent Tracks for {{ username }}</h2>
    <ul>
      <li v-for="track in tracks.getRecentTracks()" :key="track.name">
        {{ track.name }} by {{ track.artist }}
      </li>
    </ul>
  </SimpleContainer>
</template>