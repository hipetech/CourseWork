import {Component} from "react";
import {Button, Card, CloseButton, Col, Form, Row} from "react-bootstrap";
import "./clientForm.css"

export class ClientForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardPrimary: "primary",
            formState: "hide",
            btnState: "",
            isLoaded: false,
            servicemen: [],
            services: [],
            selectedServiceId: ''
        }
    }

    toggleForm = () => {
        if (this.state.formState === "hide") {
            this.setState(() => {
                return {
                    cardPrimary: "",
                    formState: "",
                    btnState: "hide"
                }
            })
        } else {
            this.setState(() => {
                return {
                    cardPrimary: "primary",
                    formState: "hide",
                    btnState: ""
                }
            })

        }
    }

    renderServiceDropdown = () => {
        return this.state.services.map(({id, service_name, price}) => {
            return (
                <option value={id} key={id}>{service_name}</option>
            )
        })
    }

    renderServicemenDropdown = () => {
        return this.state.servicemen.map(({id, first_name, last_name, service_id}) => {
            if (service_id === this.state.selectedServiceId) {
                return (
                    <option key={id}>{first_name} {last_name}</option>
                )
            } else {
                return null;
            }
        })
    }

    _getServiceManData = () => {
        fetch("http://localhost:5000/getServicemen")
            .then(res => res.json())
            .then((result) => {
                    this.setState({
                        isLoaded: true,
                        servicemen: result
                    });
                }, (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            );
    }

    _getServiceData = () => {
        fetch("http://localhost:5000/getService")
            .then(res => res.json())
            .then((result) => {
                    this.setState({
                        isLoaded: true,
                        services: result,
                        selectedServiceId: result[0].id
                    });
                }, (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            );
    }

    componentDidMount() {
        this._getServiceData();
        this._getServiceManData();
    }

    render() {
        let renderServicemenDropdown= this.renderServicemenDropdown();

        return (
            <>
                <Card bg={this.state.cardPrimary} className={"formCard"}>
                    <Form className={`form ${this.state.formState}`}>
                        <CloseButton onClick={this.toggleForm} className={"closeBtn"}/>
                        <Row className="g-2">
                            <Col md>
                                <Form.Floating className="mb-1">
                                    <Form.Control type="text" placeholder="Введіть ім'я"/>
                                    <Form.Label>Ім'я</Form.Label>
                                </Form.Floating>
                                <Form.Floating className="mb-1">
                                    <Form.Control type="email" placeholder="Введіть email"/>
                                    <Form.Label>Email</Form.Label>
                                </Form.Floating>
                                <Form.Floating className="mb-1">
                                    <Form.Select onChange={(e) => {
                                        this.setState({selectedServiceId: Number(e.target.value)});
                                        renderServicemenDropdown = this.renderServicemenDropdown();
                                    }}>
                                        {
                                            this.renderServiceDropdown()
                                        }
                                    </Form.Select>
                                    <Form.Label>Тип потрібної вам послуги</Form.Label>
                                </Form.Floating>
                            </Col>
                            <Col md>
                                <Form.Floating className="mb-1">
                                    <Form.Control type="text" placeholder="Введіть прізвище"/>
                                    <Form.Label>Прізвище</Form.Label>
                                </Form.Floating>
                                <Form.Floating className="mb-1">
                                    <Form.Control type="text" placeholder="Введіть номер телефону"/>
                                    <Form.Label>Номер телефону</Form.Label>
                                </Form.Floating>
                                <Form.Floating className="mb-1">
                                    <Form.Select>
                                        {
                                            renderServicemenDropdown
                                        }
                                    </Form.Select>
                                    <Form.Label>Оберіть мастера</Form.Label>
                                </Form.Floating>
                                <Row>
                                    <Col>
                                        <Button variant="primary" type="submit" className="mb-1 formBtn"
                                                onClick={(e) => {
                                                    e.preventDefault();

                                                }}>
                                            Подати заяву
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-1">
                                            <Form.Check
                                                type="switch"
                                                id="custom-switch"
                                                label="Доставка додому"
                                            />
                                            <Form.Check
                                                type="switch"
                                                id="custom-switch"
                                                label="Візит мастера додому"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Form.Floating className="mb-1">
                                    <Form.Control type="text" placeholder="Введіть адресу"/>
                                    <Form.Label>Адреса</Form.Label>
                                </Form.Floating>
                                <Form.Group className="mb-1 textArea">
                                    <Form.Control as="textarea" placeholder="Опишіть проблему докладніше"
                                                  style={{height: '120px'}}/>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                    <div className={`openFormBtn ${this.state.btnState}`}>
                        <h2>
                            Якщо ми вас зацікавили і вам потрібна наша допомога ви можете звернутися до нас
                        </h2>
                        <Button variant="outline-light" size="lg" onClick={this.toggleForm}>
                            Звернутися до нас
                        </Button>
                    </div>
                </Card>
            </>
        );
    }
}