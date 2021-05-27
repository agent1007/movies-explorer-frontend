
function Portfolio() {

    return (
                <div className="portfolio">
                    <h3 className="portfolio__title">Портфолио</h3>
                    <div className="portfolio__rows">
                        <p className="portfolio__rows-text">Статичный сайт</p>
                        <a className="portfolio__rows-link" href="https://agent1007.github.io/russian-travel/"> </a>
                    </div>
                    <div className="portfolio__rows">
                        <p className="portfolio__rows-text" >Адаптивный сайт</p>
                        <a className="portfolio__rows-link" href="https://agent1007.github.io/russian-travel/" target="_blank" rel="noreferrer"> </a>
                    </div>
                    <div className="portfolio__rows">
                        <p className="portfolio__rows-text">Одностраничное приложение</p>
                        <a className="portfolio__rows-link" href="https://cool-mesto.nomoredomains.club/" target="_blank" rel="noreferrer"> </a>
                    </div>
                </div>
    );
}
  
export default Portfolio;