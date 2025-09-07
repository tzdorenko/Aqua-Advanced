const axios = require('axios');

async function FetchWithError() {
    try {
        const response = await axios.get('https://invalid.url.example.com/data');
        console.log(response.data);
        console.log(response.data instanceof Object);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

FetchWithError();
