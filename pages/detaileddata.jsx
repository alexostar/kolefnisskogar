import SudurlandBasicChart from '@/components/charts/basicdatacharts/SudurlandBasicChart';
import AusturlandBasicChart from '@/components/charts/basicdatacharts/AusturlandBasicChart';
import NordurlandBasicChart from '@/components/charts/basicdatacharts/NordurlandBasicChart';
import VesturlandBasicChart from '@/components/charts/basicdatacharts/VesturlandBasicChart';
import PercentageComparison from '@/components/charts/basicdatacharts/PercentageComparison';
import CapturePerYearTotal12 from '@/components/charts/coverstorycharts/CapturePerYearTotal12';
import CumulativeCapturePerYearTotal12 from '@/components/charts/coverstorycharts/CumulativeCapturePerYearTotal12';
import CumulativeCaptureAllLotsTotal12 from '@/components/charts/coverstorycharts/CumulativeCaptureAllLotsTotal12';
import Calc50YearsOfCarbonOffsets100Years from '@/components/charts/coverstorycharts/Calc50YearsOfCarbonOffsets100Years';
import Cover50YearsOfCarbonOffsets from '@/components/charts/coverstorycharts/Cover50YearsOfCarbonOffsets';

export default function DetailedData() {
  return (
    <div className='flex flex-col max-w-4xl items-center py-2 px-4'>
      <div className='w-full flex justify-center my-3'>
        <SudurlandBasicChart />
      </div>
      <div className='w-full flex justify-center my-3'>
        <AusturlandBasicChart />
      </div>
      <div className='w-full flex justify-center my-3'>
        <NordurlandBasicChart />
      </div>
      <div className='w-full flex justify-center my-3'>
        <VesturlandBasicChart />
      </div>
      <div className='w-full flex justify-center my-3'>
        <PercentageComparison />
      </div>
      <div className='w-full flex justify-center my-3'>
        <CapturePerYearTotal12 />
      </div>
      <div className='w-full flex justify-center my-3'>
        <CumulativeCapturePerYearTotal12 />
      </div>
      <div className='w-full flex justify-center my-3'>
        <CumulativeCaptureAllLotsTotal12 />
      </div>
      <div className='w-full flex justify-center my-3'>
        <Cover50YearsOfCarbonOffsets />
      </div>
      <div className='w-full flex justify-center my-3'>
        <Calc50YearsOfCarbonOffsets100Years />
      </div>
    </div>
  );
}
