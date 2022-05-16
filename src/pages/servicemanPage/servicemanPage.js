import {Component} from "react";
import "./servicemanPage.css"
import {UserInfo} from "../../components/userInfo/userInfo";

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
            }
        }
    }

    render() {
        return (
            <>
                <UserInfo data={this.state.user}/>
            </>
        )
    }
}
