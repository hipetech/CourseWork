const ClientConnection = require("../database/ClientConnection");

const clientRoutes = (app) =>  {
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

    app.post('/postData', async (req, res) => {
        console.log(req.body);
        const client = new ClientConnection();

        const status = await client.insertApplication(req.body);
        res.sendStatus(Number(status));
        client.disableConnection();
    })
}

module.exports = clientRoutes;