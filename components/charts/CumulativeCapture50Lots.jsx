import { CaptureData } from '../data/average-person-12-ton.js';
import { cumsum } from 'mathjs';
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
      display: false,
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = CaptureData.map((data) => data.age);
const x = 12;
const b = CaptureData.map((data) => (data.aPercemtagetGrowth * x) / 100);
const c = cumsum(b);
const d = cumsum(c);

export const data = {
  labels,
  datasets: [
    {
      label: 'Binding (tonn)',
      data: d.map((data) => data),
      fill: false,
      lineTension: 0.5,
      borderColor: 'rgb(75,72,192)',
      backgroundColor: 'rgba(75,72,192,0.4)',
      pointRadius: 1,
    },
  ],
};

export default function CumulativeCapture50lots() {
  return (
    <>
      <div className='p-6 border border-slate-900 border-1 rounded-md bg-white my-6 flex flex-col'>
        <h1 className='text-xl sm:text-2x mb-2l'>
          Uppsöfnuð binding (tonn) á 50 árum
        </h1>
        <p className='mb-2'>
          50 skógræktarreitir með áætlaða 12 tonna CO
          <sub>2</sub> heildarbindingu
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
