import React from 'react';
import { sortYearsByMoviesWatched } from '../../services/movieListHelpers';
import {YearObject} from "../../models/movieModels";

function PopularYears() {
    const yearsList: YearObject[] = sortYearsByMoviesWatched();

    return (
        <table>
            {yearsList.map((year) => (
                <tr>
                    <td>{year.Year}</td>
                    <td>{year.Total}</td>
                </tr>
            ))}
        </table>
    );
}

export default PopularYears;

