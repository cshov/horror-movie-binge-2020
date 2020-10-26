import React, {Component} from 'react'
import * as d3 from 'd3'

// import './YearChartVertical.css';

import {DecadeObject} from "../../models/movieModels";
import {getDecadesAndValuesSortedByDecade} from "../../services/movieListHelpers";

class YearChartVertical extends Component {

    render() {
        return <div id="yearChart"></div>;
    }

    componentDidMount(): void {
        const decadesArray: DecadeObject[] = getDecadesAndValuesSortedByDecade();
        console.log(decadesArray);

        const width = 600;
        const height = 400; // TODO: make dynamic based on entries
        const padding = 40;
        const barHeight = 10;

        const x = d3.scaleLinear()
            .domain([0,100]) // TODO: make dynamic with min/max
            .range([padding, width-padding]);
        const y = d3.scaleLinear()
            .domain([2020,1920]) // TODO: make dynamic with min/max
            .range([padding, height-padding]);



        const svgCanvas = d3.select('#yearChart')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .style('border', '1px solid black')


        // adding X-axis grid
        // function make_x_gridlines_bottom() {
        //     return d3.axisBottom(x)
        //         .ticks(5)
        // }
        // svgCanvas.append("g")
        //     .attr("class", "grid")
        //     .attr("transform", "translate(0," + (height - padding) + ")")
        //     .attr('stroke', '#CCC')
        //     .call(make_x_gridlines_bottom()
        //         .tickSize(-(height - 2*padding))
        //     )

        function make_x_gridlines_top() {
            return d3.axisTop(x)
                .ticks(5)
        }
        svgCanvas.append("g")
            .attr("class", "grid")
            .attr("transform", "translate(-1," + (padding- barHeight/2 - 1) + ")")
            .attr('color', '#CCC')
            .call(make_x_gridlines_top()
                .tickSize(-(height - 2*padding - barHeight/2))
            )

        svgCanvas.selectAll('rect')
            .data(decadesArray).enter()
            .append('rect')
            .attr('height', barHeight)
            .attr('width', function (d: DecadeObject): any {
                // @ts-ignore
                return x(d.Total)-padding;
            })
            .attr('x',function (d: DecadeObject): any {
                return padding;
            })
            .attr('y', function (d: DecadeObject): any {
                // @ts-ignore
                return y(d.Decade) - (barHeight/2);
            })
            .attr('fill', 'pink');


        svgCanvas.selectAll(null)
            .data(decadesArray).enter()
            .append('text')
            .attr('font-size', '10px')
            .attr('x', function (d: DecadeObject): any {
                // @ts-ignore
                return 5;
            })
            .attr('y', function (d: DecadeObject): any {
                // @ts-ignore
                return y(d.Decade) + (barHeight/2) - 2
            })
            .text(function (d: DecadeObject): any {
                return d.Decade + '\'s';
            })


        // x axis (totals)






        // svgCanvas
        //     .append("g")
        //     .attr("transform", 'translate(0,' + (padding + (barHeight/2)) + ')')      // This controls the vertical position of the Axis
        //     .call(d3.axisTop(x));
        //
        // svgCanvas
        //     .append("g")
        //     .attr("transform", 'translate(0,' + (height - padding + (barHeight/2)) + ')')      // This controls the vertical position of the Axis
        //     .call(d3.axisBottom(x));

        // add Total values next to each bar
        // TODO: figure out why all bars don't get a value written to it
        svgCanvas.selectAll(null)
            .data(decadesArray).enter()
            .append('text')
            .attr('font-size', '10px')
            .attr('x', function (d: DecadeObject): any {
                // @ts-ignore
                return x(d.Total) + 2;
            })
            .attr('y', function (d: DecadeObject): any {
                // @ts-ignore
                return y(d.Decade) + (barHeight/2) - 2
            })
            .text(function (d: DecadeObject): any {
                return d.Total;
            })

    }

}

export default YearChartVertical;