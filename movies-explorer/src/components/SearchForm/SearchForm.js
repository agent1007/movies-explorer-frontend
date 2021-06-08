
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onSubmit, searchQuery, setSearchQuery, checked }) {

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit();
    }
    return (
        <div className="search-form">
            <form className="search-form__bar" onSubmit={handleSubmit}>
                <input className="search-form__bar-input" type="text" name='name-film' id="name-film-input" required
                    value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <span id="name-film-input-error" className="error" />
                <button type="submit" className="search-form__bar-button" ></button>
            </form>
            <div className="search-form__chapter">Короткометражки</div>
            <FilterCheckbox checked={checked} />
        </div>
    );
}

export default SearchForm;