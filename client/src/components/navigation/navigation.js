import {Component} from "react";
import {NavLink, Outlet} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import './navigation.css';

export class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonLabel: 'Увійти як працівник',
            route: '/servicemanPage'
        }
    }

    changeButtonLabel = () => {
        if (this.state.buttonLabel === 'Увійти як працівник') {
            this.setState(() => {
                return {
                    buttonLabel: 'Подати заяву як клієнт',
                }
            })
        } else {
            this.setState(() => {
                return {
                    buttonLabel: 'Увійти як працівник',
                }
            })
        }
    }


    changeRoute = () => {
        if (this.state.route === '/servicemanPage') {
            this.setState(() => {
                return {
                    route: '/'
                }
            })
        } else {
            this.setState(() => {
                return {
                    route: '/servicemanPage'
                }
            })
        }
    }

    labelLinkButtonLabelSet = () => {
        if (this.state.buttonLabel !== 'Увійти як працівник') {
            this.changeButtonLabel();
            this.changeRoute();
        }

    }

    render() {
        return (
            <>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <NavLink to="/" className={'iconLink'} onClick={this.labelLinkButtonLabelSet}>
                            <Navbar.Brand>
                                <div className="icon">
                                    <img src={'customer-service.png'} alt={'Icon'} className={'iconImage'}/>
                                </div>
                            </Navbar.Brand>
                            <Navbar.Brand>
                                Комп'ютерний Сервіс
                            </Navbar.Brand>
                        </NavLink>
                        <Nav>
                            <NavLink to={this.state.route}>
                                <Button variant="outline-light" onClick={() => {
                                    this.changeButtonLabel();
                                    this.changeRoute()
                                }}>
                                    {this.state.buttonLabel}
                                </Button>
                            </NavLink>
                        </Nav>
                    </Container>
                </Navbar>
                <Outlet context = {this.changeButtonLabel}/>
                <footer>
                    <section className="links">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className={"footerImgBox"}>
                            <img src={"footer/google.png"} alt="google icon"/>
                        </a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className={"footerImgBox"}>
                            <img src={"footer/github.png"} alt="google icon"/>
                        </a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className={"footerImgBox"}>
                            <img src={"footer/facebook.png"} alt="google icon"/>
                        </a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className={"footerImgBox"}>
                            <img src={"footer/instagram.png"} alt="google icon"/>
                        </a>
                    </section>
                    <section className="footerCopyright">
                        <p>
                            ©2022 Copyright: Курсова робота студента групи ІПЗ20-1 Короти Кирила
                        </p>
                    </section>
                </footer>
            </>
        )
    }
}
