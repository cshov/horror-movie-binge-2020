import * as d3 from 'd3';
import { scaleLinear } from "d3-scale";
import { max } from 'd3-array';
import { select } from 'd3-selection';
import {Component} from "react";

// import { getNumbersByYear } from '../../services/movieListHelpers';

class MovieChart extends Component {

    node: any;

    // numbersByYear = getNumbersByYear();

    constructor(props: any) {
        super(props);

    }
    //
    // componentDidMount() {
    //     this.createBarChart()
    // }
    // componentDidUpdate() {
    //     this.createBarChart()
    // }
    //
    // createBarChart() {
    //
    // }

    // d3.select(numbersByYear);



    render() {
        return '';
        // return <svg ref={node => this.node = node}
        //             width={500} height={500}>
        // </svg>
    }
}

export default MovieChart;