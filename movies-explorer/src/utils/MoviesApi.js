class MoviesApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  };

  _requestResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._baseUrl}`)
      .then((res) => this._requestResult(res))
  }
}

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies'
})


export default moviesApi;