import {Component} from "react";
import {Button, Form} from "react-bootstrap";
import "./signInForm.css"

export class SignInForm extends Component {
    constructor(props) {
        super(props);


        this.state = {
            show: true
        }
    };

    render() {
        return (
            <section className={`signInFormBox ${this.props.hide}`}>
                <h2 className={"signInFormTitle"}>
                    Увійти як працівник
                </h2>
                <Form className={"signInForm"}>
                    <Form.Group className="mb-3">
                        <Form.Floating className="mb-1">
                            <Form.Control type="email" placeholder="Введіть email"/>
                            <Form.Label>Email</Form.Label>
                        </Form.Floating>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Floating className="mb-1">
                            <Form.Control type="password" placeholder="Введіть пароль"/>
                            <Form.Label>Password</Form.Label>
                        </Form.Floating>
                    </Form.Group>
                    <Button className={"signInFormBtn"} variant="primary" type={"submit"} onClick={(e) => {
                        e.preventDefault();
                        this.props.toggleContent();
                    }}>
                        Увійти
                    </Button>
                </Form>
            </ section>
        )
    }
}