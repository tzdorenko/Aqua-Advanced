const axios = require('axios');
const jsonData = require('./env.json');
const fs = require('fs');

test('Create a comment', async () => {
    const response = await axios.post(
        `${jsonData.baseUrl}/posts`,
        {
            name: 'Text comment',
            body: 'This is body comment',
            postId: 1,
            email: 'test@example.com',
        },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        },
    );

    console.log(response.data);
    expect(response.status).toBe(201);

    // Якщо API не повертає токен, цей блок можна прибрати
    // let token_value = response.data.token;
    // jsonData.token = token_value;
    // fs.writeFileSync('./env.json', JSON.stringify(jsonData, null, 2));
});
