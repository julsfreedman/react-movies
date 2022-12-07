import { useState, useEffect } from 'react'
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';

function App() {
  //State to hold movie data
  const [movie, setMovie] = useState(null)
  //variable with your apiKey
  const apiKey = "a941b08c"

  //Function to getMovies
  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)

      // Parse JSON response into a javascript object
      const data = await response.json();
      //set the Movie state to the movie
      setMovie(data)
    } catch (err) {
      console.error(err)
    }
  }

  //This will run on the first render but not on subsquent renders.  the [] array is necessary
  useEffect(() => {
    getMovie("Clueless");
  }, []);

  return (
    <div className="App">
      <Form getMovie={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;