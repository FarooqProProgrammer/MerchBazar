import ConfigDB from '../../../Config/Theme-Config';

const primary = localStorage.getItem('default_color') || ConfigDB.data.color.primary_color;

// valuation chart start
export const ValuationChart = {
    series: [{
        name: 'Product value',
        data: [
            20, 30, 50, 70, 60, 75, 95, 70, 80, 70, 75, 80, 75, 60, 90, 60, 70, 45, 30, 40
        ]
    },
    {
        name: 'Product value',
        data: [
            -20, -30, -50, -70, -60, -75, -80, -70, -85, -70, -75, -80, -75, -60, -90, -60, -70, -45, -30, -40
        ]
    }
    ],
    options: {
        chart: {
            type: 'bar',
            height: 320,
            stacked: true,
            toolbar: {
                show: false,
                tools: {
                    download: false
                }
            }

        },
        legend: {
            show: false,
        },
        colors: ['#dce8ff', primary],
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '70%',
                startingShape: 'rounded',
                endingShape: 'rounded',
            },
        },
        states: {
            hover: {
                filter: {
                    type: 'darken',
                    value: 1,
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: -1.8,
            colors: ['#fff'],
        },
        grid: {
            show: false,
            lines: {
                show: false
            },
        },
        tooltip: {
            shared: false,
            x: {
                formatter: function (val) {
                    return val;
                }
            },
            y: {
                formatter: function (val) {
                    return Math.abs(val) + 'k';
                }
            }
        },
        xaxis: {
            categories: [
                '60k', '50k', '40k', '50k', '40k', '30k', '20k', '10k'
            ],
            lines: {
                show: false
            },
            label: {
                show: false
            },
            tooltip: {
                enabled: false
            },
            axisBorder: {
                show: false,
            },
            stroke: false,
        },
        yaxis: {
            min: -100,
            max: 100,
        },
        responsive: [
            {
                breakpoint: 1661,
                options: {
                    chart: {
                        height: 270
                    }
                },
            },
            {
                breakpoint: 1471,
                options: {
                    chart: {
                        height: 258
                    }
                },
            },
            {
                breakpoint: 1366,
                options: {
                    chart: {
                        height: 375
                    }
                },
            },
            {
                breakpoint: 768,
                options: {
                    chart: {
                        height: 300
                    }
                },
            },
        ],
    }
};