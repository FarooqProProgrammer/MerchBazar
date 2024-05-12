import ChartistTooltip from 'chartist-plugin-tooltips-updated';

export const SmallChartData1 = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11'],
    series: [
        [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]
    ],
};
export const SmallChartOption1 = {
    plugins: [
        ChartistTooltip({
            appendToBody: false,
            className: 'ct-tooltip'
        })
    ],
    chart: {
        Bar:
        {
            stroke: '#4d8aff',
            strokeWidth: 3,
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '5px',
        },
    },
    stackBars: true,
    axisX: {
        showGrid: false,
        showLabel: false,
        offset: 0
    },
    axisY: {
        low: 0,
        showGrid: false,
        showLabel: false,
        offset: 0,
        labelInterpolationFnc: function (value) {
            return (value / 1000) + 'k';
        }
    }
};