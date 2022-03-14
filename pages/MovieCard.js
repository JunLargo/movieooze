import React from 'react';
import Image from 'next/image';

const MovieCard = ({movie}) => {
  return (
    <div className="movie">
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
  );
}
 
export default MovieCard;