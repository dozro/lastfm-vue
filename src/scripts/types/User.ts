import type { Track } from "./Track.ts"

export interface UserGetInfoType{
    id:number,
    name:string,
    realname:string,
    url:URL,
    image:URL,
    country:string,
    age:number,
    gender:string,
    subscriber:number,
    playcount:number,
    playlists:number,
    bootstrap:number,
}
export interface UserGetLovedTracks{
    track: Array<Track>
}