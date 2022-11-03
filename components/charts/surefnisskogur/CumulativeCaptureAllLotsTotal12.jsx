import { SurefnisskogurData } from '../../data/surefnisskogurData.js';
import { cumsum } from 'mathjs';
import LineChart50 from '../LineScreen50.jsx';
import LineChart80 from '../LineScreen80.jsx';

const surefnisskogurPercentageBaseline = SurefnisskogurData.map(
  (data) => (data.medaltal * 100) / 380
);

// Binding data
const yearlyFootprint = 12;
const capturePerYear = surefnisskogurPercentageBaseline.map(
  (data) => (data * yearlyFootprint) / 100
);
const cumulativeCapturePerYear = cumsum(capturePerYear);
const cumulativeCaptureAllLots = cumsum(cumulativeCapturePerYear);

// Offset data
const yearlyOffset = Array(50).fill(yearlyFootprint);
const cumulatedOffset = cumsum(yearlyOffset);

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

const labels = SurefnisskogurData.map((data) => data.aldur);
export const data = {
  labels,
  datasets: [
    {
      label: 'Kolefnisspor (tonn)',
      data: cumulatedOffset.map((data) => data),
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

export default function CumulativeCaptureAllLotsTotal12() {
  return (
    <>
      <div className='p-6 border border-slate-900 border-1 rounded-md bg-white my-6 flex flex-col'>
        <h1 className='text-xl sm:text-2x mb-2l'>
          <i>Kolefnisjöfnun</i> í Súrefnisskógi í 50 ár
        </h1>

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
