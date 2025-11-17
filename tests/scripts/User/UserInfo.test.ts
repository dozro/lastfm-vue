import { UndefinedError } from "../../../src/scripts/errors/UndefinedError";
import { UserGetInfoType } from "../../../src/scripts/types/User";
import UserInfo from "../../../src/scripts/User/UserInfo"

const data:UserGetInfoType = {
    "user": {
        "name": "Example",
        "age": 0,
        "subscriber": 0,
        "realname": "Example",
        "bootstrap": 0,
        "playcount": 45632,
        "artist_count": 9824,
        "playlists": 0,
        "track_count": 6783,
        "album_count": 3269,
        "image": [
            {
                "size": "small",
                "#text": ""
            },
            {
                "size": "medium",
                "#text": ""
            },
            {
                "size": "large",
                "#text": ""
            },
            {
                "size": "extralarge",
                "#text": ""
            }
        ],
        "registered": {
            "unixtime": "1623755669",
            "#text": 1623755669
        },
        "country": "Germany",
        "gender": "n",
        "url": "https:\/\/www.last.fm\/user\/example",
        "type": "user"
    }
}

jest.mock('ky', () => require('../../mocks/kyGetJsonMock.ts').default);


describe('testing User Info Class', () => {
    test('test if it correctly creates data based on example data', () => {
        const userInfo:UserInfo = UserInfo.createAndInject(data as UserGetInfoType);
        expect(userInfo).toBeDefined()
        expect(userInfo.getName()).toBe("Example")
        expect(userInfo.getPlayCount()).toBe(45632)
    });
    test('test if it correctly creates data based on example data with mocked ky', async () => {
        const userInfo:UserInfo = await UserInfo.create("abc", "abc")
        expect(userInfo.getName()).toBe("Example")
    });
});