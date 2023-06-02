const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://scraptubes.p.rapidapi.com/report',
  headers: {
    'content-type': 'application/json',
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': 'RAPID-API-KEY',
    'X-RapidAPI-Host': 'scraptubes.p.rapidapi.com'
  },
  data: {}
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}