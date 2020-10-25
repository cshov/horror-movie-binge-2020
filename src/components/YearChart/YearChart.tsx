import React, {Component} from 'react'
import * as d3 from 'd3'

import Movies from "../../data/movies.json";
import {MovieObject, YearObject} from "../../models/movieModels";

class YearChart extends Component {

    render() {
        return <div id="yearChart"><span id="year-tooltip">XXX</span></div>;
    }

    componentDidMount(): void {
        const years: any = {};
        const yearsArray: YearObject[] = [];
        const moviesData: MovieObject[] = Movies.Movies;

        moviesData.forEach((movie) => {

            //building years
            if(!years[movie.Year]) {
               years[movie.Year] = 0;
           }
            years[movie.Year] += 1;

            const foundYearObj = yearsArray.find((yearObj: YearObject) => { return yearObj.Year === movie.Year});

            //building yearsArray
            if (foundYearObj) {
                foundYearObj.Total += 1;
            } else {
                yearsArray.push({Year: movie.Year, Total: 1});
            }

        });

        console.log(years);
        console.log(yearsArray);

        const width = 1000;
        const height = 200;
        const padding = 20;

        const x = d3.scaleLinear()
            .domain([1920,2020])
            .range([padding, width-padding]);
        const y = d3.scaleLinear()
            .domain([0,30])
            .range([padding, height-padding]);


        // d3.tickFormat(1900, 2020,20);





        const svgCanvas = d3.select('#yearChart')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .style('border', '1px solid black')

        svgCanvas.selectAll('rect')
            .data(yearsArray).enter()
                .append('rect')

            .on('mouseover', function (d, i: number): any {
                console.log(d3.select(this));
                showTooltip(d);
            })
                .attr('width', 4)
                .attr('height', function (d: YearObject): any {
                    // @ts-ignore
                    return y(d.Total)-padding;
                })
                .attr('x',function (d: YearObject): any {
                    return x(d.Year);
                })
                .attr('y', function (d: YearObject) {
                    // @ts-ignore
                    return height - y(d.Total);
                })
                .attr('fill', 'pink');


        function showTooltip(d: YearObject) {
            console.log('moused over:');console.log(d.Year);
            d3.select('#year-tooltip')
                .text(d.Year);
        }

        svgCanvas
            .append("g")
            .attr("transform", 'translate(0,' + (height - padding) + ')')      // This controls the vertical position of the Axis
            .call(d3.axisBottom(x));

        // @ts-ignore
        svgCanvas.selectAll('text')
            .data(yearsArray).enter()
            .append('text')
            .attr('font-size', '10px')
            .attr('x', function (d: YearObject): any {
                // @ts-ignore
                return x(d.Year);
            })
            .attr('y', function (d: YearObject): any {
                // @ts-ignore
                return height - y(d.Total) - 10
            })
            .text(function (d: YearObject): any {
                return d.Total;
            })




        // d3.select('#yearChart')
        //     .selectAll("h2")
        //     .data(moviesData)
        //     .enter()
        //     .append("h2")
        //     .text("New Temperature")
    }

}

export default YearChart;