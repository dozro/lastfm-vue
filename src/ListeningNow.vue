<script setup lang="ts">

import {getUser} from "./scripts/lastFmApi"

getUser("ryelin")

function getCurrentSong(){
    return "lastfm.stream(username)";
}
</script>

<template>
    <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <p>currently listening to {{getCurrentSong()}}</p>
    </div>
</template>