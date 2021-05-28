import CardImage from '../../images/card-image.svg'

function MoviesCard() {
    return (
          <div className="movies-card">
            <div className="movies-card__container">
              <h2 className="movies-card__title">33 слова о дизайне</h2>
              <p className="movies-card__duration">1ч 42м</p>
              <button className="movies-card__like"></button>
            </div>
            <img className="movies-card__image" src={CardImage} alt="Фото из фильма."></img>
          </div>
    );
  }
  
  export default MoviesCard;