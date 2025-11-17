import { default as ListeningNow } from "./ListeningNow.vue";
import { default as LovedTracks } from "./LovedTracks.vue";
import { default as UserCard  } from "./UserCard.vue";
import { default as fas} from "../plugins/fontawesome"
import { App } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

fas();

export{
    ListeningNow,
    UserCard,
    LovedTracks,
}

export function install(app:App){
    app.component('font-awesome-icon', FontAwesomeIcon);
    app.component('lastfm-now-listening', ListeningNow);
    app.component('lastfm-user-card', UserCard);
    app.component('lastfm-loved-tracks', LovedTracks);
}

export default {
    install,
    ListeningNow,
    UserCard,
    LovedTracks,
}

export const vuelib = {
    install,
    ListeningNow,
    UserCard,
    LovedTracks,
}