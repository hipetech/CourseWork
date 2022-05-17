import {Component} from "react";
import "./servicemanPage.css"
import {UserInfo} from "../../components/userInfo/userInfo";
import {UserApplications} from "../../components/userApplications/userApplications";

export class ServicemanPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: 'Іван',
                lastName: 'Маслюк',
                email: 'exmaple@gmail.com',
                telNumber: '+380955242196',
                service: 'Налаштування ПЗ',
                countOfApplications: 10,
                countOfHomeVisits: 15,
                countOfDeliveries: 25
            },
            applications: {
                application1: {
                    firstName: 'Полина',
                    lastName: 'Чугай',
                    email: 'exmaple@gmail.com',
                    telNumber: '+380955242196',
                    homeAddress: 'test',
                    applicationDate: '2021-01-05',
                    orderDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    delivery: true,
                    homeVisit: true,
                    status: 'to do'
                },
                application2: {
                    firstName: 'Полина',
                    lastName: 'Чугай',
                    email: 'exmaple@gmail.com',
                    telNumber: '+380955242196',
                    homeAddress: 'test',
                    applicationDate: '2021-01-05',
                    orderDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    delivery: true,
                    homeVisit: true,
                    status: 'to do'
                },
                application3: {
                    firstName: 'Полина',
                    lastName: 'Чугай',
                    email: 'exmaple@gmail.com',
                    telNumber: '+380955242196',
                    homeAddress: 'test',
                    applicationDate: '2021-01-05',
                    orderDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    delivery: true,
                    homeVisit: true,
                    status: 'to do'
                }

            }
        }
    }

    render() {
        return (<>
                <section className="masterInfo">
                    <h2 className={"title"}>
                        Персональна інформація
                    </h2>
                    <UserInfo data={this.state.user}/>
                </section>
                <section className="mastersApplications">
                    <h2 className="title">
                        Замовлення
                    </h2>
                    <UserApplications applications={this.state.applications}/>
                </section>
            </>)
    }
}
