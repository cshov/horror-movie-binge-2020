import {getDaysLeft, getNumberMovies, getNumberMoviesToReachGoal} from "../../services/movieListHelpers";
import React from "react";

function BingeStats() {
    return (
            <div>

                <h3>Movies So Far</h3>
                <p>{getNumberMovies()}</p>

                <h3>Days Left</h3>
                <p>{getDaysLeft()}</p>

                <h3>Movies/Day to Reach Goal</h3>
                <p>{getNumberMoviesToReachGoal()}</p>

            </div>
    );
}

export default BingeStats;
