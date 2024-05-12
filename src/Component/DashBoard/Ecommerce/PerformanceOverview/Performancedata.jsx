import { ChartistData1, ChartistData2, ChartistData3, ChartistData4, ChartistOption1, ChartistOption2, ChartistOption3, ChartistOption4, eventHandlers } from '../../../../Pages/DashBoard/Ecommerce/Ecom_ChartData/TotalRevenu';

export const Data = [
    {
        imagePath: 'dashboard-2/p_1.png',
        title: 'Total Revenue',
        count: '985624',
        contain: 'Balanace +98%',
        class: 'ct-chart1',
        chartData1: ChartistData1,
        chartOption1: ChartistOption1,
        chartType: 'Line',
        event: eventHandlers
    },
    {
        imagePath: 'dashboard-2/p_1.png',
        title: 'Total Sale',
        count: '6895',
        contain: 'Balanace +82%',
        class: 'ct-chart2',
        chartData1: ChartistData2,
        chartOption1: ChartistOption2,
        chartType: 'Line',
        event: eventHandlers

    },
    {
        imagePath: 'dashboard-2/p_3.png',
        title: 'Total Client',
        count: '1568',
        contain: 'Balanace +96%',
        class: 'ct-chart3',
        chartData1: ChartistData3,
        chartOption1: ChartistOption3,
        chartType: 'Line',
        event: eventHandlers,
    },
    {
        imagePath: 'dashboard-2/p_4.png',
        title: 'Total Product',
        count: '850',
        contain: 'Balanace +79%',
        class: 'ct-chart4',
        chartData1: ChartistData4,
        chartOption1: ChartistOption4,
        chartType: 'Line',
        event: eventHandlers,
    }
];