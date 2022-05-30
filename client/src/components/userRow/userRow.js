import {Component} from "react";
import {OrderDetailsOverlay} from '../orderDetailsOverlay/orderDetailsOverlay'
import "./userRow.css"
import {DropdownButton, Dropdown} from "react-bootstrap";

export class UserRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            delivery: Boolean(this.props.rowData.delivery),
            homeVisit: Boolean(this.props.rowData.homeVisit),
            status: this.props.rowData.status,
            variant: 'danger'
        }
    }

    setTime = (time) => {
        const applicationTime = new Date(time);
        const date = `${applicationTime.getDate()}.${applicationTime.getMonth()}.${applicationTime.getFullYear()}`;
        const hours = `${applicationTime.getHours()}:${applicationTime.getMinutes()}`;
        return `${date} ${hours}`;
    }

    boolCheck = (state, firstValue, secondValue) => {
        if (state) {
            return (
                firstValue
            )
        } else {
            return (
                secondValue
            )
        }
    }

    homeVisitCheck = () => {
        return (
            this.boolCheck(this.state.homeVisit,
                <div className={"statusCard green"}>
                    <p>
                        Присутній
                    </p>
                </div>,
                <div className={"statusCard red"}>
                    <p>
                        Відсутній
                    </p>
                </div>
            )
        )
    }

    deliveryCheck = () => {
        return (
            this.boolCheck(this.state.delivery,
                <div className={"statusCard green"}>
                    <p>
                        Присутня
                    </p>
                </div>,
                <div className={"statusCard red"}>
                    <p>
                        Відсутня
                    </p>
                </div>
            )
        )
    }

    orderStatusCheck = () => {
        if (this.state.status === 'TO DO') {
            return 'Чекає'
        } else if (this.state.status === 'IN PROGRESS') {
            return 'Виконується'
        } else if (this.state.status === 'DONE') {
            return 'Виконано'
        }
    }

    orderStatusChange = (status, variant) => {
        if (this.state.status !== status) {
            this.props.changeStatus(this.props.rowData.id, status);
            this.setState({status: status, variant: variant});
        }
    }

    toDoChange = () => {
        this.orderStatusChange('TO DO', 'danger');
    }

    inProgressChange = () => {
        this.orderStatusChange('IN PROGRESS', 'primary');
    }

    doneChange = () => {
        this.orderStatusChange('DONE', 'success');
    }

    checkVariantOnLoadComponent = () => {
        if (this.state.status === 'TO DO') {
            this.setState({variant: 'danger'});
        } else if (this.state.status === 'IN PROGRESS') {
            this.setState({variant: 'primary'});
        } else if (this.state.status === 'DONE') {
            this.setState({variant: 'success'});
        }
    }

    componentDidMount() {
        this.checkVariantOnLoadComponent();
    }

    render() {
        let id = this.props.id
        let {
            first_name, last_name, email,
            phone_number,
            address,
            application_date,
            application_details
        } = this.props.rowData

        return (
            <>
                <tr>
                    <td>
                        {id}
                    </td>
                    <td>
                        {first_name}
                    </td>
                    <td>
                        {last_name}
                    </td>
                    <td>
                        {email}
                    </td>
                    <td>
                        {phone_number}
                    </td>
                    <td>
                        {address}
                    </td>
                    <td>
                        {this.setTime(application_date)}
                    </td>
                    <td>
                        <OrderDetailsOverlay orderDetails={application_details}/>
                    </td>
                    <td>
                        <div className={"deliveryBox"}>
                            {this.deliveryCheck()}
                        </div>

                    </td>
                    <td>
                        <div className={"homeVisitBox"}>
                            {this.homeVisitCheck()}
                        </div>
                    </td>
                    <td>
                        <DropdownButton id="dropdown-basic-button" title={this.orderStatusCheck()}
                                        variant={this.state.variant}>
                            <Dropdown.Item onClick={this.toDoChange}>Чекає</Dropdown.Item>
                            <Dropdown.Item onClick={this.inProgressChange}>Виконується</Dropdown.Item>
                            <Dropdown.Item onClick={this.doneChange}>Виконано</Dropdown.Item>
                        </DropdownButton>
                    </td>
                </tr>
            </>
        )
    }
}