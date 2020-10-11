import {getDaysLeft, getNumberMovies, getNumberMoviesToReachGoal, getDecadeCounts} from "../../services/movieListHelpers";
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

                <hr/>

                <table>
                    <tr>
                        <th>1900</th>
                        <th>1910</th>
                        <th>1920</th>
                        <th>1930</th>
                        <th>1940</th>
                        <th>1950</th>
                        <th>1960</th>
                        <th>1970</th>
                        <th>1980</th>
                        <th>1990</th>
                        <th>2000</th>
                        <th>2010</th>
                        <th>2020</th>
                    </tr>
                    <tr>
                        <td>{getDecadeCounts()['1900']}</td>
                        <td>{getDecadeCounts()['1910']}</td>
                        <td>{getDecadeCounts()['1920']}</td>
                        <td>{getDecadeCounts()['1930']}</td>
                        <td>{getDecadeCounts()['1940']}</td>
                        <td>{getDecadeCounts()['1950']}</td>
                        <td>{getDecadeCounts()['1960']}</td>
                        <td>{getDecadeCounts()['1970']}</td>
                        <td>{getDecadeCounts()['1980']}</td>
                        <td>{getDecadeCounts()['1990']}</td>
                        <td>{getDecadeCounts()['2000']}</td>
                        <td>{getDecadeCounts()['2010']}</td>
                        <td>{getDecadeCounts()['2020']}</td>



                    </tr>
                </table>


            </div>
    );
}

export default BingeStats;
