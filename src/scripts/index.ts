// index
import UserInfo from "./User/UserInfo";
import { getUser, getLovedTracks, getRecentTracks } from "./lastFmApi"
import User from "./User/User"
import UserRecentTracks from "./User/UserRecentTracks";
import UserLovedTracks from "./User/UserLovedTracks";

export { 
    UserInfo, 
    UserLovedTracks,
    UserRecentTracks,
    User,
}

export { 
    getRecentTracks,
    getUser, 
    getLovedTracks,
}