<script setup lang="ts">
const props = defineProps<{
  title: string,
  artist: string,
  url: string,
}>()
</script>

<template>
    <div class="track-container">

    </div>
</template>

<style scoped lang="scss">
@import "tailwindcss";
.track-container{
    border:1pt
}
</style>