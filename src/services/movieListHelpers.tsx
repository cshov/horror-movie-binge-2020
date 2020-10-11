import Movies from "../data/movies.json";
import {DecadesObject, MovieObject, MoviesList, YearObject} from "../models/movieModels";

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

function getDecadeCounts(): DecadesObject {

    const decadeCounts: DecadesObject = {
        1900: 0,
        1910: 0,
        1920: 0,
        1930: 0,
        1940: 0,
        1950: 0,
        1960: 0,
        1970: 0,
        1980: 0,
        1990: 0,
        2000: 0,
        2010: 0,
        2020: 0
    };

    const MoviesResponse: MoviesList = Movies;
    const moviesList: MovieObject[] = MoviesResponse.Movies;

    moviesList.forEach((movie) => {
       if (movie.Year >= 1900 && movie.Year <= 1909) {
            decadeCounts['1900'] += 1;
       } else if (movie.Year >= 1910 && movie.Year <= 1919) {
           decadeCounts['1910'] += 1;
       } else if (movie.Year >= 1920 && movie.Year <= 1929) {
           decadeCounts['1920'] += 1;
       } else if (movie.Year >= 1930 && movie.Year <= 1939) {
           decadeCounts['1930'] += 1;
       } else if (movie.Year >= 1940 && movie.Year <= 1949) {
           decadeCounts['1940'] += 1;
       } else if (movie.Year >= 1950 && movie.Year <= 1959) {
           decadeCounts['1950'] += 1;
       } else if (movie.Year >= 1960 && movie.Year <= 1969) {
           decadeCounts['1960'] += 1;
       } else if (movie.Year >= 1970 && movie.Year <= 1979) {
           decadeCounts['1970'] += 1;
       } else if (movie.Year >= 1980 && movie.Year <= 1989) {
           decadeCounts['1980'] += 1;
       } else if (movie.Year >= 1990 && movie.Year <= 1999) {
           decadeCounts['1990'] += 1;
       } else if (movie.Year >= 2000 && movie.Year <= 2009) {
           decadeCounts['2000'] += 1;
       } else if (movie.Year >= 2010 && movie.Year <= 2019) {
           decadeCounts['2010'] += 1;
       } else if (movie.Year >= 2020 && movie.Year <= 2029) {
           decadeCounts['2020'] += 1;
       }
    });


    return decadeCounts;

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



export {sortByYear, sortByTitle, sortYearsByMoviesWatched, getYearsList, getDaysLeft, getNumberMovies, getNumberMoviesToReachGoal, getDecadeCounts};
