const express = require('express');
const app = express();
const PORT = 4000; 
const axios = require('axios');
const request = require("request");
const bodyParser = require('body-parser');
const functions = require('firebase-functions');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

app.get("/api/getData", async function (req, res) {

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en'
    
    try {
        // Make the GET request using axios
        const response = await axios.get(url);
    
        // The data response is available in response.data
        const data = response.data;
        res.json(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
      }
    
});

app.post("/api/search", async function (req, res) {

  const searchData = req.body.search;
  //const vsCurrency = 'usd'; 

  const url = `https://api.coingecko.com/api/v3/coins/${searchData}`;

  try {
      // Make the GET request using axios
      const response = await axios.get(url);

      // The data response is available in response.data
      const data = response.data;
      res.json(data);
  } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Failed to fetch data' });
  }

});

exports.yourExpressFunction = functions.https.onRequest(app);

app.listen(PORT, () => {
  console.log(`Server live at ${PORT} `);
});
