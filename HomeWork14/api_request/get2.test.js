const axios = require('axios');

test('Get users album', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1/albums', {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    console.log(response.data);
    expect(response.status).toEqual(200);
});
