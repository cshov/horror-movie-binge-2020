import React, {Component} from 'react'
import * as d3 from 'd3'

import {YearObject} from "../../models/movieModels";
import {getYearsAndValuesSortedByYear} from "../../services/movieListHelpers";
import {BarChartConstants} from "../../constants/BarChartConstants";

class YearChartVertical extends Component {

    render() {
        return <div id="yearChart"></div>;
    }

    componentDidMount(): void {
        const yearsArray: YearObject[] = getYearsAndValuesSortedByYear();

        // const width = BarChartConstants.CHART_WIDTH;
        const width = window.innerWidth - 32;
        const height = 2000; // TODO: make dynamic based on entries
        const padding = BarChartConstants.CHART_PADDING;
        const barHeight = BarChartConstants.BAR_HEIGHT;

        const x = d3.scaleLinear()
            .domain([0,25]) // TODO: make dynamic with min/max
            .range([padding, width-padding]);
        const y = d3.scaleLinear()
            .domain([2020,1920]) // TODO: make dynamic with min/max
            .range([padding, height-padding]);

        const svgCanvas = d3.select('#yearChart')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .style('border', '4px solid #d80e0e')

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
            );

        svgCanvas.selectAll('rect')
            .data(yearsArray).enter()
            .append('rect')
            .attr('height', barHeight)
            .attr('width', function (d: YearObject): any {
                // @ts-ignore
                return x(d.Total)-padding;
            })
            .attr('x',function (d: YearObject): any {
                return padding;
            })
            .attr('y', function (d: YearObject): any {
                // @ts-ignore
                return y(d.Year) - (barHeight/2);
            })
            .attr('fill', '#d80e0e');

        svgCanvas.selectAll(null)
            .data(yearsArray).enter()
            .append('text')
            .attr('font-size', '10px')
            .attr('font-weight', 'bold')
            .attr('fill', '#d80e0e')
            .attr('x', function (d: YearObject): any {
                // @ts-ignore
                return 10;
            })
            .attr('y', function (d: YearObject): any {
                // @ts-ignore
                return y(d.Year) + (barHeight/2) - 2
            })
            .text(function (d: YearObject): any {
                return d.Year;
            });

        // add Total values next to each bar
        // TODO: figure out why all bars don't get a value written to it
        svgCanvas.selectAll(null)
            .data(yearsArray).enter()
            .append('text')
            .attr('font-size', '10px')
            .attr('font-weight', 'bold')
            .attr('fill', '#d80e0e')
            .attr('x', function (d: YearObject): any {
                // @ts-ignore
                return x(d.Total) + 4;
            })
            .attr('y', function (d: YearObject): any {
                // @ts-ignore
                return y(d.Year) + (barHeight/2) - 2
            })
            .text(function (d: YearObject): any {
                return d.Total;
            });
    }
}

export default YearChartVertical;