// THe following first import is only used for the labels
import { PercentageBaseline100Years } from '../../data/percentageBaseline100Years.js';
import { PercentageBaseline } from '../../data/percentageBaseline.js';
import { cumsum } from 'mathjs';
import LineChart from '../LineChart.jsx';
import LineChart80 from '../LineScreen80.jsx';

// Start by adding the carbon footprint
const yearlyFootprint = 12;

// Create an array of objects with capture and offset per year
const capturePerYearFirst50 = PercentageBaseline.map(
  (data) => (data.averagePercentage * yearlyFootprint) / 100
);

//An array with cumulative capture
const cumulativeCapture = cumsum(capturePerYearFirst50);

for (let i = 0; i < 50; i++) {
  cumulativeCapture.push(yearlyFootprint - cumulativeCapture[i]);
}

const cumulativeCaptureAllLots = cumsum(cumulativeCapture);

// Footprint for 50 years then stop
const footprint50Years = Array(50).fill(yearlyFootprint);
for (let i = 0; i < 50; i++) {
  footprint50Years.push(0);
}
const totalFootprint50Years = cumsum(footprint50Years);

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 2,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = PercentageBaseline100Years.map((data) => data.age);
export const data = {
  labels,
  datasets: [
    {
      label: 'Kolefnisspor (tonn)',
      data: totalFootprint50Years.map((data) => data),
      fill: true,
      lineTension: 0.5,
      borderColor: 'rgb(rgb(255, 165, 0)',
      backgroundColor: 'rgba(255,165,0,0.1)',
      pointRadius: 1,
    },
    {
      label: 'Binding (tonn)',
      data: cumulativeCaptureAllLots.map((data) => data),
      fill: true,
      lineTension: 0.5,
      borderColor: 'rgb(93,147,104)',
      backgroundColor: 'rgb(93,147,104)',
      pointRadius: 1,
    },
  ],
};

export default function Calc50YearsOfCarbonOffsets100Years() {
  return (
    <>
      <div className='p-6 border border-slate-900 border-1 rounded-md bg-white my-6 flex flex-col w-full'>
        <div className='inline lg:hidden'>
          <LineChart80 options={options} data={data} />
        </div>
        <div className='hidden lg:inline'>
          <LineChart options={options} data={data} />
        </div>
      </div>
    </>
  );
}
