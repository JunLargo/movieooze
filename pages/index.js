import {useState, useEffect} from 'react';
import Link from 'next/link'
import Image from 'next/image'

const Home = () => {

  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`http://www.omdbapi.com?apikey=${process.env.omdbkey}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies('movie')
  }, []);

  return (
    
    <div className="app">
      <Link href='/'>
        <h1><a>Movieooze</a></h1>
      </Link>
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
                  <div className="movie" key={movie.imdbID}>
                    <div>
                      <p>{movie.Year}</p>  
                    </div>
                    <div>
                      <Image src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} height={400} width={400} alt={movie.Title}/>
                    </div>
                    <div>
                      <span>{movie.Type}</span>
                      <h3>{movie.Title}</h3>  
                    </div>  
                  </div>
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