import { SurefnisskogurData } from '../../data/surefni-osp-greni-base.js';
// THe following import is only used for the labels
import { SurefnisskogurData100Years } from '../../data/surefni-osp-greni-base-100years.js';
import LineChartFullSize from '../LineChartFullSize';
import { cumsum } from 'mathjs';

// Start by adding the carbon footprint
const yearlyFootprint = 1.6;

// Create an array of objects with capture and offset per year for first 50 years
const capturePerYearFirst50 = SurefnisskogurData.map((data) => {
  return {
    age: data.aldur,
    capture: (data.percentage * yearlyFootprint) / 100,
    offset: yearlyFootprint,
  };
});

const capture = capturePerYearFirst50.map((data) => data.capture);
const cumulativeCapture = cumsum(capture);

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

const labels = SurefnisskogurData100Years.map((data) => data.aldur);

export const data = {
  labels,
  datasets: [
    {
      label: 'Losun (tonn koldíoxíð)',
      data: totalFootprint50Years.map((data) => data),
      fill: true,
      lineTension: 0.5,
      borderColor: 'rgb(rgb(255, 165, 0)',
      backgroundColor: 'rgba(255,165,0,0.1)',
      pointRadius: 1,
    },
    {
      label: 'Binding (tonn koldíoxíð)',
      data: cumulativeCaptureAllLots.map((data) => data),
      fill: true,
      lineTension: 0.5,
      borderColor: 'rgb(93,147,104)',
      backgroundColor: 'rgb(93,147,104)',
      pointRadius: 1,
    },
  ],
};

export default function SurefniBill50Years100Years() {
  return (
    <>
      <div className='p-6 border border-slate-900 border-1 rounded-md bg-white my-6 flex flex-col w-full h-auto '>
        <LineChartFullSize options={options} data={data} />
      </div>
    </>
  );
}
