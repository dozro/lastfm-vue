<script setup lang="ts">
import { watchEffect, ref } from 'vue'

import UserInnerCard from './helper/UserInnerCard.vue'

import {getUser} from "../scripts/lastFmApi"
import UserInnerCard from './helper/UserInnerCard.vue';
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
const scrobCount = ref<number>()

watchEffect(async () => {
  if (props.username && props.apiKey) {
    try {
      const user = await getUser(props.username, props.apiKey)
      avatarUrl.value = user.getAvatarUrl().toString()
      fullName.value = user.getName()
      url.value = user.getUserUrl().toString()
      scrobCount.value = user.getPlayCount()
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
    <UserInnerCard :name="fullName" :avatarsrc="avatarUrl" :profile-url="url" :scrobble-count="scrobCount"/>
</template>
