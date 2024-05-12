import ConfigDB from '../../../../Config/Theme-Config';

const primary = localStorage.getItem('default_color') || ConfigDB.data.color.primary_color;
const secondary = localStorage.getItem('secondary_color') || ConfigDB.data.color.secondary_color;
export const ApexBussnissChart = {
    series: [{
        name: 'Growth',
        data: [20, 30, 18, 30, 20, 30, 40]
    },
    {
        name: 'Growth',
        data: [30, 22, 15, 21, 23, 18, 27]
    },
    ],
    options: {
        chart: {
            height: 275,
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false,
        },
        stroke: {
            curve: 'straight'
        },
        colors: [primary, secondary],
        markers: {
            size: 5,
            hover: {
                sizeOffset: 1
            }
        },
        grid: {
            padding: {
                top: 0,
                right: 0,
            },  
        },
        yaxis: {
            tooltip: {
                enabled: true
            },
            labels: {
                formatter: function (value) {
                    return value + 'k';
                },
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'],
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            labels: {
                offsetY: 5,
            }
        },
        responsive: [
            {
                breakpoint: 1501,
                options: {
                    chart: {
                        height: 250
                    }
                },
            },
            {
                breakpoint: 1366,
                options: {
                    chart: {
                        height: 385
                    }
                },
            },
            {
                breakpoint: 992,
                options: {
                    chart: {
                        height: 365
                    }
                },
            }
        ],
    }
};