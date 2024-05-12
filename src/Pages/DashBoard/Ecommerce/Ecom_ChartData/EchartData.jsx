import ConfigDB from '../../../../Config/Theme-Config';

const primary = localStorage.getItem('default_color') || ConfigDB.data.color.primary_color;
export const EchartBarOption = {
    options: {
        chart: {
            stacked: true,
            type: "bar"
          },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        stroke: {width : 0},
        stack: true,
        // barWidth: 25,
        colors: ['#a6c4ff', primary, '#dbe8fe'],
    },
    series: [
        {
            type: 'bar',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

        },
        {
            type: 'bar',
            data: [25, 19, 12, 20, 25, 32, 20, 31, 35, 38, 30, 35, 18, 21, 30, 20, 17, 25, 38, 25, 30, 30, 38, 20, 23, 12, 21, 18, 15, 17, 38, 31, 22, 38, 35, 28, 20, 23, 28, 25, 23, 35, 28, 33]
        },
        {
            type: 'bar',
            data: [null, null, null, null, null, null, 25, null, null, null, null, 20, null, null, null, null, null, null, null, null, null, null, null, 33, null, null, null, null, null, null, null, null, 20, null, null, 38, null, null,]
        },

    ],
};