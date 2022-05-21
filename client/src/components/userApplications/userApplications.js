import {Component} from "react";

import "./userApplications.css"
import {UserRow} from "../userRow/userRow";
import {Table} from "react-bootstrap";

export class UserApplications extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    renderTableItems = () => {
       return this.props.applications.map((item) => {
           return (
               <UserRow rowData={item} key={item.id} id={item.id} changeStatus={this.props.changeStatus}/>
           )
       })
    }

    render() {
        return (
            <>
                <Table striped bordered hover className={"applicationsTable"}>
                    <thead>
                        <tr>
                            <th>
                                ID
                            </th>
                            <th>
                                Ім'я
                            </th>
                            <th>
                                Прізвище
                            </th>
                            <th>
                                Електронна адреса
                            </th>
                            <th>
                                Номер телефону
                            </th>
                            <th>
                                Домашня адреса
                            </th>
                            <th>
                                Дата замовлення
                            </th>
                            <th>
                                Деталі замовлення
                            </th>
                            <th>
                                Доставка
                            </th>
                            <th>
                                Візит додому
                            </th>
                            <th className={"tableStatus"}>
                                Статус
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.renderTableItems()
                    }
                    </tbody>
                </Table>
            </>
        )
    }


}