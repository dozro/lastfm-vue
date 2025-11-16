import type { Artist } from "./Artist"

export type Track = {
    name:string,
    mbid:string,
    url:URL,
    date:Date,
    artist:Artist
}