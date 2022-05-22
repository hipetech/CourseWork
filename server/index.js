const express = require('express');
const cors = require('cors');
const ClientConnection = require("./database/ClientConnection");

const app = express();
app.use(cors());
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

})