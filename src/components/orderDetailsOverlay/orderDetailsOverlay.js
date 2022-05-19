import {Button, Overlay, Popover} from "react-bootstrap";
import {Component} from "react";

export class OrderDetailsOverlay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            target: null,
            buttonText: 'Показати'
        }
    }


    handleClick = (e) => {
        if (this.state.buttonText === "Показати") {
            this.setState({buttonText: "Закрити"})
        }

        this.setState({show: !(this.state.show)})
        this.setState({target: e.target})
    }

    closeOverLay = () => {
        if (this.state.buttonText === "Закрити") {
            this.setState({buttonText: "Показати"})
        }

        this.setState({show: false})
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleClick}>{this.state.buttonText}</Button>

                <Overlay
                    show={this.state.show}
                    target={this.state.target}
                    onHide={this.closeOverLay}
                    rootClose={true}
                    rootCloseEvent={'click'}
                    placement="left"
                    containerPadding={20}
                    >
                    <Popover id="popover-contained">
                        <Popover.Header as="h3">Деталі</Popover.Header>
                        <Popover.Body>
                            <p>
                                {this.props.orderDetails}
                            </p>
                        </Popover.Body>
                    </Popover>
                </Overlay>
            </div>

        )
    }
}