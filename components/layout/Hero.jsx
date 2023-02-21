import Image from 'next/image';
import Link from 'next/link';
//import SurefniBill50Years from '@/components/charts/coverstorycharts/SurefniBIll50Yerars';
//import Footprint50Capture100Baseline from '@/components/charts/february2023charts/Footprint50Capture100Baseline';
//import Footprint50Capture100Example1 from '@/components/charts/february2023charts/Footprint50Capture100Example1';
import Footprint50Capture100Example2 from '@/components/charts/february2023charts/Footprint50Capture100Example2';
import Footprint50Capture100Example3 from '@/components/charts/february2023charts/Footprint50Capture100Example3';
import Footprint50Capture100Example4 from '@/components/charts/february2023charts/Footprint50Capture100Example4';

export default function Hero() {
  return (
    <div className='flex flex-col justify-between items-center px-4'>
      <div className='mb-3'>
        <div className='relative w-full'>
          <Image
            className='rounded-b-md'
            src='/SigurdurH-2-cut.png'
            alt='Environmental vandalism'
            width={2686}
            height={554}
          />
          <h1 className='absolute text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white bottom-3 sm:botton-5 md:bottom-7 lg:bottom-9 left-3 sm:left-5 md:left-7 lg:left-9 '>
            Carbon capture examples
          </h1>
        </div>
        <p className='text-sm italic text-right mr-6'>
          Photo: Sigurður H. Magnússon
        </p>
      </div>

      <div className='container mx-auto max-w-4xl flex flex-col items-start px-4 text-lg sm:text-xl'>
        <div className='w-full flex justify-center'>
          <Footprint50Capture100Example2 />
        </div>
        <div className='w-full flex justify-center'>
          <Footprint50Capture100Example3 />
        </div>
        <div className='w-full flex justify-center'>
          <Footprint50Capture100Example4 />
        </div>

        <p className='my-3'>
          Við þessa útreikninga var notast við tölur á{' '}
          <a href='https://reiknivel.skogur.is/' className='text-blue-700'>
            Skógarkolefnisreikni
          </a>{' '}
          Skógræktarinnar um mögulega kolefnisbindingu fimm trjátegunda. Ekki
          var tekið tillit til hve mikið kolefnislosun jarðvegsins gæti hafa
          aukist við yfirdrifið jarðrask. Ekki var heldur reiknað með hversu
          mikið það gróna land sem fór undir skógræktina hefði bundið ef
          náttúran hefði haft sinn gang.
        </p>

        <p className='mt-3 mb-12 text-left'>
          <Link href='/calculations/'>
            <a className='text-blue-700'>Hér</a>
          </Link>{' '}
          er fjallað nánar um þessa útreikninga.
        </p>
      </div>
    </div>
  );
}
