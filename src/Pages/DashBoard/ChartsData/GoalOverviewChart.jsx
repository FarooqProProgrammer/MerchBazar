import impossible from '../../../assets/images/dashboard/impossible.png';
import ConfigDB from '../../../Config/Theme-Config';

const primary = localStorage.getItem('default_color') || ConfigDB.data.color.primary_color;
export const GoalOverviewChart = {
    series: [65],
    options: {
        chart: {
            height: 350,
            type: 'radialBar',
            offsetY: -20,
            
        },
        colors: [primary, '#dce8ff'],
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                inverseOrder: true,
                hollow: {
                    margin: 25,
                    size: '80%',
                    image: impossible,
                    imageWidth: 80,
                    imageHeight: 80,
                    imageClipped: false,
                    background: '#4d8aff36',
                    dropShadow: {
                        enabled: false,
                        top: 0,
                        left: 0,
                        blur: 1,
                        opacity: 0.3
                    },
                },
                dataLabels: {
                    name: {
                        fontSize: '16px',
                        color: '#000',
                        offsetY: 150
                    },
                    value: {
                        offsetY:110,
                        color: primary,
                        fontSize: '20px',
                    },
                },
            },
            track: {
                opacity: 0.7,
                show: false
            },
            
        },
        stroke: {
            dashArray: 15,
            curve: 'smooth',
            lineCap: 'round',
            width: 15,
        },
        responsive: [
            {
                breakpoint: 1501,
                options: {
                    chart: {
                        height: 300
                    }
                },
            }
        ],
        labels: ['Goal In Progress'],
    },
};
