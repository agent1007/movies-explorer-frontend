import Header from '../Header/header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import PageNotFound from '../PageNotfound/PageNotFound';
import Navigation from '../Navigation/Navigation';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import * as auth from '../../utils/auth';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {

  const initialData = {
    name: '',
    email: '',
    password: ''
  }
  const history = useHistory();
  const location = useLocation();

  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState(initialData)
  const [currentUser, setCurrentUser] = useState({});
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  function openNavigation() {
    setIsNavigationOpen(true);
  }
  function closeNavigation() {
    setIsNavigationOpen(false);
  }


  const handleRegister = ({ name, email, password }) => {
    return auth.register(name, email, password)
      .then((res) => {
        history.push('/movies');
        return res;
      })
  }

  const handleLogin = ({ email, password }) => {
    return auth.login(email, password)
      .then(res => {
        if (!res || res.statusCode === 400) throw new Error('Что-то пошло не так');
        if (res.token) {
          setData({ email })
          localStorage.setItem('jwt', res.token);
          setLoggedIn(true);
        };
      })
  }

  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    setData(initialData);
    setLoggedIn(false);
    history.push('/signin');
  }

  const tokenCheck = useCallback(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi.getUserData()
        .then((res) => {
          if (res) {
            setData({
              name: res.name,
              email: res.email,
            })
            setLoggedIn(true);
            history.push(location.pathname)
          }
        })
        .catch((res) => {
          history.push('/signin')
        })
    }
  }, [history])

  useEffect(() => {
    tokenCheck();
  }, [tokenCheck])

  function handleUpdateUser(data) {
    mainApi.editProfile(data)
      .then(data => {
        setCurrentUser(data);
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    if (loggedIn) {
      mainApi.getUserData()
        .then(data => {
          setCurrentUser(data);
        })
        .catch(err => console.log(err))
    }
  }, [loggedIn])


  const [isPreloader, setIsPreloader] = useState(false);
  const [isMovieLoadError, setIsMovieLoadError] = useState('');

  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isSaved, setIsSaved] = useState(false);

  // положение чекбокса
  const [checked, setChecked] = useState(false);

  // короткие фильмы
  const [shortMovies, setShortMovies] = useState([]);

  // счетчик отображаемых фильмов
  const [movieCounter, setMovieCounter] = useState(0);

  function getAddMovies() {
    setIsPreloader(true);
    setIsMovieLoadError('');
    if (loggedIn) {
      moviesApi.getMovies()
        .then(res => {
          setMovies(res)
        })
        .catch(err => setIsMovieLoadError(err))
        .finally(() => setIsPreloader(false))
    }
  }

  const handleAddLike = (movie) => {
    mainApi.addCardLike(movie)
      .then((movies) => {
        setSavedMovies([...savedMovies, movies]);
      })
      .catch(err => console.log(`Добавление фильма: ${err}`))
  }

  const handleRemoveLikeMovie = (movie) => {
    const savedFilm = savedMovies.find(item => item.movieId === movie.movieId)
    mainApi.deleteCardLike(savedFilm._id)
      .then(() => {
        setSavedMovies((state) => state.filter((c) => c._id !== savedFilm._id));
      })
      .catch(err => console.log(`Удаление фильма: ${err}`))
  }



  const isMovieLiked = (movie) => savedMovies.some(item => item.movieId === movie.id);

  useEffect(() => {
    if (loggedIn) {
      mainApi.getInitialSavedMoviesCards()
        .then(res => {
          setSavedMovies(res)
        })
        .catch(err => console.log(err))
    }
    setSavedMovies(savedMovies);
    localStorage.setItem('filteredSavedMovies', JSON.stringify(savedMovies))
  }, [loggedIn]);

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="body">

          <div className="page">
            <Header
              loggedIn={loggedIn}
              openNavigation={openNavigation} />
            <Switch>
              <Route path="/" exact>
                <Main />
              </Route>

              <ProtectedRoute path="/movies"
                loggedIn={loggedIn}
                component={Movies}
                onAddPlace={getAddMovies}
                movies={movies}
                onAddLike={handleAddLike}
                onRemoveLike={handleRemoveLikeMovie}
                isSaved={isSaved}
                setIsSaved={setIsSaved}
                savedMovies={savedMovies}
                isMovieLiked={isMovieLiked}
                isPreloader={isPreloader}
                isMovieLoadError={isMovieLoadError}
                checked={checked}
                setChecked={setChecked}
                movieCounter={movieCounter}
                setMovieCounter={setMovieCounter}
                shortMovies={shortMovies}
                setShortMovies={setShortMovies}
              />

              <ProtectedRoute path="/saved-movies"
                loggedIn={loggedIn}
                component={SavedMovies}
                savedMovies={savedMovies}
                setSavedMovies={setSavedMovies}
                onAddLike={handleAddLike}
                onRemoveLike={handleRemoveLikeMovie}
                isMovieLiked={isMovieLiked}
                history={history}
                isPreloader={isPreloader}
                isMovieLoadError={isMovieLoadError}
                checked={checked}
                setChecked={setChecked}
                movieCounter={movieCounter}
                setMovieCounter={setMovieCounter}
                shortMovies={shortMovies}
                setShortMovies={setShortMovies}
              />

              <ProtectedRoute path="/profile"
                loggedIn={loggedIn}
                component={Profile}
                onUpdateUser={handleUpdateUser}
                onSignOut={handleSignOut}
                Name={data.name}
              />

              <Route path="/signin">
                <Login
                  onLogin={handleLogin}
                  isMovieLoadError={isMovieLoadError}
                  setIsMovieLoadError={setIsMovieLoadError} />
              </Route>

              <Route path="/signup">
                <Register
                  onRegister={handleRegister}
                  isMovieLoadError={isMovieLoadError}
                  setIsMovieLoadError={setIsMovieLoadError} />
              </Route>

              {/* <Route>
                {loggedIn ? <Redirect to='/movies' /> : <Redirect to='/signup' />}
              </Route> */}

              <Route path="*">
                <PageNotFound
                  history={history} />
              </Route>
            </Switch>
            <Navigation
              isOpen={isNavigationOpen}
              onClose={closeNavigation} />
          </div>
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;



