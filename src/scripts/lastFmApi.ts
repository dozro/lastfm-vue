// Project Gowers (part of Project Angus)

import UserInfo from "./User/UserInfo";
import UserLovedTracks from './User/UserLovedTracks';
import UserRecentTracks from './User/UserRecentTracks';

export async function getUser(username:string, apiKey: string):Promise<UserInfo>{
    if(apiKey === undefined){
        throw new Error("Api Key is undefined")
    }
    const u = await UserInfo.create(username, apiKey)
    return u;
}

export async function getLovedTracks(username:string, apiKey: string):Promise<UserLovedTracks>{
    if(apiKey === undefined){
        throw new Error("Api Key is undefined")
    }
    const u = await UserLovedTracks.create(username, apiKey)
    return u;
}

export async function getRecentTracks(username:string, apiKey: string):Promise<UserRecentTracks>{
    if(apiKey === undefined){
        throw new Error("Api Key is undefined")
    }
    const u = await UserRecentTracks.create(username, apiKey)
    return u;
}
