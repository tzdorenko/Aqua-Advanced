const axios = require('axios');

test('Create a new post', async () => {
    const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
            title: 'Foo',
            body: 'bar',
            userId: 1,
        },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        },
    );
    console.log(response.data);
    expect(response.status).toEqual(201);
    expect(response.data).toHaveProperty('id'); // Перевірка, що пост створено
    expect(response.data.title).toBe('Foo');
});
