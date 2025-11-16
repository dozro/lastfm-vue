// Project Gowers (part of Project Angus)

import ky from 'ky';
import { apiRootURL, getHttpHeaders } from './baseI.ts';
import type { UserGetInfoType } from './types/User.ts';

export class UserInfo{
    private username:string
    private apikey:string
    private name!: string;
    private realName!:string
    private userURL!:URL
    private avatarURL!:URL
    private constructor(username:string, apikey:string){
        this.username = username
        this.apikey = apikey
        this.fetchData()
    }
    public async fetchData():Promise<void> {
        const resp = await ky.get(
            `${apiRootURL}?method=user.getinfo&user=${this.username}&api_key=${this.apikey}&format=json`,
            {
                method: "get",
                headers: getHttpHeaders()
            },
        ).json()
        const respAs:UserGetInfoType = (resp as UserGetInfoType)
        this.name = respAs.name
        this.realName = respAs.realname
        this.userURL = respAs.url
        this.avatarURL = respAs.image
    }

    public getAvatarUrl():URL{
        return this.avatarURL
    }

    public getName():string{
        return this.name
    }

    public getUserUrl():URL{
        return this.userURL;
    }
    public static async create(username: string, apikey: string):Promise<UserInfo> {
        const instance = new UserInfo(username, apikey)
        await instance.fetchData()
        return instance
    }
}