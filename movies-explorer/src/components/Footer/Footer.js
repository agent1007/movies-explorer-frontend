function Footer() {

  
    return (
        <footer className="footer">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className="footer__container">
                <p className="footer__copyright">© 2021</p>
                <nav>
                <ul className="footer__links">
                    <li><a className="footer__link" href="https://praktikum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
                    <li><a className="footer__link" href="https://github.com/" target="_blank" rel="noreferrer">Github</a></li>
                    <li><a className="footer__link" href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a></li>
                </ul>
                </nav>
            </div>
        </footer>
    );
}
  
export default Footer;