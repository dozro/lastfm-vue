import { convertTrackXmlToTrack, type Track } from "./Track"
import type { TrackXML } from "./Track";

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

export function convertUserGetRecentTracksXMLtoUserGetRecentTracks(input:UserGetRecentTracksXML):UserGetRecentTracks{
    let tracks:Array<Track> = new Array<Track>(input.lfm.recenttracks.track.length)
    for(let i = 0; i < input.lfm.recenttracks.track.length; i++){
        tracks[i] = convertTrackXmlToTrack(input.lfm.recenttracks.track[i])
    }
    return {
        recenttracks: {
            track: tracks,
        },
    }
}

export interface UserGetRecentTracksXML {
    lfm: {
        recenttracks: {
            track:       TrackXML[];
            _user:       string;
            _page:       string;
            _perPage:    string;
            _totalPages: string;
            _total:      string;
        };
        _status:      string;
    };
}