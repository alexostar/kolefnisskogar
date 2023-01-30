import { Line } from 'react-chartjs-2';

export default function LineChartFullSize({ options, data }) {
  return (
    <div className=''>
      <Line options={options} data={data} width={800} height={400} />
    </div>
  );
}
