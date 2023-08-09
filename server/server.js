const express = require('express');
const app = express();
const PORT = 4000;
const axios = require('axios');
const bodyParser = require('body-parser');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

const apiKey =  "9bdfdf610ba42efe755e151eaaca157e1772fc94ab72748f8e57356b59247ecf";;
const apiSecret =  "9739104ca1d2b3f9145af2b6ed2404b377409a39cfb65d56f985dac765d780c9";

app.post("/api/search", async function (req, res) {
    const searchData = req.body.searchData + '-USD';
    console.log("Received search data:", searchData);
  
    const url = `https://api.coinbase.com/v2/prices/${searchData}/buy`;
  
    try {
      const response = await axios.get(url, {
        auth: {
          username: apiKey,
          password: apiSecret,
        },
      });
  
      const priceData = response.data.data;
      res.json(priceData);
    } catch (error) {
      console.error('Error fetching buy price:', error.message);
      res.status(500).json({ error: 'Failed to fetch buy price' });
    }
  });

app.listen(PORT, () => {
  console.log(`Server live at ${PORT} `);
});
