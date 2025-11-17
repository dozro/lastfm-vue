import type { Artist } from "./Artist"
import { Image } from "./Image"

export type Track = {
    name:string,
    mbid:string,
    url:string,
    date:Date,
    artist:Artist
    image:Array<Image>
}

export function convertTrackXmlToTrack(input:TrackXML):Track{
    if(input === undefined || input.name === undefined || input.artist === undefined){
        throw new Error("undefined values");
    }
    return {
        name: input.name,
        mbid: input.mbid,
        url: input.url,
        date: new Date(parseInt(input.date._uts, 10) * 1000),
        image: input.image,
        artist: {
            name: input.artist.__text,
            mbid: input.artist._mbid,
        },
    };
}

export type TrackXML =  {
    artist:     {
         _mbid:  string;
         __text: string;
    };
    name:       string;
    streamable: string;
    mbid:       string;
    album:      {
         _mbid:  string;
         __text: string;
    };
    url:        string;
    image:      Image[];
    date:       {
        _uts:   string;
        __text: string;
    };
}