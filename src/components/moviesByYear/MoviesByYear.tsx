import React from 'react';
import { getYearsList } from '../../services/movieListHelpers';
import {YearObject} from "../../models/movieModels";

function MoviesByYear() {
    const yearsList: YearObject[] = getYearsList();

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

export default MoviesByYear;

