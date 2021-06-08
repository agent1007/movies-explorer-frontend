import { Link, useHistory } from 'react-router-dom';
import { useFormWithValidation } from '../hooks/useForm';

function Login({ onLogin, isMovieLoadError, setIsMovieLoadError }) {
  const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsMovieLoadError('')
    if (!values.password || !values.email) {
      return;
    }
    onLogin(values)
      .then(resetForm)
      .then(() => history.push('/movies'))

      .catch((err) => setIsMovieLoadError(err))
  }

  return (
    <div className="register">
      <form className="register__form" onSubmit={handleSubmit}>
        <div className="register__inputs">
          <div className="register__input-container">
            <p className="register__input-text">E-mail</p>
            <input
              type="email"
              name='email'
              className="register__input"
              id="email"
              value={values.email || ''}
              onChange={handleChange}
              required minLength={2} maxLength={40}
            />
            <span
              id="email-error"
              className="error error_register"
            > {errors.email || ''}</span>
          </div>
          <div className="register__input-container">
            <p className="register__input-text">Пароль</p>
            <input
              type="password"
              name='password'
              className="register__input"
              id="password"
              value={values.password || ''}
              onChange={handleChange}
              required minLength={2} maxLength={40}
            />
            <span
              id="password-error"
              className="error error_register"
            > {errors.password || ''}</span>
          </div>
        </div>
        {!isMovieLoadError ? ('') : (<p className="register__loading">{isMovieLoadError}</p>)}
        <button
          type="submit"
          className={`register__submit-button ${!isValid && "register__submit-button_disabled"
            }`}
          disabled={!isValid}
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