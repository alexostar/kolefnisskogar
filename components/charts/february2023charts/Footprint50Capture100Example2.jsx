// Example 1 – 75% is released again into the athosphere during 50 years after the crediting period

// Import data with the capture per year (50 years) as percentage of the total capture
import { SurefnisskogurData } from '../../data/surefni-osp-greni-base.js';
import LineChartFullSize from '../LineChartFullSize';
import { cumsum } from 'mathjs';

// Create variable for the carbon footprint
const yearlyFootprint = 12;

// Create an array of objects with capture per year for first 50 years
const capturePerYearFirst50 = SurefnisskogurData.map((data) => {
  return {
    age: data.aldur,
    capture: (data.percentage * yearlyFootprint) / 100,
  };
});

// Create arrays with the capture and age (used for the labels)
const capture = capturePerYearFirst50.map((data) => data.capture);
const age = capturePerYearFirst50.map((data) => data.age);

// EXAMPLE HEREAFTER FROM CHATCPT
const arr1 = [1, 3, 6, 9, 12, 12, 12, 12, 12, 12];
const arr2 = [];
let sum = 0;
for (let i = 0; i < arr1.length; i++) {
  sum += arr1[i];
  if (i >= 5 && i <= 9) {
    sum -= arr1[i - 5];
  }
  arr2.push(sum);
}

// END TEST

//Add 50 next years to the capture array
for (let i = 0; i < 50; i++) {
  capture.push(0);
  age.push(51 + i);
}

// Cumulative capture in one lot for 50 year

const cumulativeCapture = cumsum(capture);

// Capture all lots 100 years

const cumulativeCaptureAllLots = [];
let sumCapture = 0;
for (let i = 0; i < cumulativeCapture.length; i++) {
  sumCapture += cumulativeCapture[i];
  if (i >= 50) {
    sumCapture -= cumulativeCapture[i - 50];
  }
  cumulativeCaptureAllLots.push(sumCapture);
}

//const cumulativeCaptureAllLots = cumsum(cumulativeCapture); OLD

/*
TEST 50% lost to the air after 50 years
for (let i = 0; i < 50; i++) {
  cumulativeCapture.push(yearlyFootprint - cumulativeCapture[i] - 6);
}
TEST 50% lost to the air in 50 years after year 50
for (let i = 0; i < 50; i++) {
  cumulativeCapture.push(yearlyFootprint - cumulativeCapture[i] - 0.12 * i);
}
*/

// Example 1 75% lost to the air in 50 years after year 50
// 0.18 * 50 = 9 (75% of 12)
/*
for (let i = 0; i < 50; i++) {
  cumulativeCapture.push(yearlyFootprint - cumulativeCapture[i] - 0.18 * i);
}
*/

//const cumulativeCaptureAllLots = cumsum(cumulativeCapture);

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

const labels = age.map((data) => data);

export const data = {
  labels,
  datasets: [
    {
      label: 'Losun (tonn koltvísýringur)',
      data: totalFootprint50Years.map((data) => data),
      fill: true,
      lineTension: 0.5,
      borderColor: 'rgb(rgb(255, 165, 0)',
      backgroundColor: 'rgba(255,165,0,0.1)',
      pointRadius: 1,
    },
    {
      label: 'Binding (tonn koltvísýringur)',
      data: cumulativeCaptureAllLots.map((data) => data),
      fill: true,
      lineTension: 0.5,
      borderColor: 'rgb(93,147,104)',
      backgroundColor: 'rgb(93,147,104)',
      pointRadius: 1,
    },
  ],
};

export default function Footprint50Capture100Example2() {
  return (
    <>
      <div className='p-6 border border-slate-900 border-1 rounded-md bg-white my-6 flex flex-col w-full h-auto '>
        <LineChartFullSize options={options} data={data} />
      </div>
    </>
  );
}
