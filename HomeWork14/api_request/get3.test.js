const axios = require('axios');

test('Get users comments', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments', {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    console.log(response.data);
    expect(response.status).toEqual(200);
});
