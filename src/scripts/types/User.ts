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
type Tracks = {
    track:Array<Track>
}
export interface UserGetLovedTracks{
    lovedtracks:Tracks
}
export interface UserGetRecentTracks{
    recenttracks:Tracks
}