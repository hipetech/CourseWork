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



    _requestPromise = async (request) => {
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
        const request =
            'select id, first_name, last_name, service_id ' +
            'from computer_service.serviceman_view'

        return this._requestPromise(request);
    }

    selectService = () => {
        const request =
            'select id, service_name, price ' +
            'from computer_service.service_view'

        return this._requestPromise(request)
    }
}

module.exports = ClientConnection;