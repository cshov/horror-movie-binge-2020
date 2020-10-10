import Movies from "../data/movies.json";
import {MovieObject, MoviesList, YearObject} from "../models/movieModels";

function getDaysLeft(): number {
    const CurrentDate = new Date();
    const TDay = new Date(2020, 11, 31);
    // @ts-ignore
    const timeDiff = TDay - CurrentDate;
    const millisecondsPerDay = 1000*60*60*24;
    const DayCount = timeDiff / millisecondsPerDay;
    return Math.round(DayCount);
}

function getNumberMovies(): number {
    const MoviesResponse: MoviesList = Movies;
    const moviesList: MovieObject[] = MoviesResponse.Movies;
    return moviesList.length;
}

function getNumberMoviesToReachGoal(): string {
    const daysLeft = getDaysLeft();

    const MoviesResponse: MoviesList = Movies;
    const moviesList: MovieObject[] = MoviesResponse.Movies;
    const moviesSoFar = moviesList.length;
    const moviesLeft = 365 - moviesSoFar;
    const rate = moviesLeft/daysLeft;

    return rate.toFixed(3);


}

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



export {sortByYear, sortByTitle, sortYearsByMoviesWatched, getYearsList, getDaysLeft, getNumberMovies, getNumberMoviesToReachGoal};
