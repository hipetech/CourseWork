import {Component} from "react";

import "./userApplications.css"
import {UserCard} from "../userCard/userCard";
import {Table} from "react-bootstrap";

export class UserApplications extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <>
                <Table striped bordered hover className={"applicationsTable"}>
                    <thead>
                        <tr>
                            <th>
                                #
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
                            <th>
                                Статус
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <UserCard cardData = {this.props.applications.application1}/>
                    </tbody>
                </Table>
            </>
        )
    }


}