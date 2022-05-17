import {Component} from "react";
import {OrderDetailsOverlay} from '../orderDetailsOverlay/orderDetailsOverlay'
import "./userCard.css"

export class UserCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: this.props.cardData.status
        }
    }

    orderStatusCheck = () =>{
        if (this.state.status === 'to do'){
            return (
                <div className={"statusCard toDo"}>
                    <p>
                        Чекає
                    </p>
                </div>
            )
        } else if (this.state.status === 'in progress') {
            return (
                <div>
                    <p className={"statusCard inProgress"}>
                        Чекає
                    </p>
                </div>
            )
        } else if (this.state.status === 'done') {
            return (
                <div className={"statusCard done"}>
                    <p>
                        Виконано
                    </p>
                </div>
            )
        }
    }


    render() {
        let {
            firstName, lastName, email,
            telNumber,
            homeAddress,
            applicationDate,
            orderDetails,
            delivery,
            homeVisit
        } = this.props.cardData
        return (
            <>
                <tr>
                    <td>
                        1
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
                        <OrderDetailsOverlay orderDetails = {orderDetails}/>
                    </td>
                    <td>
                        {delivery}
                    </td>
                    <td>
                        {homeVisit}
                    </td>
                    <td>
                        {this.orderStatusCheck()}
                    </td>
                </tr>
            </>
        )
    }
}