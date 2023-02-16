import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
  datasets: [
    {
      label: 'Alocate budget',
      data: [6, 9, 7, 5, 8, 5],
      backgroundColor: '#ffffff2e',
      borderColor: 'rgb(65,84,241)',
      borderWidth: 2,
    },
    {
        label: 'Actual spending',
        data: [3, 1, 6, 7, 5, 8],
        backgroundColor:'#ffffff2e',
        borderColor: 'rgb(46,202,106)',
        borderWidth: 2,
      },
  ],
};

export function MyRadarChart() {
  return <Radar data={data} />;
}
