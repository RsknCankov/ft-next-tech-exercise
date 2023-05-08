const querystring = require("querystring");
const fetch = require('node-fetch');

const urlPath = `https://markets-data-api-proxy.ft.com/research/webservices/securities/v1/quotes`;

async function fetchApiData(symbols) {
    const queryParams = querystring.stringify({
        symbols
    });
    const response = await fetch(`${urlPath}?${queryParams}`);
    if (response.ok) return response.json();
    throw new Error(`HTTP Error while getting data from API ...`);
}

module.exports = {fetchApiData};
