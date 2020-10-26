import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

import './App.css';

import MoviesList from './components/MoviesList/MoviesList';
import BingeStats from "./components/BingeStats/BingeStats";
import MoviesByYear from "./components/moviesByYear/MoviesByYear";
import MoviesByDecade from "./components/moviesByDecade/MoviesByDecade";

export default function App() {
  return (
      <Router>
          <div className="App">
              <header className="App-header">
                  <h1>Horror Movie Binge 2020</h1>
                  <p>Goal is to hit 365 for the year</p>
              </header>
              <nav className="navMenu">
                  <Link to="/">Home</Link>
                  <Link to="/movies-by-year">Year totals</Link>
                  <Link to="/movies-by-decade">Decade totals</Link>
                  <Link to="/stats">Stats</Link>
              </nav>

              <Switch>

                  <Route path="/stats">
                      <BingeStats></BingeStats>
                  </Route>
                  <Route path="/movies-by-year">
                      <MoviesByYear></MoviesByYear>
                  </Route>
                  <Route path="/movies-by-decade">
                      <MoviesByDecade></MoviesByDecade>
                  </Route>
                  <Route path="/">
                      <MoviesList></MoviesList>
                  </Route>
              </Switch>

          </div>




      </Router>


    // <div className="App">
    //     {/*<Link to="/">Home</Link>*/}
    //     <header className="App-header">
    //       <h1>Horror Movie Binge 2020</h1>
    //       <p>Goal is to hit 365 for the year</p>
    //         <Link to={"/"}></Link>
    //     </header>
    //     <div>
    //         <Route path="/" component={MoviesList}></Route>
    //         <Route path="/stats" component={BingeStats}></Route>
    //         {/*<BingeStats/>*/}
    //         {/*<hr/>*/}
    //         {/*<h3>Movies watched in chronological order:</h3>*/}
    //         {/*<MoviesList />*/}
    //     </div>
    // </div>
  );
}