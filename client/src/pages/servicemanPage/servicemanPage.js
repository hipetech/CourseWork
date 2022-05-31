import {Component} from "react";
import "./servicemanPage.css"
import {UserInfo} from "../../components/userInfo/userInfo";
import {UserApplications} from "../../components/userApplications/userApplications";
import {SignInForm} from "../../components/signInForm/signInForm";

export class ServicemanPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            applications: [],
            formVisible: '',
            pageContentVisible: 'hide'
        }
    }

    getDataPromise = (id, api) => {
        return fetch(api, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({serviceman_id: id})
        })
            .then(response => response.json());
    }

    getServicemanData = (id) => {
        this.getDataPromise(id, "http://localhost:5000/getServicemanData")
            .then(result => this.setState({user: result[0]}));
    }

    getServicemanApplications = (id) => {
        this.getDataPromise(id, "http://localhost:5000/getServicemanApplications")
            .then(result => {
                this.setState({applications: result});
            });
    }

    setServicemanApplicationStatus = (id, status) => {
        return fetch("http://localhost:5000/setServicemanApplicationStatus", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: id, status: status})
        }).then(response => response.text())
    }

    toggleContent = (servicemanId) => {
        if (this.state.pageContentVisible === 'hide') {
            this.setState({
                formVisible: 'hide',
                pageContentVisible: ''
            });
            this.getServicemanData(servicemanId);
            this.getServicemanApplications(servicemanId);
        }
    }

    changeStatus = async (id, status) => {
        let applications = this.state.applications;

        applications.forEach(el => {
            if (el.id === id) {
                el.status = status;
            }
        });

        const result = await this.setServicemanApplicationStatus(id, status);

        if (result === "DONE") {
            this.setState({
                applications: applications
            })
        } else if (result === "FALSE") {
            console.error("FALSE");
        }
    }

    sortBy = (sortParam) => {
        const arr = this.state.applications;
        arr.sort(sortParam);
        this.setState({applications: arr});
    }

    render() {
        return (<>
            <SignInForm className={this.state.formVisible} toggleContent={this.toggleContent}
                        hide={this.state.formVisible}/>
            <section className={`pageContent ${this.state.pageContentVisible}`}>
                <section className="masterInfo">
                    <h2 className={"title"}>
                        Персональна інформація
                    </h2>
                    <UserInfo data={this.state.user} applications={this.state.applications}/>
                </section>
                <section className="mastersApplications">
                    <h2 className="title">
                        Замовлення
                    </h2>
                    <UserApplications applications={this.state.applications} changeStatus={this.changeStatus}
                                      sortBy={this.sortBy}/>
                </section>
            </section>
        </>)
    }
}
