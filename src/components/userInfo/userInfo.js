import {Component} from "react";
import "./userInfo.css"

export class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let {
            firstName,
            lastName,
            email,
            telNumber,
            service,
            countOfApplications,
            countOfHomeVisits,
            countOfDeliveries
        } = this.props.data;
        return (
            <>
                <section className="cards">
                    <section className="cardData userInfo">
                        <h2>
                            Доброго вечора
                        </h2>
                        <h2>
                            {firstName} {lastName}
                        </h2>
                    </section>
                    <section className="cardData userData">
                        <div className="data">
                            <div className="item email">
                                <p>
                                    Ваш email: <span className="dataText">{email}</span>
                                </p>
                            </div>
                            <div className="item number">
                                <p>
                                    Ваш номер телефону: <span className="dataText">{telNumber}</span>
                                </p>
                            </div>
                            <div className="item service">
                                <p>
                                    Ваша спеціальність: <span className="dataText">{service}</span>
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="cardData countOfApplications">
                        <div className="data">
                            <p>
                                Кількість замовлень
                            </p>
                            <p className={"count"}>
                                {countOfApplications}
                            </p>
                        </div>
                    </section>
                    <section className="cardData countOfHomeVisits">
                        <div className="data">
                            <p>
                                Кількість візитів додому
                            </p>
                            <p className={"count"}>
                                {countOfHomeVisits}
                            </p>
                        </div>
                    </section>
                    <section className="cardData countOfDeliveries">
                        <div className="data">
                            <p>
                                Кількість доставок
                            </p>
                            <p className={"count"}>
                                {countOfDeliveries}
                            </p>
                        </div>
                    </section>
                </section>

            </>
        )
    }
}