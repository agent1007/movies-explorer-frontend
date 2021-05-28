
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
    return (
        <div className="search-form">
            <form className="search-form__bar">
                <input className="search-form__bar-input" type="text" name='name-film' id="name-film-input" required/>
                <span id="name-film-input-error" className="error"/>
                <button type="submit" className="search-form__bar-button"></button>   
            </form>
            <div className="search-form__chapter">Короткометражки</div>
            <FilterCheckbox/>
        </div>
    );
  }
  
  export default SearchForm;