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


    selectServiceMen = async () => {
        const request = 'select serviceman_view.id, first_name, last_name, service_name, price from serviceman_view, service_view where serviceman_view.service_id = service_view.id';
        return new Promise((resolve, reject) => {
            this.clientConnection.query(request, (error, results) => {
                if (error) {
                    reject(error);
                }
                resolve(results)
            })
        });
    }
}

module.exports = ClientConnection;