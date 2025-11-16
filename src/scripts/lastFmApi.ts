// Project Gowers (part of Project Angus)

import ky from 'ky';
import {UserInfo} from "./UserInfo";
import { apiRootURL, getHttpHeaders } from './baseI';
import { UserLovedTracks } from './UserTracks';

const apiKey=process.env.LASTFM_API_KEY

export function getUser(username:string):UserInfo{
    if(apiKey === undefined){
        throw new Error("Api Key is undefined")
    }
    const u = new UserInfo(username, apiKey)
    u.fetchData()
    return u;
}

export function getLovedTracks(username:string):UserLovedTracks{
    if(apiKey === undefined){
        throw new Error("Api Key is undefined")
    }
    const u = new UserLovedTracks(username, apiKey)
    return u;
}
