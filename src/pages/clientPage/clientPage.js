import {Component} from "react";
import './clientPage.css';
import {Button, Card, Carousel, Form} from "react-bootstrap";
import AOS from 'aos';
import {ClientForm} from "../../components/clientForm/clientForm";

export class ClientPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        AOS.init({
            duration: 1000,
            offset: 600
        });
    }

    render() {
        return (
            <>
                <div className="contentContainer">
                    <section className="slider">
                        <Carousel variant="dark">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={"slider/slide_1.svg"}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={"slider/slide_2.svg"}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </section>
                    <article className="clientCardsArticle">
                        <h2>
                            Чого вы повинні обрати саме нас
                        </h2>
                        <div className="cardGroup">
                            <Card className="text-center" style={{width: '70%'}} data-aos="fade-right">
                                <Card.Img variant="top" src="article/bookmark.svg"
                                          style={{width: '40%', margin: '10px auto'}}/>
                                <Card.Body>
                                    <Card.Title>
                                        Гарантія
                                    </Card.Title>
                                    <Card.Text>
                                        Ви обов'язково отримуєте акт виконаних робіт, завдяки якому Ви можете бути
                                        впевнені в якості виконання робіт. Гарантійні терміни змінюються залежно від
                                        виду виконаних ремонтних робіт.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="text-center" style={{width: '70%'}} data-aos="fade-left">
                                <Card.Img variant="top" src="article/speed.svg"
                                          style={{width: '40%', margin: '10px auto'}}/>
                                <Card.Body>
                                    <Card.Title>
                                        Швидкість
                                    </Card.Title>
                                    <Card.Text>
                                        Ми докладаємо всіх зусиль для виконання роботи в найкоротші терміни. Також,
                                        невід'ємною частиною сервісу є узгодження з Вами конкретних термінів ремонтних
                                        робіт перед безпосереднім проведенням.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="text-center" style={{width: '70%'}} data-aos="fade-right">
                                <Card.Img variant="top" src="article/price-tag.svg"
                                          style={{width: '40%', margin: '10px auto'}}/>
                                <Card.Body>
                                    <Card.Title>
                                        Ціна
                                    </Card.Title>
                                    <Card.Text>
                                        Безперечною перевагою нашого сервіс-центру залишаються доступні ціни.
                                        Використовуючи наші послуги, Ви завжди можете бути впевнені, що для ремонту
                                        будуть використані тільки якісні деталі за розумними цінами.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </article>
                </div>
                <section className="clientForm" >
                    <ClientForm />
                </section>
            </>
        )
    }
}