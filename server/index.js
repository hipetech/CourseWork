const express = require('express');
const cors = require('cors');
const ClientConnection = require("./database/ClientConnection");
const {json} = require("express");
const {stringify} = require("nodemon/lib/utils");
const bodyParser = require("body-parser");



const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = 5000;

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`));



app.get('/getServicemen', async (req, res) => {
    const client = new ClientConnection();
    client.createConnection();
    const result = await client.selectServiceMen()
    res.send(result);
    client.disableConnection();
});

app.get('/getService', async (req, res) => {
    const client = new ClientConnection();
    client.createConnection();
    const result = await client.selectService()
    res.send(result);
    client.disableConnection();
});

app.post('/postData', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
})

