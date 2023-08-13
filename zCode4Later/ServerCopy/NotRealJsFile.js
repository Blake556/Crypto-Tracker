const express = require("express");
const app = express();
const PORT = 4000;
const request = require("request");
const bodyParser = require("body-parser");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

const clientId =
  "9bdfdf610ba42efe755e151eaaca157e1772fc94ab72748f8e57356b59247ecf";
const clientSecret =
  "9739104ca1d2b3f9145af2b6ed2404b377409a39cfb65d56f985dac765d780c9";

app.get("/", function (req, res) {
  res.send("/");
});

app.post("/api/search", function (req, res) {
  const searchData = req.body.searchData;

  // Log the received data on the server
  console.log("Received search data:", searchData);

  // Authenticate and obtain an access token
  const authUrl = "https://api.coinbase.com/oauth/token";
  const authParams = {
    grant_type: "client_credentials",
    client_id: clientId,
    client_secret: clientSecret,
  };

  request.post(
    { url: authUrl, form: authParams },
    (authError, authResponse, authBody) => {
      if (authError) {
        console.error("Error getting access token:", authError.message);
        return res.status(500).json({ error: "Failed to authenticate" });
      }

      const authData = JSON.parse(authBody);
      if (authResponse.statusCode !== 200 || authData.error) {
        console.error(
          "Error getting access token:",
          authData.error_description
        );
        return res.status(500).json({ error: "Failed to authenticate" });
      }

      const accessToken = authData.access_token;

      // Make a request to search for the coin using the access token
      const apiUrl = `https://api.coinbase.com/v2/assets/search?query=${searchData}`;
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };

      request.get(
        { url: apiUrl, headers },
        (searchError, searchResponse, searchBody) => {
          if (searchError) {
            console.error("Error searching for coin:", searchError.message);
            return res.status(500).json({ error: "Failed to fetch coin data" });
          }

          const searchResult = JSON.parse(searchBody);
          res.json({ message: "Data received", data: searchResult });
        }
      );
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server live at ${PORT} `);
});




//   const searchData = req.body.searchData;
//   console.log("Received search data:", typeof searchData);

//   try {
//     const url = `https://api.exchange.coinbase.com/currencies/${searchData}`;
//     const headers = {
//       'Content-Type': 'application/json',
//     };

//     const response = await axios.get(url, { headers });
//     const data = response.data;

//     console.log('Coinbase API Response:', data);

//     res.json({ message: 'Data received', data });
//   } catch (error) {
//     console.error('Error fetching data:', error.message);
//     if (error.response) {
//       console.error('Coinbase API Error Response:', error.response.data);
//       console.error('Coinbase API Error Status:', error.response.status);
//     }
//     res.status(500).json({ error: 'Failed to fetch data from Coinbase API' });
//   }
