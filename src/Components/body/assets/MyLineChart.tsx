import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    title: {
      display: false,
      text: 'jais line chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  spanGaps:20,
  datasets: [
    {
      label: 'Sale',
      data: [30,40,25,50,45,85,55],
      borderColor: 'rgb(65,84,241)',
      backgroundColor: 'rgb(65,84,241)',
      tension:.3,
    },
    {
      label: 'Revenue',
      data: [15,10,30,18,10,25,19],
      borderColor: 'rgb(46,202,106)',
      backgroundColor: 'rgb(46,202,106)',
      tension:.3
    },
    {
      label: 'Customers',
      data: [10,30,45,30,36,50,42],
      borderColor: 'rgb(255,119,29)',
      backgroundColor: 'rgb(255,119,29)',
      tension:.3
    },
  ],
};

export function MyLineChart() {
  return <Line options={options} data={data} />;
}
