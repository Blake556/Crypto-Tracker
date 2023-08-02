const express = require('express')
const app = express()
const PORT = 4000;  


app.get("/api", (req, res) => {
    res.json({ "users": ['MrProducer', 'Blake', "TopB"] })
})

app.listen(PORT, () => {
    console.log(`Server live at ${PORT} `)
})

