import { Link } from 'react-router-dom';
import account from '../../images/icon-account.svg';
import { useEffect } from 'react';

function Navigation({ isOpen, onClose }) {


    useEffect(() => {
        if (!isOpen) return;
        const handleEscapeClose = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };
        document.addEventListener("keydown", handleEscapeClose);
        return () => {
            document.removeEventListener("keydown", handleEscapeClose);
        };
    }, [isOpen, onClose]);

    const handleOverlayClose = (event) => {
        if (event.target === event.currentTarget && isOpen) {
            onClose();
        }
    };


    return (
        <nav className={`navigation ${isOpen && "navigation_is-opened"}`}
            onMouseDown={handleOverlayClose}>
            <div className="navigation__container">
                <button className="navigation__close-button" onClick={onClose}></button>
                <div className="navigation__links">
                    <Link to="/" className="navigation__link" onClick={onClose}>Главная</Link>
                    <Link to="/movies" className="navigation__link" onClick={onClose}>Фильмы</Link>
                    <Link to="/saved-movies" className="navigation__link" onClick={onClose}>Сохранённые фильмы</Link>
                </div>
                <Link to="/profile" className="header__profile navigation__profile" onClick={onClose}>
                    <img className="header__profile-image" src={account} alt="Картинка аккаунта."></img>
                    <div className="header__profile-text">Аккаунт</div>
                </Link>
            </div>
        </nav>
    )
}

export default Navigation;