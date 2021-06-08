import poster from '../../images/noposter.png';
// import { useState, useEffect, useCallback } from 'react';

function MoviesCard({ duration, nameRU, image, trailerLink, movie, isMovieLiked, isSaved, setIsSaved, onAddLike, onRemoveLike, savedMovies, movies }) {


  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + 'ч ' + minutes + 'м';
  };
  const movieDuration = getTimeFromMins(duration);
  const url = movie?.image?.url ? `${'https://api.nomoreparties.co'}${movie?.image?.url}` : movie.image  || poster;
  
  function handelTransferYouTube() {
    window.open(trailerLink);
  }
  const isLiked = isMovieLiked(movie);

  const cardLikeButtonClassName = (
    `movies-card__like ${isLiked ? 'movies-card__like_active' : ''}`
  );
  const cardDeleteButtonClassName = (`movies-card__like_delete`);

  function changeLikeMovies() {
    if (!isLiked) {
      onAddLike({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: url,
        trailer: movie.trailerLink || movie.trailer,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN || 'Movie',
        thumbnail: url,
        movieId: movie.id || movie.movieId,
        owner: movie.owner,
      });
    } else {
      onRemoveLike({
        movieId: movie.id,
      });
    }
  }

  function removeLikeSavedMovies() {
    onRemoveLike({
      movieId: movie.movieId,
    });

  }

 const pathname = window.location.pathname === '/saved-movies';


  return (
    <div className="movies-card">
      <div className="movies-card__container">
        <h2 className="movies-card__title">{nameRU}</h2>
        <p className="movies-card__duration">{movieDuration}</p>
        <button className={pathname ? cardDeleteButtonClassName : cardLikeButtonClassName} onClick={!pathname ? changeLikeMovies : removeLikeSavedMovies}></button>
      </div>
      <img className="movies-card__image" src={url} alt={nameRU} onClick={handelTransferYouTube}></img>
    </div>
  );
}
export default MoviesCard;