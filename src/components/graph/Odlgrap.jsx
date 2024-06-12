import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register necessary elements from Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  // Data for the Doughnut chart

  const data = {
    labels: ['Pending', 'In Progress', 'Completed', 'Expired'],
    datasets: [
        {
            label: '',
            data: [200, 19, 3, 5],
            backgroundColor: [
              '#CD4949',
              '#BFB35A',
              '#17A08C',
              '#A06CA5',
            ],
            borderColor: [
              '#CD4949',
              '#BFB35A',
              '#17A08C',
              '#A06CA5',
            ],
            borderWidth: 0,
            radius: '40%' 
          },
    ],
  };

  // Options for customizing the Doughnut chart
  const options = {
    width: 400, // set the width of the chart
    height: 400, // set the height of the chart
    plugins: {
      legend: {
        display: true, // show the legend
        position: 'bottom', // you can change the legend position if needed
        labels: {
          boxWidth: 20, // width of the colored box
          boxHeight: 20, // height of the colored box
          borderRadius: 50, // border radius of the colored box
          align: 'end', // display legend items in a single line
          font: {
            size: 14, // font size of the legend text
            weight: 'bold', // font weight of the legend text
          },
        },
      },
      
      tooltip: {
        enabled: true, // enable tooltips
      backgroundColor: '#fff', // background color of the tooltip
      boxWidth: 20,
      color: 'black',
      displayColors: false, // hide color boxes in the tooltip
      bodyFont: {
        size: 14, // font size of the tooltip text
        weight: 'bold', // font weight of the tooltip text
       
      },
      },
      doughnutLabel: {
        labels: [
          {
            text: 'Pending', // custom label text
            font: {
              size: 14, // font size
              weight: 'bold', // font weight
            },
            color: '#CD4949', // label color
          },
        ],
      },
    },
  };

  // Render the Doughnut chart with specified data and options
  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
