// Project Gowers (part of Project Angus)

import ky from 'ky';
import { apiRootURL, getHttpHeaders } from './baseI.ts';
import type { UserGetLovedTracks } from './types/User.ts';
import type { Track } from "./types/Track.ts"

export class UserLovedTracks{
    private username:string
    private apikey:string
    private lovedTracks!:Array<Track>
    constructor(username:string, apikey:string){
        this.username = username
        this.apikey = apikey
        this.fetchData()
    }
    public getLovedTracks():Array<Track>{
        return this.lovedTracks
    }
    public async fetchData():Promise<void> {
        const resp = await ky.get(
            `${apiRootURL}?method=user.getLovedTracks&user=${this.username}&api_key=${this.apikey}&format=json`,
            {
                method: "get",
                headers: getHttpHeaders()
            },
        ).json()
        const respAs:UserGetLovedTracks = (resp as UserGetLovedTracks)
        this.lovedTracks = respAs.track
    }
}