import { Line } from 'react-chartjs-2';

export default function LineChart80({ options, data }) {
  return (
    <div style={{ position: 'relative', height: 'auto', width: '80vw' }}>
      <Line options={options} data={data} />
    </div>
  );
}
