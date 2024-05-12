import C_1 from '../../../../assets/images/dashboard-2/c_1.png';
import C_2 from '../../../../assets/images/dashboard-2/c_2.png';
import C_3 from '../../../../assets/images/dashboard-2/c_3.png';
import ConfigDB from '../../../../Config/Theme-Config';

const primary = localStorage.getItem('default_color') || ConfigDB.data.color.primary_color;
const secondary = localStorage.getItem('secondary_color') || ConfigDB.data.color.secondary_color;
export const ApexRadialbar = {
    labels: ['Progress'],
    series: [55],
    options16: {
        chart: {
            height: 195,
            type: 'radialBar',
        },
        colors: [primary],
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 20,
                    size: '70%',
                    background: '#4d8aff33',
                    image: C_1,
                    imageWidth: 30,
                    imageHeight: 30,
                    imageClipped: false,
                },
                dataLabels: {
                    name: {
                        offsetY: -10,
                        color: '#fff',
                        fontSize: '13px',
                        show: false
                    },
                    value: {
                        color: '#fff',
                        fontSize: '30px',
                        show: false
                    }
                }
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'vertical',
                gradientToColors: ['#b2c4e6'],
                stops: [0, 100]
            }
        },
        stroke: {
            width: 1
        },
        responsive: [
            {
                breakpoint: 1501,
                options: {
                    chart: {
                        height: 200
                    }
                }
            }
        ],
    }
};
export const ApexRadialbar2 = {

    labels: ['Progress'],
    series: [30],
    options: {
        chart: {
            height: 195,
            type: 'radialBar',
        },

        colors: [secondary],
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 20,
                    size: '70%',
                    background: '#f7316433',
                    image: C_2,
                    imageWidth: 30,
                    imageHeight: 30,
                    imageClipped: false,
                },
                dataLabels: {
                    name: {
                        offsetY: -10,
                        color: '#fff',
                        fontSize: '13px',
                        show: false
                    },
                    value: {
                        color: '#fff',
                        fontSize: '30px',
                        show: false
                    }
                }
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'vertical',
                gradientToColors: ['#efb9c7'],
                stops: [0, 100]
            }
        },
        responsive: [
            {
                breakpoint: 1501,
                options: {
                    chart: {
                        height: 200
                    }
                }
            }
        ],
    }
};

export const ApexRadialbar3 = {
    series: [55],
    labels: ['Progress'],
    options: {
        chart: {
            height: 195,
            type: 'radialBar',
        },
        // colors: [WingoAdminConfig.primary],
        colors: ['#47d15f'],
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 20,
                    size: '70%',
                    background: '#4d8aff33',
                    image: C_3,
                    imageWidth: 30,
                    imageHeight: 30,
                    imageClipped: false,
                },
                dataLabels: {
                    name: {
                        offsetY: -10,
                        color: '#fff',
                        fontSize: '13px',
                        show: false
                    },
                    value: {
                        color: '#fff',
                        fontSize: '30px',
                        show: false
                    }
                }
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'vertical',
                gradientToColors: ['#47cf6020'],
                stops: [0, 100]
            }
        },
        responsive: [
            {
                breakpoint: 1501,
                options: {
                    chart: {
                        height: 200
                    }
                }
            }
        ],
    }
};