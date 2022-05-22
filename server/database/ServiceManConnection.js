export class ServiceManConnection {
    constructor() {
        this.serviceManConnection = require('mysql').createConnection({
            host: 'localhost',
            user: 'serviceman',
            password: 'passwd',
            database: 'computer_service'
        });
    }

    createConnection = () => {
        this.serviceManConnection.connect((err) => {
            if (err) {
                console.error('error connecting: ' + err.stack)
            }
            console.log('connected as id ' + this.serviceManConnection.threadId);
        })
    }
}