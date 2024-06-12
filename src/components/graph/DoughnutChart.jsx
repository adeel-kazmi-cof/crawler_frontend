import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto'; // Import Chart from 'chart.js/auto' to include all necessary components

const DoughnutChart = () => {
  const data = {
    labels: ['Pending', 'In Progress', 'Completed', 'Expired'],
    datasets: [{
      label: '',
      data: [200, 19, 3, 5],
      backgroundColor: [
        '#CD4949',
        '#BFB35A',
        '#17A08C',
        '#A06CA5',
      ],
      borderColor: 'white',
      borderWidth: 0.5,
    }],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          display: 'flex', // Use a string value 'flex'
          boxWidth: 20,
          boxHeight: 20,
          borderRadius: 100,
          font: {
            size: 14,
          },
        },
      },
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 10,
        bottom: 20,
      },
      borderWidth: 1,
    },
  };
  

  return (
    <>
      <Doughnut data={data} options={options} />
    </>
  );
};

export default DoughnutChart;
