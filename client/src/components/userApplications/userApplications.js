import {Component} from "react";

import "./userApplications.css"
import {UserRow} from "../userRow/userRow";
import {Button, Table} from "react-bootstrap";

export class UserApplications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortID: true,
            sortFirstname: false,
            sortLastname: false,
            sortEmail: false,
            sortAddress: false,
            sortApplicationDate: false,
            phase: 2

        }
    }

    renderTableItems = () => {
        return this.props.applications.map((item) => {
            return (
                <UserRow rowData={item} key={item.id} id={item.id} changeStatus={this.props.changeStatus}/>
            )
        })
    }

    toggleSortPhase = (setState, sortMethod1, sortMethod2) => {
        setState();
        if (this.state.phase === 1) {
            sortMethod1();
            this.setState({phase: 2});
        } else if (this.state.phase === 2) {
            sortMethod2();
            this.setState({phase: 1});
        }

    }

    sortByID = () => {
        this.toggleSortPhase(
            () => this.setState({
                sortID: true,
                sortFirstname: false,
                sortLastname: false,
                sortEmail: false,
                sortAddress: false,
                sortApplicationDate: false,
            }),
            () => this.props.sortBy((a, b) => {
                return a.id - b.id;
            }),
            () => this.props.sortBy((a, b) => {
                return b.id - a.id;
            })
        );
    }

    sortByAlphabet = (state, category) => {
        this.toggleSortPhase(
            state,
            () => this.props.sortBy(
                (a, b) => {
                    if (a[category].toLowerCase() < b[category].toLowerCase()) {
                        return -1;
                    } else if (a[category].toLowerCase() > b[category].toLowerCase()) {
                        return 1;
                    }
                    return 0;
                }
            ),
            () => this.props.sortBy(
                (a, b) => {
                    if (a[category].toLowerCase() > b[category].toLowerCase()) {
                        return -1;
                    } else if (a[category].toLowerCase() < b[category].toLowerCase()) {
                        return 1;
                    }
                    return 0;
                }
            )
        )
    }

    sortByFirstname = () => {
        this.sortByAlphabet(
            () => this.setState({
                sortID: false,
                sortFirstname: true,
                sortLastname: false,
                sortEmail: false,
                sortAddress: false,
                sortApplicationDate: false,
            }),
            "first_name"
        )
    }

    sortByLastname = () => {
        this.sortByAlphabet(
            () => this.setState({
                sortID: false,
                sortFirstname: false,
                sortLastname: true,
                sortEmail: false,
                sortAddress: false,
                sortApplicationDate: false,
            }),
            "last_name"
        )
    }

    sortByEmail = () => {
        this.sortByAlphabet(
            () => this.setState({
                sortID: false,
                sortFirstname: false,
                sortLastname: false,
                sortEmail: true,
                sortAddress: false,
                sortApplicationDate: false,
            }),
            "email"
        )
    }

    sortByAddress = () => {
        this.sortByAlphabet(
            () => this.setState({
                sortID: false,
                sortFirstname: false,
                sortLastname: false,
                sortEmail: false,
                sortAddress: true,
                sortApplicationDate: false,
            }),
            "address"
        )
    }

    sortByDate = () => {
        this.toggleSortPhase(
            () => this.setState({
                sortID: false,
                sortFirstname: false,
                sortLastname: false,
                sortEmail: false,
                sortAddress: false,
                sortApplicationDate: true,
            }),
            () => this.props.sortBy((a, b) => {
                return new Date(a["application_date"]) - new Date(b["application_date"]);
            }),
            () => this.props.sortBy((a, b) => {
                return new Date(b["application_date"]) - new Date(a["application_date"]);
            })
        );
    }

    toggleSortBtn = (state) => {
        if (state) {
            if (this.state.phase === 1) {
                return (
                    <img src={"./sortIcons/sortUp.png"} alt="sortUp"
                         className={`sortIcon`}/>
                )
            } else if (this.state.phase === 2) {
                return (
                    <img src={"./sortIcons/sortDown.png"} alt="sortDown"
                         className={`sortIcon`}/>
                )
            }
        } else {
            return (
                <></>
            )
        }
    }

    render() {
        return (
            <>
                <Table striped bordered hover className={"applicationsTable"}>
                    <thead>
                    <tr>
                        <th className={"sortByIdHeading"}>
                            <Button variant="light" className={"sortBtn"} onClick={this.sortByID}>
                                <b>ID</b>
                                {this.toggleSortBtn(this.state.sortID)}
                            </Button>
                        </th>
                        <th className={"sortByFirstname"}>
                            <Button variant="light" onClick={this.sortByFirstname}>
                                <b>Ім'я</b>
                                {this.toggleSortBtn(this.state.sortFirstname)}
                            </Button>
                        </th>
                        <th className={"sortByLastname"}>
                            <Button variant="light" onClick={this.sortByLastname}>
                                <b>Прізвище</b>
                                {this.toggleSortBtn(this.state.sortLastname)}
                            </Button>
                        </th>
                        <th>
                            <Button variant="light" onClick={this.sortByEmail}>
                                <b>Електронна адреса</b>
                                {this.toggleSortBtn(this.state.sortEmail)}
                            </Button>
                        </th>
                        <th>
                            Номер телефона
                        </th>
                        <th>
                            <Button variant="light" onClick={this.sortByAddress}>
                                <b>Домашня адреса</b>
                                {this.toggleSortBtn(this.state.sortAddress)}
                            </Button>
                        </th>
                        <th className={"sortByDate"}>
                            <Button variant="light" onClick={this.sortByDate}>
                                <b>Дата замовлення</b>
                                {this.toggleSortBtn(this.state.sortApplicationDate)}
                            </Button>
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