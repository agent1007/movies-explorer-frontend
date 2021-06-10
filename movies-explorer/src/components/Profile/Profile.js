import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useEffect, useContext } from 'react';
import { useFormWithValidation } from '../hooks/useForm';
import { useHistory } from 'react-router-dom';

function Profile({ onSignOut, onUpdateUser, isMovieLoadError, setIsMovieLoadError }) {
    const { values, errors, isValid, handleChange, setValues } = useFormWithValidation();
    const history = useHistory();
    const currentUser = useContext(CurrentUserContext);


    const handleSubmita = (e) => {
        e.preventDefault();
        onSignOut()
        history.push('/');
    }

    useEffect(() => {
        if (currentUser) {
            setValues({
                name: currentUser.name,
                email: currentUser.email
            })
        }
    }, [currentUser]);

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser(values)
    }

    return (
        <div className="profile">
            <h2 className="profile__title">Привет, {values.name}!</h2>
            <form className="profile__form" onSubmit={handleSubmit}>
                <div className="profile__inputs">
                    <div className="profile__input-container">
                        <p className="profile__input-text">Имя</p>
                        <input
                            type="text"
                            name='name'
                            className="profile__input"
                            id="name"
                            value={values.name || ''}
                            onChange={handleChange}
                            minLength='2'
                            maxLength='40'
                            pattern='[a-zA-Zа-яА-Я -]{1,}'
                            required
                        />
                        <span
                            id="name-error"
                            className="error"
                        > {errors.name || ''}</span>
                    </div>
                    <div className="profile__input-container">
                        <p className="profile__input-text">E-mail</p>
                        <input
                            type="email"
                            name='email'
                            className="profile__input"
                            id="email"
                            value={values.email || ''}
                            onChange={handleChange}
                            required
                        />
                        <span
                            id="email-error"
                            className="error"
                        > {errors.email || ''}</span>
                    </div>
                </div>
                <button
                    type="submit"
                    className={`profile__submit-button ${!isValid && "profile__submit-button_disabled"
                        }`}
                    disabled={!isValid}
                >Редактировать
                </button>
            </form>
            <button className="profile__close-button" onClick={handleSubmita}>Выйти из аккаунта</button>
        </div>
    );
}

export default Profile;