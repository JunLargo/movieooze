import React from 'react';
import Image from 'next/image'

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie">
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <Image src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} height={400} width={400} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;