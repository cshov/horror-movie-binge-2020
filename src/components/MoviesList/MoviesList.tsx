import React from "react";

import {sortByYear} from '../../services/movieListHelpers';

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