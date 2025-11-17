// Project Gowers (part of Project Angus)

import ky from 'ky';
import { apiRootURL, getHttpHeaders } from '../baseI';
import type { UserGetInfoType } from '../types/User';
import { UndefinedError } from '../errors/UndefinedError';
import { ImageJson, Image } from '../types/Image';

export default class UserInfo{
    private username:string
    private apikey:string
    private name!: string;
    private realName!:string
    private userURL!:URL
    private avatarImg?:Array<ImageJson>
    private avatarURL!:URL
    private playcount!:number
    private constructor(username:string, apikey:string){
        this.username = username
        this.apikey = apikey
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
        this.setData(respAs)
    }

    private setData(data:UserGetInfoType){
        this.name = data.user.name
        this.realName = data.user.realname
        this.userURL = new URL(data.user.url)
        this.avatarURL = new URL("https://example.org")
        this.avatarImg = data.user.image
        this.playcount = data.user.playcount
    }

    public getAvatarUrl():URL{
        return this.avatarURL
    }
    
    public getAvatarImgs():Array<Image>|undefined{
        if(undefined === this.avatarImg)
            return undefined
        let ret:Array<Image> = new Array<Image>(this.avatarImg.length)
        for(let i=0; i < this.avatarImg.length; i++){
            let cur = this.avatarImg[i]
            ret[i] = {
                _size: cur.size,
                __text: cur['#text']
            }
        }
        return ret
    }

    public getName():string{
        return this.name
    }

    public getUserUrl():URL{
        return this.userURL;
    }

    public getPlayCount():number{
        return this.playcount
    }

    public static async create(username: string, apikey: string):Promise<UserInfo> {
        const instance = new UserInfo(username, apikey)
        await instance.fetchData()
        if (instance === undefined)
            throw new UndefinedError("instance is undefined, this is most likely an internal error")
        return instance
    }
    public static createAndInject(data:UserGetInfoType):UserInfo{
        console.warn("Don't use this function unless you're sure you know what you're doing")
        const instance = new UserInfo("username", "apikey")
        instance.injectData(data)
        if (instance === undefined)
            throw new UndefinedError("instance is undefined, this is most likely an internal error")
        return instance
    }
    /**
     * only for test purposes
     * @param data injected data
     */
    private injectData(data:UserGetInfoType):void{
        console.warn("Don't use this function unless you're sure you know what you're doing")
        this.setData(data)
    }
}