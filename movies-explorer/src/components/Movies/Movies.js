import MoviesCard from '../MoviesCard/MoviesCard'
import ButtonAddMore from '../ButtonAddMore/ButtonAddMore';
import SearchForm from '../SearchForm/SearchForm';

function Movies() {
    return (
      <section className="movies">
        <SearchForm/>
        <div className="movies-card-list">
          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>
        </div>
        <ButtonAddMore/>
      </section>
    );
  }
  
  export default Movies;