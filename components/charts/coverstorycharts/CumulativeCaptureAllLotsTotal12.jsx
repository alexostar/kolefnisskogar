import { PercentageBaseline } from '../../data/percentageBaseline.js';
import { cumsum } from 'mathjs';
import LineChart from '../LineChart.jsx';
import LineChart80 from '../LineScreen80.jsx';

const yearlyFootprint = 12;
const capturePerYear = PercentageBaseline.map(
  (data) => (data.averagePercentage * yearlyFootprint) / 100
);
const cumulativeCapturePerYear = cumsum(capturePerYear);
const cumulativeCaptureAllLots = cumsum(cumulativeCapturePerYear);

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
      data: cumulativeCaptureAllLots.map((data) => data),
      fill: false,
      lineTension: 0.5,
      borderColor: 'rgb(75,72,192)',
      backgroundColor: 'rgba(75,72,192,0.4)',
      pointRadius: 1,
    },
  ],
};

export default function CumulativeCaptureAllLotsTotal12() {
  return (
    <>
      <div className='p-6 border border-slate-900 border-1 rounded-md bg-white my-6 flex flex-col w-full'>
        <h1 className='text-xl sm:text-2x mb-2l'>
          Uppsöfnuð binding (tonn) á 50 árum
        </h1>
        <p className='mb-2'>
          50 skógræktarreitir (1-50 ára) með áætlaða 12 tonna CO
          <sub>2</sub> heildarbindingu á 50 árum
        </p>

        <div className='inline lg:hidden'>
          <LineChart80 options={options} data={data} />
        </div>
        <div className='hidden lg:inline'>
          <LineChart options={options} data={data} />
        </div>
      </div>
    </>
  );
}
