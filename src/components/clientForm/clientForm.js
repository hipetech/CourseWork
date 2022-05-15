import {Component} from "react";
import {Button, Card, CloseButton, Col, Form, Row} from "react-bootstrap";
import "./clientForm.css"

export class ClientForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardPrimary: "primary",
            formState: "hide",
            btnState: ""
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

    render() {
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
                                    <Form.Select>
                                        <option>Послуга 1</option>
                                        <option>Послуга 2</option>
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
                                        <option>Мастер 1</option>
                                        <option>Мастер 2</option>
                                    </Form.Select>
                                    <Form.Label>Оберіть мастера</Form.Label>
                                </Form.Floating>
                                <Row>
                                    <Col>
                                        <Button variant="primary" type="submit" className="mb-1 formBtn"
                                                onClick={(e) => e.preventDefault()}>
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