import { CaptureData } from '../data/average-person-12-ton-100-years.js';

import LineChart50 from './LineScreen50.jsx';
import LineChart80 from './LineScreen80.jsx';

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

const labels = CaptureData.map((data) => data.age100);

export const data = {
  labels,
  datasets: [
    {
      label: 'Losun (tonn)',
      data: CaptureData.map((data) => data.cumulativeRelease),
      fill: false,
      lineTension: 0.5,
      borderColor: 'rgb(75,192,192)',
      backgroundColor: 'rgba(75,192,192,0.4)',
      pointRadius: 1,
    },
    {
      data: CaptureData.map((data) => data.cumumlativeCapture),
      label: 'Binding (tonn)',
      fill: true,
      lineTension: 0.5,
      borderColor: 'rgb(75,72,192)',
      backgroundColor: 'rgba(75,72,192,0.4)',
      pointRadius: 1,
    },
  ],
};

export default function CaptureRelease100Years() {
  return (
    <>
      <div className='p-6 border border-slate-900 border-1 rounded-md bg-white my-6 flex flex-col'>
        <h1 className='text-xl sm:text-2xl'>
          <strong>Kolefnisjöfnun</strong> með skógrækt í 100 ár
        </h1>
        <p className='mb-2'>
          Kolefnisspori och nýrri skógrækt lýkur eftir 50 ár
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
