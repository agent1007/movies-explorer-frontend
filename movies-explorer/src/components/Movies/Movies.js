import MoviesCard from '../MoviesCard/MoviesCard'
import ButtonAddMore from '../ButtonAddMore/ButtonAddMore';
import SearchForm from '../SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation';
import { filterMovies } from '../../utils/FilterMovies';
import { useState, useEffect } from 'react';
import Preloader from '../Preloader/Preloader';


function Movies({ onAddPlace, onMoviesLike, isSaved, checked, setChecked, movieCounter, setMovieCounter, shortMovies, setShortMovies,
  setIsSaved, movies, savedMovies, onAddLike, onRemoveLike, isMovieLiked, isPreloader, isMovieLoadError }) {

  // отфильтрованные фильмы
  const [filteredMovies, setFilteredMovies] = useState([]);

  // отображаемые фильмы
  const [displayedMovies, setDisplayedMovies] = useState([]);

  // строка поиска фильмов
  const [searchQuery, setSearchQuery] = useState('');

  // запись значения поля ввода при нажатии на кнопку
  const [searchButton, setSearchButton] = useState('');




  const handleSearchQuery = () => {
    setSearchQuery(searchQuery);
    if (!movies.length) {
      onAddPlace();
    }
    setSearchButton(searchQuery);
  }


  const emptyMovieBlock = filteredMovies.length === 0;
  const filtred = filterMovies(movies, searchQuery, checked);
  const shortFilm = filteredMovies.filter((item) => item.duration < 40)

  const handleShortMoviesFilter = () => {
    setChecked(!checked);
    const display = shortFilm.slice(0, 4)
    setShortMovies(display);
    setMovieCounter(4);
  };



  useEffect(() => {
    if (searchQuery) {
      const display = filtred.slice(0, 4)
      setFilteredMovies(filtred);
      setDisplayedMovies(display);
      setMovieCounter(4);
      localStorage.setItem('filteredMovies', JSON.stringify(filtred))
    }
  }, [searchButton, movies, checked])

  const partFiltred = (data) => data.slice(movieCounter, movieCounter + 4)

  const handleClickAddMore = () => {
    if (!checked) {
      setDisplayedMovies([...displayedMovies, ...partFiltred(filtred)]);
      setMovieCounter(movieCounter + 4);
    } else {
      setShortMovies([...shortMovies, ...partFiltred(shortFilm)]);
      setMovieCounter(movieCounter + 4);
    }
  }

  // классы кнопки ЕЩЁ
  const AddMoreButtonClassName = (
    `button-add-more ${(!checked ? (partFiltred(filtred).length === 0) : (partFiltred(shortFilm).length === 0)) ? 'button-add-more_block' : ''}`
  );;

  return (
    <section className="movies">
      <SearchForm
        onSubmit={handleSearchQuery}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        checked={handleShortMoviesFilter}
      />
      <div className="movies-card-list">
        {isPreloader || isMovieLoadError ?
          (isPreloader ?
            <Preloader />
            :
            <p className="movies-card-list__loading">«Во время запроса произошла ошибка.
            Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз»
            </p>)
          :
          (emptyMovieBlock ? (<p className="movies-card-list__loading">«Ничего не найдено»</p>)
            :
            ((!checked ? displayedMovies : shortMovies).map(movie => {
              return (<MoviesCard
                key={movie.id}
                {...movie}
                movie={movie}
                onMoviesLike={onMoviesLike}
                isSaved={isSaved}
                setIsSaved={setIsSaved}
                movies={movies}
                onAddLike={onAddLike}
                onRemoveLike={onRemoveLike}
                savedMovies={savedMovies}
                isMovieLiked={isMovieLiked}
              />)
            })))}
      </div>
      <ButtonAddMore
        handleClick={handleClickAddMore}
        AddMoreButtonClassName={AddMoreButtonClassName}
      />
      <Navigation />
    </section>
  );
}

export default Movies;