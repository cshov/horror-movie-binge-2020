import {getDaysLeft, getNumberMovies, getNumberMoviesToReachGoal, getDecadeCounts, getTotalMoviesAtPace, numberOfMoviesNewToMe} from "../../services/movieListHelpers";
import React from "react";

import './BingeStats.css';
import YearChart from "../YearChart/YearChart";
import YearChartVertical from "../YearChartVertical/YearChartVertical";

function BingeStats() {
    return (
            <div className="bingeStats">

                <h2>Basic stats for goal</h2>
                <div className="statRow">
                    <div className="statContainer">
                        <h3>Movies So Far</h3>
                        <p>{getNumberMovies()}</p>
                    </div>
                    <div className="statContainer">
                        <h3>First time views</h3>
                        <p>{numberOfMoviesNewToMe()}</p>
                    </div>
                    <div className="statContainer">
                        <h3>Days Left</h3>
                        <p>{getDaysLeft()}</p>
                    </div>
                    <div className="statContainer">
                        <h3>Movies/Day to Hit Goal</h3>
                        <p>{getNumberMoviesToReachGoal()}</p>
                    </div>
                </div>

                <h2>Movies per decade:</h2>
                <div className="statRow">
                    <div className="statContainer">
                        <h3>1920</h3>
                        <p>{getDecadeCounts()['1920']}</p>
                    </div>
                    <div className="statContainer">
                        <h3>1930</h3>
                        <p>{getDecadeCounts()['1930']}</p>
                    </div>
                    <div className="statContainer">
                        <h3>1940</h3>
                        <p>{getDecadeCounts()['1940']}</p>
                    </div>
                    <div className="statContainer">
                        <h3>1950</h3>
                        <p>{getDecadeCounts()['1950']}</p>
                    </div>
                    <div className="statContainer">
                        <h3>1960</h3>
                        <p>{getDecadeCounts()['1960']}</p>
                    </div>
                    <div className="statContainer">
                        <h3>1970</h3>
                        <p>{getDecadeCounts()['1970']}</p>
                    </div>
                    <div className="statContainer">
                        <h3>1980</h3>
                        <p>{getDecadeCounts()['1980']}</p>
                    </div>
                    <div className="statContainer">
                        <h3>1990</h3>
                        <p>{getDecadeCounts()['1990']}</p>
                    </div>
                    <div className="statContainer">
                        <h3>2000</h3>
                        <p>{getDecadeCounts()['2000']}</p>
                    </div>
                    <div className="statContainer">
                        <h3>2010</h3>
                        <p>{getDecadeCounts()['2010']}</p>
                    </div>
                    <div className="statContainer">
                        <h3>2020</h3>
                        <p>{getDecadeCounts()['2020']}</p>
                    </div>

                </div>

                <h2>Totals for year if I watch at these paces from here on out:</h2>
                <div className="statRow">
                    <div className="statContainer">
                        <h3>1/day</h3>
                        <p>{getTotalMoviesAtPace(1)}</p>
                    </div>
                    <div className="statContainer">
                        <h3>2/day</h3>
                        <p>{getTotalMoviesAtPace(2)}</p>
                    </div>
                    <div className="statContainer">
                        <h3>3/day</h3>
                        <p>{getTotalMoviesAtPace(3)}</p>
                    </div>
                    <div className="statContainer">
                        <h3>4/day</h3>
                        <p>{getTotalMoviesAtPace(4)}</p>
                    </div>
                </div>

                {/*<h2>Totals per year:</h2>*/}
                {/*<div className="statRow">*/}
                {/*    <YearChartVertical></YearChartVertical>*/}
                {/*</div>*/}
                {/*<YearChart></YearChart>*/}
            </div>
    );
}

export default BingeStats;
