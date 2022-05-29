import {Component} from "react";
import "./userInfo.css"

export class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dayPeriod: ''
        }
    }

    setDayPeriod = () => {
        const hours = new Date().getHours();

        if (hours > 4 && hours <= 11) {
            this.setState({dayPeriod: 'Доброго ранку'})
        } else if (hours > 11 && hours <= 15) {
            this.setState({dayPeriod: 'Доброго дня'})
        } else if (hours > 15 && hours <= 22) {
            this.setState({dayPeriod: 'Доброго вечора'})
        } else {
            this.setState({dayPeriod: 'Доброї ночі'})
        }
    }


    orderCount = () => {
        let counter = 0;

        this.props.applications.forEach((el) => {
            if (el.status === 'to do' || el.status === 'in progress') {
                counter += 1;
            }
        })

        return counter;
    }

    homeVisitCount = () => {
        let counter = 0;

        this.props.applications.forEach((el) => {
            if (el.homeVisit && el.status !== 'done') {
                counter += 1;
            }
        })

        return counter;
    }

    deliveryCount = () => {
        let counter = 0;

        this.props.applications.forEach((el) => {
            if (el.delivery && el.status !== 'done') {
                counter += 1;
            }
        })

        return counter;
    }

    componentDidMount() {
        this.setDayPeriod();
    }

    render() {
        let {
            first_name,
            last_name,
            email,
            phone_number,
            service
        } = this.props.data;

        let countOfApplications = this.orderCount();
        let countOfHomeVisits = this.homeVisitCount();
        let countOfDeliveries = this.deliveryCount();

        return (
            <>
                <section className="cards">
                    <section className="cardData userInfo">
                        <h2>
                            {this.state.dayPeriod}
                        </h2>
                        <h2>
                            {first_name} {last_name}
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
                                    Ваш номер телефону: <span className="dataText">{phone_number}</span>
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