const express = require('express');
const app = express();
const PORT = 4000;
const axios = require('axios');
const bodyParser = require('body-parser');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

// const clientId = 'YOUR_COINBASE_CLIENT_ID';
// const clientSecret = 'YOUR_COINBASE_CLIENT_SECRET';

app.post("/api/search", async function (req, res) {
  const searchData = req.body.searchData;
  console.log("Received search data:", typeof searchData);

  try {
    const url = `https://api.exchange.coinbase.com/currencies/${searchData}`;
    const headers = {
      'Content-Type': 'application/json',
    };

    const response = await axios.get(url, { headers });
    const data = response.data;

    console.log('Coinbase API Response:', data);

    res.json({ message: 'Data received', data });
  } catch (error) {
    console.error('Error fetching data:', error.message);
    if (error.response) {
      console.error('Coinbase API Error Response:', error.response.data);
      console.error('Coinbase API Error Status:', error.response.status);
    }
    res.status(500).json({ error: 'Failed to fetch data from Coinbase API' });
  }
});

app.listen(PORT, () => {
  console.log(`Server live at ${PORT} `);
});
