import React from "react";
import Movies from "../../data/movies.json";
import {sortByYear} from '../../services/movieListHelpers';


// function sortByYear() {
//     const moviesList = Movies.Movies;
//     return moviesList.sort((a, b) => (a.Year > b.Year) ? 1 : -1);
// }

// function sortByTitle() {
//     const moviesList = Movies.Movies;
//     return moviesList.sort((a, b) => (a.Title > b.Title) ? 1 : -1);
// }

function MoviesList() {
    return (
        <table>

            {sortByYear().map(movie => (
                <tr>
                    <td>{movie.Title}</td>
                    <td>{movie.Year}</td>
                </tr>
            ))}

        </table>
    );
}

export default MoviesList;