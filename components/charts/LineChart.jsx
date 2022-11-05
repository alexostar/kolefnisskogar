import { Line } from 'react-chartjs-2';

export default function LineChart({ options, data }) {
  return (
    <div style={{ position: 'relative', height: 'auto', width: '100%' }}>
      <Line options={options} data={data} />
    </div>
  );
}
