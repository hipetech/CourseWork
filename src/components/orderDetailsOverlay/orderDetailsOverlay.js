
import {Button, Overlay, Popover} from "react-bootstrap";
import {useState} from "react";

export const OrderDetailsOverlay = ({orderDetails}) => {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    let [buttonText, setButtonText] = useState('Показати')

    const handleClick = (event) => {

        if (buttonText === "Показати") {
            setButtonText("Закрити");
        } else {
            setButtonText("Показати");
        }

        setShow(!show);
        setTarget(event.target);
    };

    return (
        <div>
            <Button onClick={handleClick}>{buttonText}</Button>

            <Overlay
                show={show}
                target={target}
                placement="left"
                containerPadding={20}
            >
                <Popover id="popover-contained">
                    <Popover.Header as="h3">Деталі</Popover.Header>
                    <Popover.Body>
                        <p>
                            {orderDetails}
                        </p>
                    </Popover.Body>
                </Popover>
            </Overlay>
        </div>
    );
}