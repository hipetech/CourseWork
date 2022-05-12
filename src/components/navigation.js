import {Component} from "react";
import {NavLink, Outlet} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Nav, Navbar} from "react-bootstrap";

export class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <NavLink to="/">
                            <img src={'customer-service.png'} alt={'Icon'}/>
                            <Navbar.Brand>Комп'ютерний Сервіс</Navbar.Brand>
                        </NavLink>
                        <Nav>
                            <NavLink to="/servicemanPage">
                                <Button variant="outline-light">Увійти як працівник</Button>
                            </NavLink>
                        </Nav>
                    </Container>
                </Navbar>
                <Outlet/>
            </>
        )
    }
}