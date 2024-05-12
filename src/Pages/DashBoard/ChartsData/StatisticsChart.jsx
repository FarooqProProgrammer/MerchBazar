import ConfigDB from '../../../Config/Theme-Config';

const primary = localStorage.getItem('default_color') || ConfigDB.data.color.primary_color;
export const StatisticsChart = {
    series: [
        {
            name: 'Statistics',
            data: [20, 30, 40, 80, 100, 40, 30]
        },
        {
            name: 'Statistics',
            data: [80, 70, 60, 20, 0, 60, 70]
        }
    ],
    options: {
        chart: {
            type: 'bar',
            height: 312,
            stacked: true,
            stackType: '100%',
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '30px',
            },
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            }
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            opacity: 1
        },
        legend: {
            show: false
        },
        states: {
            hover: {
                filter: {
                    type: 'darken',
                    value: 1,
                }
            }
        },
        colors: [primary, '#dce8ff'],
        xaxis: {
            categories: [
                'M', 'T', 'W', 'T', 'F', 'S', 'S'
            ],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: false,
            },
        },
        responsive: [
            {
                breakpoint: 1471,
                options: {
                    chart: {
                        height: 235
                    }
                },
            },
            {
                breakpoint: 1366,
                options: {
                    chart: {
                        height: 180
                    }
                },
            },
            {
                breakpoint: 1200,
                options: {
                    chart: {
                        height: 250
                    }
                },
            },
            {
                breakpoint: 992,
                options: {
                    chart: {
                        height: 168
                    }
                },
            },
        ],
    }
};