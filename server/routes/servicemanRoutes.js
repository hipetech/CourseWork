const ServiceManConnection = require("../database/ServiceManConnection");

const servicemanRoutes = (app) => {

    app.post('/servicemanAuth', async (req, res) => {
        const serviceman = new ServiceManConnection();
        serviceman.createConnection();
        let result = await serviceman.servicemanAuthorization(req.body);
        if (result.length === 0) {
            res.send([{id: 'Wrong data'}]);
        } else {
            res.send(result);
        }
        serviceman.disableConnection();
    });

    app.post('/getServicemanData', async (req, res) => {
        const serviceman = new ServiceManConnection();
        serviceman.createConnection();
        let result = await serviceman.getServicemanData(req.body)
        res.send(result);
        serviceman.disableConnection();
    })
}
module.exports = servicemanRoutes;