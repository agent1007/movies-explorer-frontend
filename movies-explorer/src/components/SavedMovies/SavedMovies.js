import MoviesCard from '../MoviesCard/MoviesCard'
import SearchForm from '../SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation';
import { filterMovies } from '../../utils/FilterMovies';
import { useState, useEffect } from 'react';
import Preloader from '../Preloader/Preloader';


function SavedMovies({ setSavedMovies, savedMovies, isMovieLiked, checked, setChecked, movieCounter, setMovieCounter, shortMovies, setShortMovies,
  onMoviesLike, isLiked, onRemoveLike, onAddLike, isSaved, isPreloader, isMovieLoadError }) {

  // отфильтрованные фильмы
  const [filteredMovies, setFilteredMovies] = useState([]);
  // отфильтрованные фильмы по длительности

  // строка поиска фильмов
  const [searchQuery, setSearchQuery] = useState('');

  // запись значения поля ввода при нажатии на кнопку
  const [searchButton, setSearchButton] = useState('');

  const handleSearchQuery = () => {
    setSearchQuery(searchQuery);
    setSearchButton(searchQuery);
  }

  const emptyMovieBlock = filteredMovies.length === 0;
  const filtred = filterMovies(savedMovies, searchQuery);

  useEffect(() => {
    setSavedMovies(savedMovies);
    setFilteredMovies(filtred);

    localStorage.setItem('filteredSavedMovies', JSON.stringify(savedMovies))
  }, [searchButton, savedMovies])

  const shortFilm = filteredMovies.filter((item) => item.duration < 40)
  const handleShortMoviesFilter = () => {
    setChecked(!checked);
    const display = shortFilm.slice(0, 4)
    setShortMovies(display);
    setMovieCounter(4);
  };
  return (
    <section className="movies">
      <SearchForm
        onSubmit={handleSearchQuery}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        checked={handleShortMoviesFilter}
      />
      <div className="movies-card-list movies-card-list_saved-movies">
        {isPreloader || isMovieLoadError ?
          (isPreloader ?
            <Preloader /> :
            <p className="movies-card-list__loading">«Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз»</p>)
          :
          (emptyMovieBlock ? (<p className="movies-card-list__loading">«Ничего не найдено»</p>) : (
            (!checked ? filteredMovies : shortMovies).map(movie => {
              return (<MoviesCard
                key={movie.movieId}
                {...movie}
                movie={movie}
                onMoviesLike={onMoviesLike}
                isLiked={isLiked}
                onRemoveLike={onRemoveLike}
                onAddLike={onAddLike}
                isSaved={isSaved}
                isMovieLiked={isMovieLiked}
              />)
            })))}
      </div>
      <Navigation />
    </section>
  );
}

export default SavedMovies;