import React from 'react';
import './App.css';

import MoviesList from './components/MoviesList/MoviesList';
import BingeStats from "./components/BingeStats/BingeStats";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Horror Movie Binge 2020</h1>
          <p>Goal is to hit 365 for the year</p>
      </header>
        <div>

            <BingeStats/>
            <hr/>
            <h3>Movies watched in chronological order:</h3>
            <MoviesList />
            {/*<hr/>*/}
            {/*<hr/>*/}
            {/*<MoviesByYear />*/}
            {/*<hr/>*/}
            {/*<hr/>*/}
            {/*<PopularYears />*/}
        </div>
    </div>
  );
}

export default App;
