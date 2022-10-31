import { PercentageBaseline } from '../../data/percentageBaseline.js';
import LineChart50 from '../LineScreen50.jsx';
import LineChart80 from '../LineScreen80.jsx';

const yearlyFootprint = 12;
const capturePerYear = PercentageBaseline.map(
  (data) => (data.averagePercentage * yearlyFootprint) / 100
);

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

const labels = PercentageBaseline.map((data) => data.age);
export const data = {
  labels,
  datasets: [
    {
      label: 'Binding (tonn)',
      data: capturePerYear.map((data) => data),
      fill: false,
      lineTension: 0.5,
      borderColor: 'rgb(75,72,192)',
      backgroundColor: 'rgba(75,72,192,0.4)',
      pointRadius: 1,
    },
  ],
};

export default function CapturePerYearTotal12() {
  return (
    <>
      <div className='p-6 border border-slate-900 border-1 rounded-md bg-white my-6 flex flex-col'>
        <h1 className='text-xl sm:text-2x mb-2l'>
          Aldur trjáa og árleg binding
        </h1>
        <p className='mb-2'>
          Áætluð heidlarbinding 12 tonn CO<sub>2</sub> á 50 árum
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
