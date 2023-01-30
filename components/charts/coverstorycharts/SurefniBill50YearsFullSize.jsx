import { SurefnisskogurData } from '../../data/surefni-osp-greni-base';
//import LineChart from '../LineChart.jsx';
import LineChartFullSize from '../LineChartFullSize';

import { cumsum } from 'mathjs';

const yearlyFootprint = 1.6;

const offsetcapturePerYear = SurefnisskogurData.map((data) => {
  return {
    age: data.aldur,
    capture: (data.percentage * yearlyFootprint) / 100,
    offset: yearlyFootprint,
  };
});

const offset = offsetcapturePerYear.map((data) => data.offset);
const capture = offsetcapturePerYear.map((data) => data.capture);

const cumulativeCapturePerYear = cumsum(capture);
const cumulativeCaptureAllLots = cumsum(cumulativeCapturePerYear);
const cumulativeOffsetPerYear = cumsum(offset);

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

/*
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 2,
*/

const labels = SurefnisskogurData.map((data) => data.aldur);

export const data = {
  labels,
  datasets: [
    {
      label: 'Losun (tonn koldíoxíð)',
      data: cumulativeOffsetPerYear.map((data) => data),
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

/*
backgroundColor: 'rgba(75,192,192,0.4)',
backgroundColor: 'rgba(75,72,192,0.4)',
*/

export default function SurefniBill50YerarsFullSize() {
  return (
    <>
      <div className='p-6 border border-slate-900 border-1 rounded-md bg-white my-6 flex flex-col w-full h-auto '>
        <LineChartFullSize options={options} data={data} />
      </div>
    </>
  );
}

/*
      <div className='p-6 border border-slate-900 border-1 rounded-md bg-white my-6 flex flex-col w-full '>
        <h1 className='text-xl sm:text-3xl mb-3'>
          <i>Kolefnisjöfnun</i> hjá Súrefni
        </h1>

        <LineChartFullSize options={options} data={data} />
      </div>

*/
