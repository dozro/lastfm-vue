import UserInfo from "./UserInfo"
import UserLovedTracks from "./UserLovedTracks"

export default class User{
    private user:string
    private userInfo:UserInfo
    private lovedTracks:UserLovedTracks
    private constructor(user:string, userInfo:UserInfo, lovedTracks:UserLovedTracks){
        this.user = user
        this.userInfo = userInfo
        this.lovedTracks = lovedTracks
    }
    public getUserInfo():UserInfo{
        return this.userInfo;
    }
    public getLovedTracks():UserLovedTracks{
        return this.lovedTracks;
    }
    public static async create(apikey:string, username:string){
        const instance = new User(username,await UserInfo.create(username, apikey), await UserLovedTracks.create(username, apikey))
        return instance
    }
    
}