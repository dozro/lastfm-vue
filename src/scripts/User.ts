import {UserInfo} from "./UserInfo"
import { getLovedTracks, getUser } from "./lastFmApi"
import { UserLovedTracks } from "./UserTracks"

class User{
    private user:string
    private userInfo:UserInfo
    private lovedTracks:UserLovedTracks
    constructor(user:string){
        this.user = user
        this.userInfo = getUser(this.user)
        this.lovedTracks = getLovedTracks(this.user)
    }
    public getUserInfo():UserInfo{
        return this.userInfo;
    }
    public getLovedTracks():UserLovedTracks{
        return this.lovedTracks;
    }
    
}

export {User}