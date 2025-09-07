const axios = require('axios');

test('Get users posts', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    console.log(response.data);
    expect(response.status).toEqual(200);
});
