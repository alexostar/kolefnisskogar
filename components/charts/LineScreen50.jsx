import { Line } from 'react-chartjs-2';

export default function LineChart50({ options, data }) {
  return (
    <div style={{ position: 'relative', height: 'auto', width: '50vw' }}>
      <Line options={options} data={data} />
    </div>
  );
}
