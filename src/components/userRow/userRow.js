import {Component} from "react";
import {OrderDetailsOverlay} from '../orderDetailsOverlay/orderDetailsOverlay'
import "./userRow.css"
import {DropdownButton, Dropdown} from "react-bootstrap";

export class UserRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            delivery: this.props.rowData.delivery,
            homeVisit: this.props.rowData.homeVisit,
            status: this.props.rowData.status,
            variant: 'danger'
        }
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
        if (this.state.status === 'to do') {
            return 'Чекає'
        } else if (this.state.status === 'in progress') {
            return 'Виконується'
        } else if (this.state.status === 'done') {
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
        this.orderStatusChange('to do', 'danger');
    }

    inProgressChange = () => {
        this.orderStatusChange('in progress', 'primary');
    }

    doneChange = () => {
        this.orderStatusChange('done', 'success');
    }


    render() {
        let id = this.props.id
        let {
            firstName, lastName, email,
            telNumber,
            homeAddress,
            applicationDate,
            orderDetails
        } = this.props.rowData

        return (
            <>
                <tr>
                    <td>
                        {id}
                    </td>
                    <td>
                        {firstName}
                    </td>
                    <td>
                        {lastName}
                    </td>
                    <td>
                        {email}
                    </td>
                    <td>
                        {telNumber}
                    </td>
                    <td>
                        {homeAddress}
                    </td>
                    <td>
                        {applicationDate}
                    </td>
                    <td>
                        <OrderDetailsOverlay orderDetails={orderDetails}/>
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