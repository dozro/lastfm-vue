<script setup lang="ts">
import { watchEffect, ref } from 'vue'

import { getRecentTracks } from "../scripts/lastFmApi"
import { UserRecentTracks } from "../scripts/UserTracks"
import type { Track } from "../scripts/types/Track"

const props = defineProps<{
  username: string
}>()

const tracks = ref<UserRecentTracks>()
const currentSongName = ref<Track>()


watchEffect(async () => {
  if (props.username) {
    try {
      tracks.value = await getRecentTracks(props.username)
      if(tracks.value.getMostRecentTrack() !== undefined){
        currentSongName.value = tracks.value.getMostRecentTrack()
      }
    } catch (err) {
      console.error('Failed to fetch loved tracks:', err)
    }
  }
})
</script>

<template>
    <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <p>currently listening to {{currentSongName}}</p>
    </div>
</template>