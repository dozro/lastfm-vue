import { UserGetRecentTracksXML, convertUserGetRecentTracksXMLtoUserGetRecentTracks } from "../../../src/scripts/types/User";

import data from "../../data/user.getrecenttracks.converted.json"

describe('testing User Type', () => {
  test('simple convert test', () => {
    const input = (data as UserGetRecentTracksXML);
    let out = convertUserGetRecentTracksXMLtoUserGetRecentTracks(input);
    for(let i = 0; i < out.recenttracks.track.length; i++){
        let inCur = input.lfm.recenttracks.track[i]
        let outCur = out.recenttracks.track[i]
        expect(inCur.name).toBe(outCur.name)
        expect(inCur.mbid).toBe(outCur.mbid)
        expect(inCur.artist._mbid).toBe(outCur.artist.mbid)
        expect(inCur.artist.__text).toBe(outCur.artist.name)
    }
  });
});