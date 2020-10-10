import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movies from './data/movies.json';

import MoviesList from './components/MoviesList/MoviesList';
import MoviesByYear from './components/moviesByYear/MoviesByYear';
import PopularYears from "./components/PopularYears/PopularYears";


function sortByYear() {
    const moviesList = Movies.Movies;
    return moviesList.sort((a, b) => (a.Year > b.Year) ? 1 : -1);
}

function sortByTitle() {
    const moviesList = Movies.Movies;
    return moviesList.sort((a, b) => (a.Title > b.Title) ? 1 : -1);
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Horror Movie Binge 2020</h1>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
        {/*  Edit <code>src/App.tsx</code> and save to reload.*/}
        {/*</p>*/}


        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
      </header>
        <div>

            <hr/>
            <hr/>
            <MoviesList />
            <hr/>
            <hr/>
            <MoviesByYear />
            <hr/>
            <hr/>
            <PopularYears />
        </div>
    </div>
  );
}

export default App;
