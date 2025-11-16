import type { Artist } from "./Artist.ts"
import { Image } from "./Image.ts"

export type Track = {
    name:string,
    mbid:string,
    url:URL,
    date:Date,
    artist:Artist
    image:Array<Image>
}