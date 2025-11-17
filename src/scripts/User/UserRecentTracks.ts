import ky from 'ky';
import { apiRootURL, getHttpHeaders } from '../baseI';
import type { UserGetRecentTracks } from '../types/User';
import type { Track } from "../types/Track"

export default class UserRecentTracks{
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