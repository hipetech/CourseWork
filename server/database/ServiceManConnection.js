class ServiceManConnection {
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

    disableConnection = () => {
        this.serviceManConnection.end();
    }

    requestPromise = async (request) => {
        return new Promise((resolve, reject) => {
            this.serviceManConnection.query(request, (error, results) => {
                if (error) {
                    reject(error);
                }
                resolve(results)
            })
        });
    }

    servicemanAuthorizationRequest = (email, passwd) => {
        return `select id
                from computer_service.serviceman_view
                where email = '${email}'
                  and password = '${passwd}'
                limit 1`;
    }

    servicemanAuthorization = async (req_body) => {
        const {email, passwd} = req_body;
        const request = this.servicemanAuthorizationRequest(email, passwd);
        return this.requestPromise(request);
    }
}

module.exports = ServiceManConnection;