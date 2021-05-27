import Header from '../Header/header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import { Route, Switch } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import PageNotFound from '../PageNotfound/PageNotFound';
import Navigation from '../Navigation/Navigation';


function App() {
  return (
    <div className="App">
      <div className="body">
        <Preloader/>
        <div className="page">
        <Header/>
          <Switch>
          <Route path="/" exact>
            <Main/>
            <Footer/>
          </Route>
          
          <Route path="/signup">
            <Register/>
          </Route>

          <Route path="/signin">
            <Login/>
          </Route>

          <Route path="/profile">
            <Profile/>
            <Navigation/>
          </Route>

          <Route path="/movies">
            <Movies/>
            <Footer/>
            <Navigation/>
          </Route>

          <Route path="/saved-movies">
            <SavedMovies/>
            <Footer/>
            <Navigation/>
          </Route>
          
          <Route path="*">
            <PageNotFound />
          </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
