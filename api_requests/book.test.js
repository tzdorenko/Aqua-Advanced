const axios = require('axios');
const jsonData = require('../env.json');
const fs = require('fs');

test('User can login successfully', async () => {
    var response = await axios.post(
        `${jsonData.baseUrl}/user/login`,
        {
            email: 'salman@roadtocareer.net',
            password: '1234',
        },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        },
    );
    console.log(response.data);
    expect(response.data.message).toContain('Login successfully');
    let token_value = response.data.token;
    jsonData.token = token_value;
    fs.writeFileSync('../env.json', JSON.stringify(jsonData));
});
