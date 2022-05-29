const ServiceManConnection = require("../database/ServiceManConnection");

const servicemanRoutes = (app) => {
    const answer = {
        id: 'Wrong data'
    }

    app.post('/servicemanAuth', async (req, res) => {
        const serviceman = new ServiceManConnection();
        serviceman.createConnection();
        let result = await serviceman.servicemanAuthorization(req.body);
        if (result.length === 0) {
            res.send([answer]);
        } else {
            res.send(result);
        }
        serviceman.disableConnection();
    })
}
module.exports = servicemanRoutes;