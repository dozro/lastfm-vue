export default function(data: any) {
    const kyMock = {
        get: jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(data),
            })
        ),
    };
    jest.mock('ky', () => kyMock);
    return kyMock;
}