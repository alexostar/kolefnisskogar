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
let sum1 = 0;
for (let i = 0; i < arr1.length; i++) {
  sum1 += arr1[i];
  if (i >= 5 && i <= 9) {
    sum1 -= arr1[i - 5];
  }
  arr2.push(sum1);
}
//console.log(arr1, arr2);

const arr3 = [1, 3, 6, 9, 12, 10, 8, 6, 4, 2];
const arr4 = [];
let sum2 = 0;
for (let i = 0; i < arr3.length; i++) {
  sum2 += arr3[i];
  if (i >= 5 && i <= 9) {
    sum2 -= arr3[i - 5];
  }
  arr4.push(sum2);
}
//console.log(arr3, arr4);

// This is the method that works for taking account for carbon leakage after the certification period
const arr5 = [1, 3, 6, 9, 12];
const arr6 = [];
//let sum3 = 0;
for (let i = 1; i < 6; i++) {
  arr5.push(yearlyFootprint - i * 2);
}

let sum3 = 0;
for (let i = 0; i < arr5.length; i++) {
  sum3 += arr5[i];
  if (i >= 5 && i <= 9) {
    sum3 -= arr5[i - 5];
  }
  arr6.push(sum3);
}
//console.log(arr5, arr6);

/* ChatGPT conversation:
I would like to rephrase the problem I would like to solve as follows:  
I have an array (arr1) with the following 10 numbers [1,3,6,9,12,12,12,12,12,12]. 
I would like to create another array (arr2) as follows: The 10 numbers are the cumulative sum of arr1. 
But from arr2[5] to arr2[9] I need to subract the value in arr1[i-5] from the cumulative sum. Can you change the code accordingly?
-----
Here's how the updated code works:
First, we define the input array arr1 with the 10 numbers.
We also define an empty array arr2 where we will store the cumulative sums.
We use a for loop to iterate over all elements of arr1. In each iteration, we add the current element to a sum variable, and then push that sum value to arr2.
After computing the cumulative sum, we check whether the current index i is between 5 and 9 (inclusive). If it is, then we subtract the value at index i - 5 from the sum. This implements the subtraction you asked for.
Finally, we push the updated sum value to arr2 and continue to the next iteration of the loop.
Once the loop completes, we log the contents of arr2 to the console so we can see the resulting array.
This should give you an output array arr2 that contains the cumulative sums you're looking for, with the subtraction performed as described in the updated problem statement.
*/
// END TEST

//Add 50 next years to the capture array accounting for carbon leakage
for (let i = 0; i < 50; i++) {
  capture.push(-0.18);
  age.push(51 + i);
}

// Cumulative capture in one lot for 100 years
const cumulativeCapture = cumsum(capture);
console.log(cumulativeCapture);

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
      label: 'Kolefnisspor (tonn koltvísýringsígilda)',
      data: totalFootprint50Years.map((data) => data),
      fill: true,
      lineTension: 0.5,
      borderColor: 'rgb(rgb(255, 165, 0)',
      backgroundColor: 'rgba(255,165,0,0.1)',
      pointRadius: 1,
    },
    {
      label: 'Binding (tonn koltvísýrings)',
      data: cumulativeCaptureAllLots.map((data) => data),
      fill: true,
      lineTension: 0.5,
      borderColor: 'rgb(93,147,104)',
      backgroundColor: 'rgb(93,147,104)',
      pointRadius: 1,
    },
  ],
};

export default function Footprint50Capture100Example3() {
  return (
    <>
      <div className='p-6 border border-slate-900 border-1 rounded-md bg-white my-6 flex flex-col w-full h-auto '>
        <LineChartFullSize options={options} data={data} />
      </div>
    </>
  );
}
