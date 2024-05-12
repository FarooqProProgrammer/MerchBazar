import ConfigDB from '../../../Config/Theme-Config';

const primary = localStorage.getItem('default_color') || ConfigDB.data.color.primary_color;

export const TotalEvents = {
    // Total Events mixed chart
    series: [
        {
            name: 'South',
            data: [
                [1351202400000, 37.30],
                [1351338000000, 36.60],
                [1351424400000, 39.50],
                [1351710800000, 32.55],
                [1351870000000, 32.55],
                [1352056400000, 35.60],
                [1352342800000, 30.45],
                [1352629200000, 39.60],
                [1352815600000, 37.50],
                [1352924000000, 38.30],
                [1353061200000, 36.20],
                [1353134000000, 37.25],
                [1353220400000, 37.22],
                [1353479600000, 33.30],
                [1353566000000, 34.23],
                [1353632400000, 32.30],
                [1353757200000, 34.23],
                [1353857200000, 36.30],
                [1353957200000, 38.28],
                [1354021500000, 37.10],
                [1354175600000, 39.28],
                [1354362000000, 36.22],
                [1354548400000, 36.22],
                [1354634800000, 38.55],
                [1354794000000, 36.22],
                [1354980400000, 40.50],
                [1355166800000, 40.80],
                [1355253200000, 39.50],
                [1355439600000, 37.45],
                [1355698800000, 37.51],
                [1355885200000, 33.40],
                [1355985200000, 36.40],
                [1356085200000, 39.40],
            ]
        }
    ],
    options: {
        chart: {
            height: 175,
            type: 'area',
            stacked: true,
            toolbar: {
                show: false
            },
            events: {
                selection: function (chart, e) {
                    console.log(new Date(e.xaxis.min));
                }
            },
        },
        colors: [primary],
        dataLabels: {
            enabled: false
        },
        grid: {
            borderColor: 'transparent',
            padding: {
                left: -10,
                right: 0,
                bottom: -15,
                top: -40
            }
        },
        stroke: {
            curve: 'straight',
            width: 2
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.5,
                opacityTo: 0.2,
            }
        },
        legend: {
            show: false,
            position: 'top',
            horizontalAlign: 'right'
        },
        yaxis: {
            low: 0,
            offsetX: 0,
            offsetY: 0,
            labels: {
                low: 0,
                offsetX: 0,
                show: false,
            },
            axisBorder: {
                low: 0,
                offsetX: 0,
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        xaxis: {
            type: 'datetime',
            low: 0,
            offsetX: 0,
            offsetY: 0,
            labels: {
                low: 0,
                offsetX: 0,
                show: false,
            },
            axisBorder: {
                low: 0,
                offsetX: 0,
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        responsive: [
            {
                breakpoint: 1300,
                options: {
                    chart: {
                        height: 140
                    }
                }
            }]
    }
};
// ------------------**********************------------------------
export const ChartistChartData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q12', 'Q13', 'Q14', 'Q15', 'Q16', 'Q17', 'Q18', 'Q19', 'Q20', 'Q21', 'Q22', 'Q23'],
    series: [
        [13.6, 11, 4, 8, 4, 15, 18, 10, 8, 10, 8, 4, 6, 11, 13.6, 11, 4, 8, 4, 15, 18, 10, 8, 10, 8, 4, 6, 11, 13.6, 11, 4, 8, 4, 15, 18, 10, 18]
    ]
};
export const ChartistChartOption = {
    chart: {
        type: 'bar',
        height: 312,
        toolbar: {
            show: false,
        }
    },
    low: 0,
    offset: 0,
    chartPadding: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    color: [primary, '#25b6db'],
    axisX: {
        low: 0,
        showGrid: false,
        showLabel: false,
        offset: 0,
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

