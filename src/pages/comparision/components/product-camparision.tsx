import * as HighCharts from 'highcharts';
import {merge} from 'lodash';
import { BAR_CHART_OPTIONS } from '../../../shared/defaults-data/charts/bar-chart-options';
import { Chart } from '../../../shared/components/charts/chart';

const defaultOptions: HighCharts.Options = {
    title: {
        text: 'Browser market shares. January, 2022'
    },
    subtitle: {
        text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Total percent market share'
        }
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [
        {
            name: 'Browsers',
            colorByPoint: true,
            type: 'column',
            data: [
                {
                    name: 'Chrome',
                    y: 63.06
                },
                {
                    name: 'Safari',
                    y: 19.84
                },
                {
                    name: 'Firefox',
                    y: 4.18
                },
                {
                    name: 'Edge',
                    y: 4.12
                },
                {
                    name: 'Opera',
                    y: 2.33
                },
                {
                    name: 'Internet Explorer',
                    y: 0.45
                },
                {
                    name: 'Other',
                    y: 1.582
                }
            ]
        }
    ],
}

export const ProductComparision = () => {
    const chartOptions = merge({}, BAR_CHART_OPTIONS, defaultOptions);
    return <>
        <Chart options={chartOptions} />
    </>
}