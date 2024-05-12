import ConfigDB from '../../../Config/Theme-Config';

const primary = localStorage.getItem('default_color') || ConfigDB.data.color.primary_color;

export const ChartCandel = {

    series: [{
        data: [{
            x: new Date(1538778600000),
            y: [6620.81, 6650.5, 6623.04, 6633.33]
        },
        {
            x: new Date(1538780400000),
            y: [6600.01, 6643.59, 6620, 6630.11]
        },
        {
            x: new Date(1538782200000),
            y: [6620.71, 6648.95, 6623.34, 6635.65]
        },
        {
            x: new Date(1538784000000),
            y: [6600.65, 6651, 6629.67, 6638.24]
        },
        {
            x: new Date(1538785800000),
            y: [6638.24, 6640, 6620, 6624.47]
        },
        {
            x: new Date(1538787600000),
            y: [6602.53, 6636.03, 6621.68, 6624.31]
        },
        {
            x: new Date(1538789400000),
            y: [6610.61, 6632.2, 6617, 6626.02]
        },
        {
            x: new Date(1538791200000),
            y: [6627, 6627.62, 6584.22, 6603.02]
        },
        {
            x: new Date(1538793000000),
            y: [6500, 6608.03, 6598.95, 6604.01]
        },
        {
            x: new Date(1538794800000),
            y: [6650.5, 6614.4, 6602.26, 6608.02]
        },
        {
            x: new Date(1538796600000),
            y: [6600.02, 6610.68, 6601.99, 6608.91]
        },
        {
            x: new Date(1538798400000),
            y: [6608.91, 6618.99, 6608.01, 6612]
        },
        {
            x: new Date(1538800200000),
            y: [6612, 6615.13, 6605.09, 6600]
        },
        {
            x: new Date(1538802000000),
            y: [6612, 6624.12, 6608.43, 6622.95]
        },
        {
            x: new Date(1538803800000),
            y: [6623.91, 6623.91, 6615, 6615.67]
        },
        {
            x: new Date(1538805600000),
            y: [6618.69, 6618.74, 6610, 6610.4]
        },
        ]
    }],
    options: {
        chart: {
            type: 'candlestick',
            height: 300,
            toolbar: {
                show: false,
            }
        },
        responsive: [
            {
                breakpoint: 1300,
                options: {
                    chart: {
                        height: 210
                    }
                }
            }
        ],
        grid: {
            show: false,
        },
        xaxis: {
            tooltip: {
                enabled: false
            },
            offset: 0,
            type: 'datetime',
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
                offsetX: 0,
                offsetY: 0,
            },
        },
        yaxis: {
            tooltip: {
                enabled: false
            },
            labels: {
                show: false,
            },
        },
        stroke: {
            width: 0,
            lineCap: 'round',
            curve: 'smooth',
        },
        plotOptions: {
            candlestick: {
                colors: {
                    upward: primary,
                    downward: '#dce8ff'
                },
                wick: {
                    useFillColor: true,
                },
            },
            bar: {
                startingShape: 'round',
                endingShape: 'round',
            },
        },
    },
};