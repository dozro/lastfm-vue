export default function(data:any){
    jest.mock('ky', () => ({
        get: jest.fn(() =>
            Promise.resolve({
            json: () => Promise.resolve(data),
            })
        ),
    }));
}