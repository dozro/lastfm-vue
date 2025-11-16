// Project Gowers (part of Project Angus)

import ky from 'ky';
import { apiRootURL, getHttpHeaders } from './baseI.ts';
import type { UserGetRecentTracks, UserGetLovedTracks } from './types/User.ts';
import type { Track } from "./types/Track.ts"

export class UserLovedTracks{
    private username:string
    private apikey:string
    private lovedTracks!:Array<Track>
    private constructor(username:string, apikey:string){
        this.username = username
        this.apikey = apikey
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
        this.lovedTracks = respAs.lovedtracks.track
    }
    public static async create(username: string, apikey: string):Promise<UserLovedTracks> {
        const instance = new UserLovedTracks(username, apikey)
        await instance.fetchData()
        return instance
    }
}

export class UserRecentTracks{
    private username:string
    private apikey:string
    private recentTracks!:Array<Track>
    private constructor(username:string, apikey:string){
        this.username = username
        this.apikey = apikey
    }
    public getRecentTracks():Array<Track>{
        return this.recentTracks
    }
    public getMostRecentTrack():Track|undefined{
        return this.recentTracks[0];
    }
    public async fetchData():Promise<void> {
        const resp = await ky.get(
            `${apiRootURL}?method=user.getrecenttracks&user=${this.username}&api_key=${this.apikey}&format=json`,
            {
                method: "get",
                headers: getHttpHeaders()
            },
        ).json()
        const respAs:UserGetRecentTracks = (resp as UserGetRecentTracks)
        this.recentTracks = respAs.recenttracks.track
    }
    public static async create(username: string, apikey: string):Promise<UserRecentTracks> {
        const instance = new UserRecentTracks(username, apikey)
        await instance.fetchData()
        return instance
    }
}