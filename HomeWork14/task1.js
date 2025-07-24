const axios = require('axios');
const Base_URL = 'https://jsonplaceholder.typicode.com/';

function checkResponse(response, expextedStatus, expectedKeys = []) {
    const { status, data } = response;
    console.log('Статус: ', status);
    if (status !== expextedStatus) {
        throw new Error(`Expected status ${expextedStatus}, but we've got ${status}`);
    }
    expectedKeys.forEach((key) => {
        if (!(key in data)) {
            throw new Error(`The response doesn't contain the key "${key}"`);
        }
    });
    console.log(`Check is done. The keys: `, expectedKeys.join(', '));
}
