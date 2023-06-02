const request = require('request');

const options = {
  method: 'POST',
  url: 'https://scraptubes.p.rapidapi.com/scrape/tiktok/userinfo',
  headers: {
    'content-type': 'application/json',
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': 'RAPID-API-KEY',
    'X-RapidAPI-Host': 'scraptubes.p.rapidapi.com'
  },
  body: {
    username: 'ninogashi',
    proxy: ''
  },
  json: true
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});