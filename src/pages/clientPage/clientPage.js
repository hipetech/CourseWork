import {Component} from "react";
import './clientPage.css';
import {Card, Carousel} from "react-bootstrap";

export class ClientPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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
                                    src={"slider/slide_1.jpeg"}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3 className={"sliderText"}>First slide label</h3>
                                    <p className={"sliderText"}>Nulla vitae elit libero, a pharetra augue mollis
                                        interdum.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={"slider/slide_2.jpg"}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3 className={"sliderText"}>Second slide label</h3>
                                    <p className={"sliderText"}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </section>
                    <article className="aboutUs">
                        <Card className="text-center" style={{width: '100%'}}>
                            <h2>
                                Про наші послуги
                            </h2>
                            <p>
                                Несправність цифрової та комп'ютерної техніки завжди вносить дискомфорт у наше життя. Це
                                може зірвати робочий процес, позбавити вас цікавого дозвілля або обірвати зв'язок із
                                рідними та друзями. Для таких ситуацій і створено службу ремонту комп'ютерної техніки.
                                Яку з них обрати у Дніпрі? Звичайно фахівців з досвідом та відмінними відгуками.
                                Цільовий сегмент комп’ютерного сервісу включає
                                індивідуальних та корпоративних клієнтів, що використовують
                                комп’ютерну техніку.
                            </p>
                        </Card>
                    </article>
                    <article className="clientCardsArticle">
                        <h2>
                            Чого вы повинні обрати саме нас
                        </h2>
                        <div className="cardGroup">
                            <Card className="text-center" style={{width: '650px'}}>
                                <Card.Img variant="top" src="article/bookmark.svg"
                                          style={{width: '350px', margin: '0 auto'}}/>
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
                            <Card className="text-center" style={{width: '650px'}}>
                                <Card.Img variant="top" src="article/speed.svg"
                                          style={{width: '350px', margin: '0 auto'}}/>
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
                            <Card className="text-center" style={{width: '650px'}}>
                                <Card.Img variant="top" src="article/price-tag.svg"
                                          style={{width: '350px', margin: '0 auto'}}/>
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
            </>
        )
    }
}