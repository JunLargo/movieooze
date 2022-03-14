/*
<div>
      <h1>Movies</h1>
      <input 
        value = {filteredMovie}
        type="text" 
        placeholder="Search"
        onChange={(e) => searchMovie(e.target.value)}
      />
    </div>
    {movies.map((movie) => (
      <Link href={`/movies/${movie.id}`} key={movie.id}>
        <a>
          <div className="movieCard">
             <Image src={movie.image} width={600} height={400} layout="intrinsic" /> }
    //         <h2>{movie.fullTitle}</h2>
    //         <p>Crew: {movie.crew}</p>
    //         <p>Rank {movie.rank}</p>
    //         <p>Year: {movie.year}</p>
    //         <p>IMDBrating: {movie.imDbRating}</p>
    //       </div>
    //     </a>
    //   </Link>
    //    ))}
    // );