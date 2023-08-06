const express = require('express')
const app = express()
const PORT = 4000;
// const axios = require('axios');  
const request = require('request');
const bodyParser = require('body-parser')

app.use(express.urlencoded({extended: true }))
app.use(express.json())
app.use(bodyParser.json())

const clientId ='9bdfdf610ba42efe755e151eaaca157e1772fc94ab72748f8e57356b59247ecf'
const clientSecret ='9739104ca1d2b3f9145af2b6ed2404b377409a39cfb65d56f985dac765d780c9'

app.get("/", function(req, res) {
    req.send("/")
})

app.post("/api/search", function (req, res) {
    const searchData = req.body.searchData;
  
    // Log the received data on the server
    console.log("Received search data:", searchData);

    // Send the search data back to the client
    res.json({ message: 'Data received', data: searchData });
  });
  











// app.post("/api/search", function (req, res) {
//    const searchData = req.body.searchData
//     console.log(searchData)
//    res.json({ message: 'Data recieved ok', data: searchData})
//    //console.log(searchData)
// })

// app.get("/api", (req, res) => {
//     res.json({ "users": ['MrProducer', 'Blake', "TopB"] })
// })



app.listen(PORT, () => {
    console.log(`Server live at ${PORT} `)
})

