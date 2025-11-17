<script setup lang="ts">
import SimpleContainer from './SimpleContainer.vue';

const props = defineProps<{
  name?: string,
  avatarsrc?: string,
  profileUrl?: string,
  scrobbleCount?: number,
}>()
</script>

<template lang="pug">
SimpleContainer
  img.size-12.shrink-0(:src="avatarsrc")
  div
    div(class="text-xl font-medium text-black dark:text-white")
     p(class="text-gray-500 dark:text-gray-400")
        font-awesome-icon(:icon="['fas', 'user']" height="15pt")
        a(:href="profileUrl")
            | {{ name }}
    p(class="text-gray-500 dark:text-gray-400")
     font-awesome-icon(:icon="['fas', 'music']" height="15pt")
     span {{ scrobbleCount }} Scrobbles
    p(class="text-gray-500 dark:text-gray-400")
      a(href="https://last.fm") last.fm
      span user
</template>