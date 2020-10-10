import Movies from "../data/movies.json";
import {MovieObject, MoviesList, YearObject} from "../models/movieModels";

function sortByYear(): MovieObject[]{
    const MoviesResponse: MoviesList = Movies;
    const moviesList: MovieObject[] = MoviesResponse.Movies;
    return moviesList.sort((a: MovieObject, b: MovieObject) => (a.Year > b.Year) ? 1 : -1);
}

function sortByTitle(): MovieObject[] {
    const MoviesResponse: MoviesList = Movies;
    const moviesList: MovieObject[] = MoviesResponse.Movies;
    return moviesList.sort((a: MovieObject, b: MovieObject) => (a.Title > b.Title) ? 1 : -1);
}

function getYearsList(): YearObject[] {
    const yearsList: YearObject[] = [];

    const moviesList: MovieObject[] = sortByYear();

    moviesList.forEach((movie: MovieObject) => {
        const year = yearsList.find(((year: YearObject) => {return year.Year === movie.Year}));

        if(year) {
            year.Total += 1;
        } else {
           const newYearObject: YearObject = {
               Year: movie.Year,
               Total: 1
           } ;
           yearsList.push(newYearObject);
        }
    });

    return yearsList;
}

function sortYearsByMoviesWatched() {
    const numbersByYear: YearObject[] = getYearsList();

    // const arrayOfEntries = Object.entries(numbersByYear);

    return numbersByYear.sort((a: YearObject,b:YearObject) => (a.Total > b.Total) ? 1 : -1);
}



export {sortByYear, sortByTitle, sortYearsByMoviesWatched, getYearsList};