<script setup lang="ts">
import { watchEffect, ref } from 'vue'

import SimpleContainer from './helper/SimpleContainer.vue'

import {getUser} from "../scripts/lastFmApi"
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
    <SimpleContainer>
        <img class="size-12 shrink-0" :src="avatarUrl" alt="Avatar of User" />  
        <div>    
            <div class="text-xl font-medium text-black dark:text-white">
                <font-awesome-icon :icon="['fas', 'user']" height="15pt"/><a :href="url">{{ fullName }}</a>
            </div>    
            <p class="text-gray-500 dark:text-gray-400"><a href="https://last.fm">last.fm</a> user</p>  
        </div>
    </SimpleContainer>
</template>
