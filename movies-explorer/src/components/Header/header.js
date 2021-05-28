import { Route, Link } from 'react-router-dom';
import logo from '../../images/logo-header.svg';
import account from '../../images/icon-account.svg';
import burgerMenu from '../../images/burger.svg';

function Header() {
    return (
      <>
      <Route path="/" exact>
      <header className="header">
      <Link to="/"><img className="header__logo" src={logo} alt="Логотип"/></Link>
        <div className="header__container">
            <Link to="/signup" className="header__button-register">Регистрация</Link>
            <Link to="/signin" className="header__button-enter">Войти</Link>  
        </div>
      </header>
      </Route>
      <Route path="/signup">
      <header className="header header_register">
        <Link to="/"><img className="header__logo header__logo_dark-theme" src={logo} alt="Логотип"/></Link>
        <h1 className="header__title">Добро пожаловать!</h1>
      </header>
      </Route>
      <Route path="/signin">
      <header className="header header_register">
        <Link to="/"><img className="header__logo header__logo_dark-theme" src={logo} alt="Логотип"/></Link>
        <h1 className="header__title">Рады видеть!</h1>
      </header>
      </Route>
      <Route path="/profile">
      <header className="header header_profile">
        <Link to="/"><img className="header__logo header__logo_profile" src={logo} alt="Логотип"/></Link>
        <div className="header__container header__container_profile">
            <Link to="/movies" className="header__movies">Фильмы</Link>
            <Link to="/saved-movies" className="header__saved-movies">Сохранённые фильмы</Link>  
        </div>
        <Link to="/profile" className="header__profile" src={account}>
          <img className="header__profile-image" src={account} alt="Картинка аккаунта."></img> 
          <div className="header__profile-text">Аккаунт</div>
        </Link>
        <button className=" header__burger-menu" src={burgerMenu}></button>
      </header>
      </Route>
      <Route path="/movies">
      <header className="header header_profile">
        <Link to="/"><img className="header__logo header__logo_profile" src={logo} alt="Логотип"/></Link>
        <div className="header__container header__container_profile">
            <Link to="/movies" className="header__movies">Фильмы</Link>
            <Link to="/saved-movies" className="header__saved-movies">Сохранённые фильмы</Link>  
        </div>
        <Link to="/profile" className="header__profile">
          <img className="header__profile-image" src={account} alt="Картинка аккаунта."></img> 
          <div className="header__profile-text">Аккаунт</div>
        </Link>
        <button className=" header__burger-menu" src={burgerMenu}></button>
      </header>
      </Route>
      <Route path="/saved-movies">
      <header className="header header_profile">
        <Link to="/"><img className="header__logo header__logo_profile" src={logo} alt="Логотип"/></Link>
        <div className="header__container header__container_profile">
            <Link to="/movies" className="header__movies">Фильмы</Link>
            <Link to="/saved-movies" className="header__saved-movies">Сохранённые фильмы</Link>  
        </div>
        <Link to="/profile" className="header__profile" src={account}>
          <img className="header__profile-image" src={account} alt="Картинка аккаунта."></img> 
          <div className="header__profile-text">Аккаунт</div>
        </Link>
        <button className=" header__burger-menu" src={burgerMenu}></button>
      </header>
      </Route>
      

        {/* <Route path="/" exact>
        <header className="header header_menu">
        <img className="header__logo" src={logo} alt="Рисунок" />
          <div className="header__container">
            <p className="header__email">{email}</p>
            <button  className="header__button" onClick={onSignOut}>Выйти</button>  
          </div>
          </header>
        </Route>
        <Route path="/signin">
        <header className="header">
        <img className="header__logo" src={logo} alt="Рисунок" />  
          <Link to="/signup" className="header__link">Регистрация</Link>
          </header>  
        </Route>
        <Route path="/signup">
        <header className="header">
        <img className="header__logo" src={logo} alt="Рисунок" />
          <Link to="/signin" className="header__link">Войти</Link>
          </header>
        </Route> */}
      
    </>  
    );
  }
  
  export default Header;