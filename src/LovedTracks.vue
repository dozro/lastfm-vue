<script setup lang="ts">
import { watchEffect, ref } from 'vue'

import {getLovedTracks} from "./scripts/lastFmApi"
import { UserLovedTracks } from "./scripts/UserTracks"

const props = defineProps<{
  username: string
}>()

const lovedTracks = ref<UserLovedTracks>()


watchEffect(async () => {
  if (props.username) {
    try {
      lovedTracks.value = await getLovedTracks(props.username)
    } catch (err) {
      console.error('Failed to fetch loved tracks:', err)
    }
  }
})
</script>

<template>
     <ul v-if="lovedTracks">
      <li v-for="track in lovedTracks.getLovedTracks" :key="track.name">
        {{ track.name }} – {{ track.artist }}
      </li>
    </ul>
    <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
    </div>
</template>