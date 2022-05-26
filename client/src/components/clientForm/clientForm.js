import {Component} from "react";
import {Button, Card, CloseButton, Col, Form, Row} from "react-bootstrap";
import "./clientForm.css"

export class ClientForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnState: '',
            isLoaded: false,
            servicemen: [],
            services: [],
            servicePrice: '',
            validated: false,
            //Form Data
            firstName: '',
            lastName: '',
            address: '',
            email: '',
            tel: '',
            selectedServiceId: '',
            servicemanId: '',
            description: '',
            delivery: false,
            homeVisit: false,
            //Form style
            cardPrimary: 'primary',
            formState: 'hide',
            formStatus: false,
            bannerCaption: 'Якщо ми вас зацікавили і вам потрібна наша допомога ви можете звернутися до нас',
            buttonCaption: 'Звернутися до нас'

        }
    }

    checkSendStatus = () => {
        this.setState({
            cardPrimary: 'success',
            bannerCaption: 'Дякуємо за заяву! Гарного вам дня!',
            buttonCaption: 'Подати заяву знов'
        })
    }

    resetForm = () => {
        if (this.state.formStatus) {
            document.getElementById('userForm').reset();
        }
    }

    sendData = async () => {
        const url = "http://localhost:5000/postData";
        const userData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            email: this.state.email,
            tel: this.state.tel,
            selectedServiceId: this.state.selectedServiceId,
            servicemanId: this.state.servicemanId,
            description: this.state.description,
            delivery: this.state.delivery,
            homeVisit: this.state.homeVisit
        };

        let response =  await fetch(url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            this.setState({
                formStatus: true
            })
            this.toggleForm();
            this.checkSendStatus();
        } else {
            console.log(response.status)
        }


    }

    handleSubmit = (event) => {
        event.preventDefault();
        let form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();

        } else if (form.checkValidity() === true) {
            this.sendData();

        }
        this.setState({validated: true})
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

    setServiceManId = (e) => {
        let arr = [];

        this.state.servicemen.forEach(({id, service_id, last_name}) => {
            if (e === service_id) {
                arr.push(id);
            }
        })

        this.setState({servicemanId: arr[0]});
    }

    renderServicemenDropdown = () => {
        return this.state.servicemen.map(({id, first_name, last_name, service_id}) => {
            if (service_id === this.state.selectedServiceId) {
                return (
                    <option value={id} key={id}>{first_name} {last_name}</option>
                )
            } else {
                return null;
            }
        })
    }

    setServicePrice = (e) => {
        this.state.services.forEach(({id, price}) => {
            if (e === id) {
                this.setState({servicePrice: price});
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
                        selectedServiceId: result[0].id,
                        servicePrice: result[0].price
                    });
                    this.setServiceManId(Number(this.state.selectedServiceId));

                }, (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            );
    }

    setFirstName = (e) => {
        this.setState({firstName: e.target.value});
    }

    setLastName = (e) => {
        this.setState({lastName: e.target.value});
    }

    setAddress = (e) => {
        this.setState({address: e.target.value});
    }

    setEmail = (e) => {
        this.setState({email: e.target.value});
    }

    setTel = (e) => {
        this.setState({tel: e.target.value});
    }

    setDescription = (e) => {
        this.setState({description: e.target.value});
    }

    setDelivery = () => {
        this.setState({delivery: (!this.state.delivery)});
    }

    setHomeVisit = () => {
        this.setState({homeVisit: (!this.state.homeVisit)});
    }

    componentDidMount() {
        this._getServiceData();
        this._getServiceManData();
    }

    render() {
        let renderServicemenDropdown = this.renderServicemenDropdown();



        return (
            <>
                <Card bg={this.state.cardPrimary} className={"formCard"}>
                    <Form noValidate onSubmit={this.handleSubmit} validated={this.state.validated}
                          className={`form ${this.state.formState}`} id={"userForm"}>
                        <CloseButton onClick={this.toggleForm} className={"closeBtn"}/>
                        <Row className="g-2">
                            <Col md>
                                <Form.Floating className="mb-1">
                                    <Form.Control required type="text" placeholder="Введіть ім'я"
                                                  onChange={this.setFirstName}/>
                                    <Form.Label>Ім'я</Form.Label>
                                </Form.Floating>
                                <Form.Floating className="mb-1">
                                    <Form.Control required type="email" placeholder="Введіть email"
                                                  onChange={this.setEmail}/>
                                    <Form.Label>Email</Form.Label>
                                </Form.Floating>
                                <Form.Floating className="mb-1">
                                    <Form.Select onChange={(e) => {
                                        this.setState({
                                            selectedServiceId: Number(e.target.value)
                                        });
                                        renderServicemenDropdown = this.renderServicemenDropdown();
                                        this.setServicePrice(Number(e.target.value));
                                        this.setServiceManId(Number(e.target.value));

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
                                    <Form.Control required type="text" placeholder="Введіть прізвище"
                                                  onChange={this.setLastName}/>
                                    <Form.Label>Прізвище</Form.Label>
                                </Form.Floating>
                                <Form.Floating className="mb-1">
                                    <Form.Control required type="tel" placeholder="Введіть номер телефону"
                                                  onChange={this.setTel}/>
                                    <Form.Label>Номер телефону</Form.Label>
                                </Form.Floating>
                                <Form.Floating className="mb-1">
                                    <Form.Select onChange={(e) => {
                                        this.setState({servicemanId: Number(e.target.value)})
                                    }}>
                                        {
                                            renderServicemenDropdown
                                        }
                                    </Form.Select>
                                    <Form.Label>Оберіть мастера</Form.Label>
                                </Form.Floating>
                                <Row>
                                    <Col className={"buttonBox"}>
                                        <Button variant="primary" type="submit" className="mb-1 formBtn">
                                            Подати заяву
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-1">
                                            <Form.Check
                                                type="switch"
                                                id="custom-switch"
                                                label="Доставка додому"
                                                onChange={this.setDelivery}

                                            />
                                            <Form.Check
                                                type="switch"
                                                id="custom-switch"
                                                label="Візит мастера додому"
                                                onChange={this.setHomeVisit}
                                            />
                                        </Form.Group>
                                        <p className={"priceMarker"}>
                                            Ціна: {this.state.servicePrice} грн.
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Form.Floating className="mb-1">
                                    <Form.Control required type="text" placeholder="Введіть адресу"
                                                  onChange={this.setAddress}/>
                                    <Form.Label>Адреса</Form.Label>
                                </Form.Floating>
                                <Form.Group className="mb-1 textArea">
                                    <Form.Control as="textarea" placeholder="Опишіть проблему докладніше"
                                                  style={{height: '120px'}} isValid={false}
                                                  onChange={this.setDescription}/>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                    <div className={`openFormBtn ${this.state.btnState}`}>
                        <h2>
                            {this.state.bannerCaption}
                        </h2>
                        <Button variant="outline-light" size="lg" onClick={() => {
                            this.toggleForm();
                            this.resetForm();
                            this.setState({validated: false});


                        }}>
                            {this.state.buttonCaption}
                        </Button>
                    </div>
                </Card>
            </>
        );
    }
}