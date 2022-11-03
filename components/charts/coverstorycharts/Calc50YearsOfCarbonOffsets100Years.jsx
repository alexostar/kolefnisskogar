import { PercentageBaseline100Years } from '../../data/percentageBaseline100Years.js';
import { PercentageBaseline } from '../../data/percentageBaseline.js';
import { cumsum } from 'mathjs';
import LineChart50 from '../LineScreen50.jsx';
import LineChart80 from '../LineScreen80.jsx';

// Start by adding the carbon footprint
const yearlyFootprint = 12;

const capturePerYearFirst50 = PercentageBaseline.map(
  (data) => (data.averagePercentage * yearlyFootprint) / 100
);

const cumulativeCapture = cumsum(capturePerYearFirst50);

for (let i = 0; i < 50; i++) {
  cumulativeCapture.push(yearlyFootprint - cumulativeCapture[i]);
}

const cumulativeCaptureAllLots = cumsum(cumulativeCapture);

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

const labels = PercentageBaseline100Years.map((data) => data.age);
export const data = {
  labels,
  datasets: [
    {
      label: 'Losun (tonn)',
      data: totalFootprint50Years.map((data) => data),
      fill: false,
      lineTension: 0.5,
      borderColor: 'rgb(75,192,192)',
      backgroundColor: 'rgba(75,192,192,0.4)',
      pointRadius: 1,
    },
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

export default function Calc50YearsOfCarbonOffsets100Years() {
  return (
    <>
      <div className='p-6 border border-slate-900 border-1 rounded-md bg-white my-6 flex flex-col'>
        <h1 className='text-xl sm:text-2x mb-2l'>
          Uppsöfnuð binding (tonn) á 100 árum
        </h1>
        <p className='mb-2'>
          50 skógræktarreitir með áætlaða 12 tonna CO
          <sub>2</sub> heildarbindingu á 50 árum
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
