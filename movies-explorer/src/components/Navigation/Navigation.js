import { Link } from 'react-router-dom';
import account from '../../images/icon-account.svg';

function Navigation() {

    return (
        <nav className="navigation">
            <div className="navigation__container">
                <button className="navigation__close-button"></button>
                <div className="navigation__links">
                    <Link to="/" className="navigation__link">Главная</Link>
                    <Link to="/movies" className="navigation__link">Фильмы</Link>
                    <Link to="/saved-movies" className="navigation__link">Сохранённые фильмы</Link>
                </div>
                <Link to="/profile" className="header__profile navigation__profile" >
                    <img className="header__profile-image" src={account} alt="Картинка аккаунта."></img> 
                    <div className="header__profile-text">Аккаунт</div>
                </Link>
            </div>
        </nav>
    )
}
          
export default Navigation;