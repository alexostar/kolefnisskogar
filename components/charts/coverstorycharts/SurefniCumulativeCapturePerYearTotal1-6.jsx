import { SurefnisskogurData } from '../../data/surefni-osp-greni-base';
import LineChartFullSize from '../LineChartFullSize';

import { cumsum } from 'mathjs';

const yearlyFootprint = 1.6;
const capturePerYear = SurefnisskogurData.map((data) => {
  return {
    age: data.aldur,
    capture: (data.percentage * yearlyFootprint) / 100,
    offset: yearlyFootprint,
  };
});

const capture = capturePerYear.map((data) => data.capture);

const cumulativeCapturePerYear = cumsum(capture);

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

const labels = SurefnisskogurData.map((data) => data.aldur);

export const data = {
  labels,
  datasets: [
    {
      label: 'Binding (tonn koldíoxíð)',
      data: cumulativeCapturePerYear.map((data) => data),
      fill: true,
      lineTension: 0.5,
      borderColor: 'rgb(93,147,104)',
      backgroundColor: 'rgb(93,147,104)',
      pointRadius: 1,
    },
  ],
};

export default function SurefniCumulativeCapturePerYearTotal16() {
  return (
    <>
      <div className='p-6 border border-slate-900 border-1 rounded-md bg-white my-6 flex flex-col w-full h-auto '>
        <LineChartFullSize options={options} data={data} />
      </div>
    </>
  );
}
