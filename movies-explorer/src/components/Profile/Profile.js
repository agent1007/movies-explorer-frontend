function Profile() {
    return (
          <div className="profile">
                <h2 className="profile__title">Привет, Павел!</h2>
                <form className="profile__form">
                    <div className="profile__inputs">
                        <div className="profile__input-container">
                            <p className="profile__input-text">Имя</p>
                            <input 
                                type="text" 
                                name='name'
                                className="profile__input" 
                                id="name"
                            />
                            <span 
                                id="name-error" 
                                className="error" 
                            />
                        </div>
                        <div className="profile__input-container">
                            <p className="profile__input-text">E-mail</p>
                            <input 
                                type="email" 
                                name='email'
                                className="profile__input" 
                                id="email"
                            />
                            <span 
                                id="email-error" 
                                className="error" 
                            />
                        </div>
                    </div>
                    <button 
                        type="submit" 
                        className="profile__submit-button"
                        >Редактировать
                    </button>
              </form>
              <button className="profile__close-button">Выйти из аккаунта</button>
          </div>
    );
  }
  
  export default Profile;