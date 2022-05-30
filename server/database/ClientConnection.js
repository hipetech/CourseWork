class ClientConnection {
    constructor() {
        this.clientConnection = require('mysql').createConnection({
            host: 'localhost',
            user: 'client',
            password: 'passwd',
            database: 'computer_service'
        })
    }

    createConnection = () => {
        this.clientConnection.connect((err) => {
            if (err) {
                console.error('error connecting: ' + err.stack)
            }
            console.log('connected as id ' + this.clientConnection.threadId);
        })
    }

    disableConnection = () => {
        this.clientConnection.end();
    }


    requestPromise = async (request) => {
        return new Promise((resolve, reject) => {
            this.clientConnection.query(request, (error, results) => {
                if (error) {
                    reject(error);
                }
                resolve(results)
            })
        });
    }


    selectServiceMen = () => {
        const request = `select id, first_name, last_name, service_id
                         from computer_service.serviceman_view`;
        return this.requestPromise(request);
    }

    selectService = () => {
        const request = `select id, service_name, price
                         from computer_service.service_view`

        return this.requestPromise(request)
    }

    insertRequest = (clientRequest, applicationRequest) => {
        return new Promise((resolve, reject) => {
            this.clientConnection.query(clientRequest, (err) => {
                if (err) {
                    reject(500);
                }
            });

            this.clientConnection.query(applicationRequest, (err) => {
                if (err) {
                    reject(500);
                }
                resolve(200);
            });
        });
    }

    setClientRequest = (firstName, lastName, email, tel, address) => {
        return `insert computer_service.client(first_name, last_name, email, phone_number, address) 
        value ('${firstName}', '${lastName}', '${email}', '${tel}', '${address}')`
    }

    setApplicationRequest = (servicemanId, email, dateTime, description, delivery, homeVisit) => {
        return `insert computer_service.application(serviceman_id, client_id, application_date, application_details, delivery, home_visit) 
        value (${servicemanId}, (select id from computer_service.client where email = '${email}' limit 1), '${dateTime}', '${description}', ${Number(delivery)}, ${Number(homeVisit)})`
    }

    insertApplication = (reqBody) => {

        const {
            firstName,
            lastName,
            address,
            email,
            tel,
            dateTime,
            servicemanId,
            description,
            delivery,
            homeVisit
        } = reqBody;

        const clientRequest = this.setClientRequest(firstName, lastName, email, tel, address);
        const applicationRequest = this.setApplicationRequest(servicemanId, email, dateTime, description, delivery, homeVisit);

        return this.insertRequest(clientRequest, applicationRequest);
    }
}

module.exports = ClientConnection;