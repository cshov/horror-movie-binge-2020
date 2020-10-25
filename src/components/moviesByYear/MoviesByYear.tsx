import React from 'react';
import { getYearsList } from '../../services/movieListHelpers';
import {YearObject} from "../../models/movieModels";
import YearChartVertical from "../YearChartVertical/YearChartVertical";

function MoviesByYear() {
    const yearsList: YearObject[] = getYearsList();

    return (
        <YearChartVertical></YearChartVertical>
    );
}

export default MoviesByYear;

