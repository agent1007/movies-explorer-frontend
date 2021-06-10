import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {

  
    return (
        <section className="about-me">
                <h2 className="title">Студент</h2>
                <div className="about-me__profile">
                    <div className="about-me__profile-info">
                        <p className="about-me__name">Павел</p>
                        <p className="about-me__profession">Фронтенд-разработчик, 30 лет</p>
                        <p className="about-me__description">Я живу в Санкт-Петербурге, закончил факультет КЭиА СПбГМТУ. У меня есть жена 
                                                             и сын. Я люблю слушать музыку, а ещё увлекаюсь спортом. Недавно начал кодить. 
                                                             После того, как прошёл курс по веб-разработке, хочу начать заниматься фриланс-заказами 
                                                             и совмещать с постоянной работы.
                        </p>
                        <nav>
                        <ul className="about-me__links">
                            <li><a className="about-me__link" href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a></li>
                            <li><a className="about-me__link" href="https://github.com/" target="_blank" rel="noreferrer">Github</a></li>
                        </ul>
                        </nav>
                    </div>
                    <div className="about-me__image"></div>
                </div>
                <Portfolio/>
            </section>
    );
}
  
export default AboutMe;