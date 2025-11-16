// Project Gowers (part of Project Angus)

import ky from 'ky';
import {UserInfo} from "./UserInfo";
import { apiRootURL, getHttpHeaders } from './baseI';
import { UserLovedTracks, UserRecentTracks } from './UserTracks';

const apiKey="abc"

export async function getUser(username:string):Promise<UserInfo>{
    if(apiKey === undefined){
        throw new Error("Api Key is undefined")
    }
    const u = await UserInfo.create(username, apiKey)
    return u;
}

export async function getLovedTracks(username:string):Promise<UserLovedTracks>{
    if(apiKey === undefined){
        throw new Error("Api Key is undefined")
    }
    const u = await UserLovedTracks.create(username, apiKey)
    return u;
}

export async function getRecentTracks(username:string):Promise<UserRecentTracks>{
    if(apiKey === undefined){
        throw new Error("Api Key is undefined")
    }
    const u = await UserRecentTracks.create(username, apiKey)
    return u;
}
