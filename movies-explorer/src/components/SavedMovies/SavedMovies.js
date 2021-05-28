import MoviesCard from '../MoviesCard/MoviesCard'
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies() {
    return (
      <section className="movies">
        <SearchForm/>
        <div className="movies-card-list movies-card-list_saved-movies">
          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>
        </div>
      </section>
    );
  }
  
  export default SavedMovies;