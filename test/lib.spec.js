const subject = require('../lib/fetch');
const fetch = require('node-fetch');
const mockSuccessApiResponse = require('./api-success-response-mock.json');
const mockFailedApiResponse = require('./api-failure-response-mock.json');
const {securitySymbols} = require("../lib/symbols");

jest.mock('node-fetch', () => jest.fn())

describe('Testing the Fetch Library', () => {

    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('Returns json response if response ok is true', async () => {
        const mockedResponse = Promise.resolve({
            ok: true,
            status: 200,
            json: () => {
                return mockSuccessApiResponse;
            },
        })
        fetch.mockImplementation(() => mockedResponse);
        const returnedResp = await subject.fetchApiData(securitySymbols)
        expect(returnedResp.data).toBeDefined();
        expect(returnedResp.data.items).toBeDefined();
    });

    it('Throws an error when response ok property false', async () => {
        const mockedResponse = Promise.resolve({
            ok: false,
            status: 500,
            json: () => {
                return mockFailedApiResponse;
            },
        })
        fetch.mockImplementation(() => mockedResponse);
        try {
            const response = await subject.fetchApiData(securitySymbols)
        } catch (e) {
            expect(e.message).toMatch('HTTP Error while getting data from API ...');
        }
    });
});
