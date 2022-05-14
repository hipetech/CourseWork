import {Component} from "react";
import {Button, Card, Form} from "react-bootstrap";
import "./clientForm.css"

export class ClientForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formState: "hide",
            btnState: ""
        }
    }

    toggleForm = () => {
        if (this.state.formState === "hide") {
            this.setState(() => {
                return  {
                    formState: "",
                    btnState: "hide"
                }
            })
        } else {
            this.setState(() => {
                return  {
                    formState: "hide",
                    btnState: ""
                }
            })

        }
    }
    render() {
        return (
            <>
                <section className="formSection">
                    <Card bg={"primary"} className={"formCard"}>

                        {/*<Form className={`form ${this.state.formState}`}>*/}
                        {/*    <Form.Group controlId="formBasicEmail">*/}
                        {/*        <Form.Label>Email address</Form.Label>*/}
                        {/*        <Form.Control type="email" placeholder="Enter email" />*/}
                        {/*    </Form.Group>*/}
                        {/*    <Form.Group className="mb-3" controlId="formBasicPassword">*/}
                        {/*        <Form.Label>Password</Form.Label>*/}
                        {/*        <Form.Control type="password" placeholder="Password" />*/}
                        {/*    </Form.Group>*/}
                        {/*    <Form.Group className="mb-3" controlId="formBasicCheckbox">*/}
                        {/*        <Form.Check type="checkbox" label="Check me out" />*/}
                        {/*    </Form.Group>*/}
                        {/*    <Button variant="primary" type="submit">*/}
                        {/*        Submit*/}
                        {/*    </Button>*/}
                        {/*</Form>*/}
                        <div className={`openFormBtn ${this.state.btnState}`}>
                            <h2>
                                Якщо ми вас зацікавили і вам потрібна наша допомога ви можете звернутися до нас
                            </h2>
                            <Button variant="outline-light" size="lg" onClick={this.toggleForm}>
                                Звернутися до нас
                            </Button>
                        </div>
                    </Card>
                </section>
            </>
        );
    }
}