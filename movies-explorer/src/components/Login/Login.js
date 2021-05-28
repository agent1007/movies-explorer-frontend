import { Link } from 'react-router-dom';

function Login() {
    return (
          <div className="register">
              <form className="register__form">
                <div className="register__inputs">
                <p className="register__input-text">E-mail</p>
                <input 
                  type="email" 
                  name='email'
                  className="register__input" 
                  id="email"  
                />
                <span 
                  id="email-error" 
                  className="error" 
                />
                <p className="register__input-text">Пароль</p>
                <input 
                  type="password" 
                  name='password'
                  className="register__input" 
                  id="password" 
                />
                <span 
                  id="password-error" 
                  className="error" 
                />
                </div>
                <button 
                  type="submit" 
                  className="register__submit-button"
                  >Войти
                </button>
              </form>
              <div className="register__container">
                <p className="regiser__text">Ещё не зарегистрированы?</p>
                <Link to="/signup" className="regiser__link">Регистрация</Link>
              </div>
          </div>
    );
  }
  
  export default Login;