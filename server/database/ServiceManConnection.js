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

    getServicemanDataRequest = (serviceman_id) => {
        return `select first_name,
                       last_name,
                       email,
                       phone_number,
                       (select service_name from service_view where id = service_id) as service
                from serviceman_view
                where id = ${serviceman_id}
                limit 1`;
    }

    getServicemanData = (req_body) => {
        const {serviceman_id} = req_body;
        const request = this.getServicemanDataRequest(serviceman_id);
        return this.requestPromise(request);
    }

    getServicemanApplicationsRequest = (serviceman_id) => {
        return `select application_view.id,
                       first_name,
                       last_name,
                       email,
                       phone_number,
                       address,
                       application_date,
                       application_details,
                       delivery,
                       home_visit,
                       application_view.status
                from client_view,
                     application_view
                where client_view.id = client_id
                  and serviceman_id = ${serviceman_id}`;
    }

    getServicemanApplications = (req_body) => {
        const {serviceman_id} = req_body;
        const request = this.getServicemanApplicationsRequest(serviceman_id);
        return this.requestPromise(request);
    }

    setServicemanApplicationStatusRequest = (id, status) => {
        return `update computer_service.application
                set computer_service.application.status = '${status}'
                where id = ${id}`;
    }

    setServicemanApplicationStatus = async (req_body) => {
        const {id, status} = req_body;
        const request = this.setServicemanApplicationStatusRequest(id, status);
        try {
            await this.requestPromise(request);
            return "DONE";
        } catch (e) {
            return "FALSE";
        }
    }
}

module.exports = ServiceManConnection;