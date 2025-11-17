<script setup lang="ts">
import { watchEffect, ref } from 'vue'

import {getUser} from "../scripts/lastFmApi"
const props = defineProps<{
  username: string,
  apiKey: string,
}>()
const avatarUrl = ref<string>()
const fullName = ref<string>()
const url = ref<string>()

watchEffect(async () => {
  if (props.username && props.apiKey) {
    try {
      const user = await getUser(props.username, props.apiKey)
      avatarUrl.value = user.getAvatarUrl().toString()
      fullName.value = user.getName()
      url.value = user.getUserUrl().toString()
    } catch (err) {
      console.error('Failed to fetch user avatar:', err)
      avatarUrl.value = "https://example.org"
      if (fullName.value === undefined)
        fullName.value = "Unknown"
    }
  }
})
</script>

<template>
    <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <img class="size-12 shrink-0" :src="avatarUrl" alt="Avatar of User" />  
        <div>    
            <div class="text-xl font-medium text-black dark:text-white">
                <a :href="url">{{ fullName }}</a>
            </div>    
            <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>  
        </div>
    </div>
</template>
