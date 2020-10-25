import React from "react";

import {sortByYear} from '../../services/movieListHelpers';
import {MovieObject} from "../../models/movieModels";

function MoviesList() {

    const getMovieLabel = (movie: MovieObject)=>{
        if(movie.imdbId){
            return <a href={'https://www.imdb.com/title/' + movie.imdbId}>{movie.Title}</a>
        } else{
            return movie.Title
        }
    }

    return (
        <table>
            {sortByYear().map(movie => (
                <tr>

                    <td>{getMovieLabel(movie)}</td>
                    <td>{movie.Year}</td>
                </tr>
            ))}
        </table>
    );
}

export default MoviesList;