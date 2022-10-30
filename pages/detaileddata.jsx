import SudurlandBasicChart from '@/components/charts/basicdatacharts/SudurlandBasicChart';
import AusturlandBasicChart from '@/components/charts/basicdatacharts/AusturlandBasicChart';
import NordurlandBasicChart from '@/components/charts/basicdatacharts/NordurlandBasicChart';
import VesturlandBasicChart from '@/components/charts/basicdatacharts/VesturlandBasicChart';

export default function DetailedData() {
  return (
    <div className='flex flex-col max-w-4xl items-center py-2 px-4'>
      <div className='my-6'>
        <SudurlandBasicChart />
      </div>
      <div className='my-6'>
        <AusturlandBasicChart />
      </div>
      <div className='my-6'>
        <NordurlandBasicChart />
      </div>
      <div className='my-6'>
        <VesturlandBasicChart />
      </div>
    </div>
  );
}
