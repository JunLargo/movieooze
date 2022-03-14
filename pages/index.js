import {useState, useEffect} from 'react';
// import SearchIcon from './search.svg'
import MovieCard from './MovieCard'

//const API_URL = 'http://www.omdbapi.com?apikey=3baa3878';

const Home = () => {

  const [movies, setMovies] = useState([]);
  //const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = async (title) => {
    //const response = await fetch(`${API_URL}&s=${title}`);
    const response = await fetch(`http://www.omdbapi.com?apikey=${process.env.omdbkey}&s=${title}`);
    const data = await response.json();

    //console.log(data.Search);
    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies('movie')
  }, []);

  return (
    
    <div className="app">
      <h1><a href="/">Movieooze</a></h1>
      <div className="search">
        <input 
          //value= ""
          placeholder="Search movie title ..."
          //onChange={(e) => setSearchTerm(e.target.value)}
          onChange={(e) => searchMovies(e.target.value)}
        />
        {/* <img 
          src={SearchIcon} 
          alt="search"
          onClick={() => searchMovies(searchTerm)} 
        /> */}
      </div>

      
      {movies?.length > 0
          ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie = {movie} key={movie.imdbID} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found. Please try to search again.</h2>
            </div>
          )}
    </div>
  );
}
 
export default Home;