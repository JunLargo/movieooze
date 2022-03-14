import React, { useState, useEffect } from "react";
import Image from 'next/image'

import SearchIcon from "./search.svg";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("movie");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`http://www.omdbapi.com?apikey=${process.env.omdbkey}&s=${title}`, {
      method: "POST",
        headers: {
            "Content-Type": "text/plain"
            },
        body: JSON.stringify()
    });
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <Image
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
          height={30}
          width={30}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <div className="movie" key={movie.imdbID}>
            <div>
              <p>{movie.Year}</p>
            </div>
      
            <div>
              <Image src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} height={400} width={400} />
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
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default Home;