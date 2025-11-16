import type { Artist } from "./Artist"
import { Image } from "./Image"

export type Track = {
    name:string,
    mbid:string,
    url:URL,
    date:Date,
    artist:Artist
    image:Array<Image>
}