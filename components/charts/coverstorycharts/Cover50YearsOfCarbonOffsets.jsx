import { PercentageBaseline } from '../../data/percentageBaseline.js';
import LineChart from '../LineChart.jsx';
import LineChart80 from '../LineScreen80.jsx';

import { cumsum } from 'mathjs';

const yearlyFootprint = 12;

const offsetcapturePerYear = PercentageBaseline.map((data) => {
  return {
    age: data.age,
    capture: (data.averagePercentage * yearlyFootprint) / 100,
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

const labels = PercentageBaseline.map((data) => data.age);

export const data = {
  labels,
  datasets: [
    {
      label: 'Kolefnisspor (tonn)',
      data: cumulativeOffsetPerYear.map((data) => data),
      fill: false,
      lineTension: 0.5,
      borderColor: 'rgb(75,192,192)',
      backgroundColor: 'rgba(75,192,192,0.4)',
      pointRadius: 1,
    },
    {
      label: 'Binding (tonn)',
      data: cumulativeCaptureAllLots.map((data) => data),
      fill: true,
      lineTension: 0.5,
      borderColor: 'rgb(75,72,192)',
      backgroundColor: 'rgba(75,72,192,0.4)',
      pointRadius: 1,
    },
  ],
};

export default function Cover50YearsOfCarbonOffsets() {
  return (
    <>
      <div className='p-6 border border-slate-900 border-1 rounded-md bg-white my-6 flex flex-col w-full '>
        <h1 className='text-xl sm:text-3xl mb-3'>
          <i>Kolefnisjöfnun</i> með skógrækt í 50 ár
        </h1>
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
