import {getDaysLeft, getNumberMovies, getNumberMoviesToReachGoal, getDecadeCounts} from "../../services/movieListHelpers";
import React from "react";

import './BingeStats.css';

function BingeStats() {
    return (
            <div className="bingeStats">

                <div className="statRow">
                    <div className="statContainer">
                        <h3>Movies So Far</h3>
                        <p>{getNumberMovies()}</p>
                    </div>
                    <div className="statContainer">
                        <h3>Days Left</h3>
                        <p>{getDaysLeft()}</p>
                    </div>
                    <div className="statContainer">
                        <h3>Movies/Day to Reach Goal</h3>
                        <p>{getNumberMoviesToReachGoal()}</p>
                    </div>
                </div>

                <div className="statRow">
                    <div className="statContainer">
                        <h3>1900</h3>
                        <p>{getDecadeCounts()['1900']}</p>
                    </div>
                    <div className="statContainer">
                        <h3>1910</h3>
                        <p>{getDecadeCounts()['1910']}</p>
                    </div>
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

            </div>
    );
}

export default BingeStats;
