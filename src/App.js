import { useEffect } from "react";
import { useState } from "react";
import MovieCard from "./MovieCard";


function App() {
  const API_URL = "https://api.themoviedb.org/3/movie/550?api_key=bdf3db4d8aeb9933ed740985ea11e646"
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setMovies(data.results))


  })
  return (
    <div className="App">
      <div className="search_nav">
        <h1> Movies</h1>
      </div>
      <div className="">
        <form action="">
          <input type="text" />
          <button> Search</button>
        </form>
      </div>
      <div className="movies">
        {movies.map((movie) => (
          <MovieCard {...movies} />
        ))}
      </div>

    </div>
  );
}

export default App;
