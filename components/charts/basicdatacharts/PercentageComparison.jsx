import { AusturlandData } from '../../data/austurlanddata.js';
import { NordurlandData } from '../../data/nordurlanddata.js';
import { VesturlandData } from '../../data/vesturlanddata.js';
import { SudurlandData } from '../../data/sudurlanddata.js';
import LineChart50 from '../LineScreen50.jsx';
import LineChart80 from '../LineScreen80.jsx';
import { sum } from 'mathjs';

// DATA PREPARATION
// Austurland
const averageAusturland = AusturlandData.map((data) => data.medaltal);
const sumAusturland = sum(averageAusturland);
const percentageAusturland = averageAusturland.map(
  (data) => (data * 100) / sumAusturland
);
// Nordurland
const averageNordurland = NordurlandData.map((data) => data.medaltal);
const sumNordurland = sum(averageNordurland);
const percentageNordurland = averageNordurland.map(
  (data) => (data * 100) / sumNordurland
);
// Vesturland
const averageVesturland = VesturlandData.map((data) => data.medaltal);
const sumVesturland = sum(averageVesturland);
const percentageVesturland = averageVesturland.map(
  (data) => (data * 100) / sumVesturland
);
// Sudurland
const averageSudurland = SudurlandData.map((data) => data.medaltal);
const sumSudurland = sum(averageSudurland);
const percentageSudurland = averageSudurland.map(
  (data) => (data * 100) / sumSudurland
);

const ageArray = AusturlandData.map((data) => data.aldur);

const percentageAverage = ageArray.map((data, index) => {
  return {
    age: data,
    averagePercentage:
      (percentageAusturland[index] +
        percentageNordurland[index] +
        percentageVesturland[index] +
        percentageSudurland[index]) /
      4,
  };
});

console.log(percentageAverage.age);

// CHART PREPARATION
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

const labels = AusturlandData.map((data) => data.aldur);
export const data = {
  labels,
  datasets: [
    {
      label: 'Austurland',
      data: percentageAusturland.map((data) => data),
      fill: false,
      lineTension: 0.5,
      borderColor: 'rgba(242,47,4,0.4)',
      backgroundColor: 'rgba(242,47,4,0.4)',
      pointRadius: 1,
    },
    {
      label: 'Norðurland',
      data: percentageNordurland.map((data) => data),
      fill: false,
      lineTension: 0.5,
      borderColor: 'rgba(7,49,152,0.4)',
      backgroundColor: 'rgba(7,49,152,0.4)',
      pointRadius: 1,
    },
    {
      label: 'Vesturland',
      data: percentageVesturland.map((data) => data),
      fill: false,
      lineTension: 0.5,
      borderColor: 'rgba(46,146,3,0.4)',
      backgroundColor: 'rgba(46,146,3,0.4)',
      pointRadius: 1,
    },
    {
      label: 'Suðurland',
      data: percentageSudurland.map((data) => data),
      fill: false,
      lineTension: 0.5,
      borderColor: 'rgba(242,148,5,0.4)',
      backgroundColor: 'rgba(242,148,5,0.4)',
      pointRadius: 1,
    },
    {
      label: 'Staðaltré',
      data: percentageAverage.map((data) => data.averagePercentage),
      fill: false,
      lineTension: 0.5,
      borderColor: 'rgb(3,3,95)',
      backgroundColor: 'rgba(3,3,95,0.4)',
      pointRadius: 1,
    },
  ],
};

export default function PercentageComparison() {
  return (
    <>
      <div className='p-6 border border-slate-900 border-1 rounded-md bg-white my-6 flex flex-col'>
        <h1 className='text-xl sm:text-2x mb-2l'>
          Árleg binding í prósentum af heildarbindingu á 50 árum
        </h1>
        <p className=' text-sm sm:text-base'>
          Meðaltal fyrir ösp, stafafuru, sitkagreni, birki og lerki
        </p>
        <p className='mb-2 text-sm sm:text-base'>
          Staðaltré: Meðaltal fyrir alla ársfjórðunga
        </p>
        <div className='inline lg:hidden'>
          <LineChart80 options={options} data={data} />
        </div>
        <div className='hidden lg:inline'>
          <LineChart50 options={options} data={data} />
        </div>
      </div>
    </>
  );
}
