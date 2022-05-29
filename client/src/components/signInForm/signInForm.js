import {Component} from "react";
import {Button, Form, Alert} from "react-bootstrap";
import "./signInForm.css"

export class SignInForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: true,
			email: "",
			passwd: "",
			alertVisible: "d-none",
			validated: false
		};
	}

	setEmail = (e) => {
		this.setState({email: e.target.value});
	};

	setPassword = (e) => {
		this.setState({passwd: e.target.value});
	};

	setFetchAuthorizationDataResult = (result) => {
		if (result[0].id === "Wrong data"){
			this.setState(
				{
					alertVisible: "",
					validated: false
				});
		} else {
			this.setState({
				alertVisible: "d-none",
				validated: true
			});
			this.props.toggleContent(result[0].id);
		}
	}

	authorization = () => {
		fetch("http://localhost:5000/servicemanAuth", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: this.state.email,
				passwd: this.state.passwd
			})
		})
			.then(response => response.json())
			.then(result => this.setFetchAuthorizationDataResult(result))
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.stopPropagation();
		} else if (form.checkValidity() === true) {
			await this.authorization();
		}
	};

	render() {
		return (
			<section className={`signInFormBox ${this.props.hide}`}>
				<div className="borderForm">
					<h2 className={"signInFormTitle"}>
                        Увійти як працівник
					</h2>
					<Form  validated={this.state.validated} className={"signInForm"} onSubmit={this.handleSubmit}>
						<Form.Group className="mb-3">
							<Form.Floating className="mb-1">
								<Form.Control required type="email" placeholder="Введіть email" value={this.state.email}
									onChange={this.setEmail}/>
								<Form.Label>Email</Form.Label>
							</Form.Floating>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Floating className="mb-1">
								<Form.Control required type="password" placeholder="Введіть пароль" value={this.state.passwd}
									onChange={this.setPassword}/>
								<Form.Label>Password</Form.Label>
							</Form.Floating>
						</Form.Group>
						<Button className={"signInFormBtn"} variant="primary" type={"submit"}>
                            Увійти
						</Button>
						<Alert variant={"danger"} className={this.state.alertVisible}
							style={{position: "absolute", width: "330px", top: "426px", zIndex: "-1"}}>
                            Данні введено невірно.
						</Alert>
					</Form>
				</div>
			</section>
		);
	}
}