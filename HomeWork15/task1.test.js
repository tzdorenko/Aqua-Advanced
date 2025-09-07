const fetchWithError = require('./errorRequest');
const axios = require('axios');

jest.mock('axios');

describe('fetchWithError', () => {
    it('should throw an error when request fails', async () => {
        axios.get.mockRejectedValue(new Error('Network Error'));

        await expect(fetchWithError()).rejects.toThrow('Network Error');
    });
});
