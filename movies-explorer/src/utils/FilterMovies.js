export const filterMovies = (movies, searchQuery, checked) => {
  if (!checked) {
    movies.filter((movie) => {
      return (((movie.nameRU && movie.nameRU.toLowerCase().indexOf(searchQuery) !== -1) || 
      (movie.nameEN && movie.nameEN.toLowerCase().indexOf(searchQuery) !== -1)) && movie.duration < 40)
    })
  } 
  return movies.filter((movie) => {
    return (movie.nameRU && movie.nameRU.toLowerCase().indexOf(searchQuery) !== -1) || 
    (movie.nameEN && movie.nameEN.toLowerCase().indexOf(searchQuery) !== -1)
  })
}


