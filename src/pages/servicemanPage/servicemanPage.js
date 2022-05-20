import {Component} from "react";
import "./servicemanPage.css"
import {UserInfo} from "../../components/userInfo/userInfo";
import {UserApplications} from "../../components/userApplications/userApplications";
import {SignInForm} from "../../components/signInForm/signInForm";

export class ServicemanPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: 'Іван',
                lastName: 'Маслюк',
                email: 'exmaple@gmail.com',
                telNumber: '+380955242196',
                service: 'Налаштування ПЗ'
            },
            applications: [
                {
                    id: 1,
                    firstName: 'Полина',
                    lastName: 'Чугай',
                    email: 'exmaple@gmail.com',
                    telNumber: '+380955242196',
                    homeAddress: 'test',
                    applicationDate: '2021-01-05',
                    orderDetails: '',
                    delivery: true,
                    homeVisit: false,
                    status: 'to do'
                },
                {
                    id: 2,
                    firstName: 'Полина',
                    lastName: 'Чугай',
                    email: 'exmaple@gmail.com',
                    telNumber: '+380955242196',
                    homeAddress: 'test',
                    applicationDate: '2021-01-05',
                    orderDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    delivery: false,
                    homeVisit: true,
                    status: 'to do'
                },
                {
                    id: 3,
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
                {
                    id: 4,
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
                {
                    id: 5,
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
                {
                    id: 6,
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
                {
                    id: 7,
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
                {
                    id: 8,
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
                {
                    id: 9,
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
                {
                    id: 10,
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
                {
                    id: 11,
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
                {
                    id: 12,
                    firstName: 'Полина',
                    lastName: 'Чугай',
                    email: 'exmaple@gmail.com',
                    telNumber: '+380955242196',
                    homeAddress: 'test',
                    applicationDate: '2021-01-05',
                    orderDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    delivery: false,
                    homeVisit: true,
                    status: 'to do'
                },
                {
                    id: 13,
                    firstName: 'Полина',
                    lastName: 'Чугай',
                    email: 'exmaple@gmail.com',
                    telNumber: '+380955242196',
                    homeAddress: 'test',
                    applicationDate: '2021-01-05',
                    orderDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    delivery: true,
                    homeVisit: false,
                    status: 'to do'
                },
                {
                    id: 14,
                    firstName: 'Полина',
                    lastName: 'Чугай',
                    email: 'exmaple@gmail.com',
                    telNumber: '+380955242196',
                    homeAddress: 'test',
                    applicationDate: '2021-01-05',
                    orderDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    delivery: false,
                    homeVisit: true,
                    status: 'to do'
                }

            ],
            formVisible: '',
            pageContentVisible: 'hide'
        }
    }

    toggleContent = () => {
        if (this.state.pageContentVisible === 'hide') {
            this.setState({formVisible: 'hide', pageContentVisible: ''})
        } else if (this.state.pageContentVisible !== 'hide') {
            this.setState({formVisible: '', pageContentVisible: 'hide'})
        }
    }


    changeStatus = (id, status) => {
        let applications = this.state.applications;

        applications[id].status = status;

        this.setState({
            applications: applications
        })
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
                    <UserApplications applications={this.state.applications} changeStatus={this.changeStatus}/>
                </section>
            </section>
        </>)
    }
}
