import ky from 'ky';
import { XMLParser } from "fast-xml-parser";
import { apiRootURL, getHttpHeaders } from '../baseI';
import { convertUserGetRecentTracksXMLtoUserGetRecentTracks, type UserGetRecentTracks, type UserGetRecentTracksXML } from '../types/User';
import { convertTrackXmlToTrack, type Track } from "../types/Track"

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
            `${apiRootURL}?method=user.getrecenttracks&user=${this.username}&api_key=${this.apikey}&format=xml`,
            {
                method: "get",
                headers: getHttpHeaders()
            },
        ).text()

        let jObj = UserRecentTracks.xmlParser.parse(resp)
        const respAsXML = (jObj as UserGetRecentTracksXML)
        const respAs = convertUserGetRecentTracksXMLtoUserGetRecentTracks(respAsXML)
        this.recentTracks = respAs.recenttracks.track
    }
    public static async create(username: string, apikey: string):Promise<UserRecentTracks> {
        const instance = new UserRecentTracks(username, apikey)
        await instance.fetchData()
        return instance
    }
    private static xmlParser:XMLParser = new XMLParser();
}