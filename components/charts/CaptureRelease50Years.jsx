import { CaptureData } from '../data/average-person-12-ton.js';
import { Line } from 'react-chartjs-2';
import LineChart50 from './LineScreen50.jsx';
import LineChart80 from './LineScreen80.jsx';
//import { cumsum } from 'mathjs';

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

const labels = CaptureData.map((data) => data.age);

export const data = {
  labels,
  datasets: [
    {
      label: 'Losun (tonn)',
      data: CaptureData.map((data) => data.eCumulative12),
      fill: false,
      lineTension: 0.5,
      borderColor: 'rgb(75,192,192)',
      backgroundColor: 'rgba(75,192,192,0.4)',
      pointRadius: 1,
    },
    {
      data: CaptureData.map((data) => data.dCumulativeC),
      label: 'Binding (tonn)',
      fill: true,
      lineTension: 0.5,
      borderColor: 'rgb(75,72,192)',
      backgroundColor: 'rgba(75,72,192,0.4)',
      pointRadius: 1,
    },
  ],
};

export default function CaptureRelease50Years() {
  return (
    <>
      <div className='p-6 border border-slate-900 border-1 rounded-md bg-white my-6 flex flex-col'>
        <h1 className='text-xl sm:text-2xl'>
          <strong>Kolefnisjöfnun</strong> með skógrækt í 50 ár
        </h1>
        <p className='mb-2'>
          12 tonna losun CO<sub>2</sub>-ígilda <strong>jöfnuð</strong> með
          nýskógrækt á hverju ári
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
