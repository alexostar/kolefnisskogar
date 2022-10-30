import Image from 'next/image';
import Link from 'next/link';
import CaptureRelease50YearsCover from '../charts/CaptureRelease50YearsCover';

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
            Um <i>kolefnisjöfnun</i> með skógrækt
          </h1>
        </div>
        <p className='text-sm italic text-right mr-6'>
          Mynd: Sigurður H. Magnússon
        </p>
      </div>

      <div className='container mx-auto max-w-4xl flex flex-col items-start px-4 text-lg sm:text-xl'>
        <p className='mt-1 mb-3'>
          <a
            href='https://www.stjornarradid.is/library/02-Rit--skyrslur-og-skrar/Adgerdaaetlun%20i%20loftslagsmalum%20onnur%20utgafa.pdf'
            className='text-blue-700'>
            Aðgerðaáætlun stjórnvalda í loftslagsmálum
          </a>{' '}
          er ætlað að stuðla að samdrætti í losun gróðurhúsalofttegunda og
          leggja grunninn að markmiði stjórnvalda um kolefnishlutleysi Íslands
          árið 2040. Í áætlunni er gert ráð fyrir að stórauka skógrækt til
          kolefnisbindingar.
        </p>
        <p className='my-3'>
          Í dag <i>kolefnisjafna</i> mörg fyrirtæki vörur sínar og þjónustu. Oft
          felst kolefnisjöfnunin í nýskógrækt þar sem áætluð kolefnisbinding á
          öllum vaxtartíma trjánna samsvarar losunni sem á að bæta fyrir. Það er
          ekki hægt að kalla kolefnisjöfnun!
        </p>
        <p className='my-3'>
          Nýlega hafa sumir landeigendur sem bjóða upp á kolefnisbindingu tekið
          upp vinnubrögð þar gróið land er brotið til skógræktar með stórvirkum
          vinnuvélum og miklu jarðraski. Jarðraskið veldur kolefnislosun úr
          jarðvegi sem sennilega mun yfirgnæfa bindingu trjánna í mörg ár.
        </p>

        <p className='my-3'>
          Á þessum vef er ætlunin að skoða <i>kolefnisjöfnun</i> með skógrækt
          nánar og hvernig bæði landeigendur og kaupendur á þjónustu þeirra nota
          hugtakið til markaðssetningar.
        </p>

        <p className='my-3'>
          Tökum sem dæni einstakling sem árið 2022 hyggst byrja að kolefnisjafna
          sitt líf með áskrift að árlegri nýskógrækt. Honum stendur til boða að
          kaupa <i>skógræktarpakka</i> þar sem áætluð 50 ára binding skógarins
          nemur árlegu kolefnisspori hans, um 12 tonn CO<sub>2</sub>
          -ígildi.
        </p>

        <p className='my-3'>
          Ef hann breytir engu í sínum lífsstíl er kolefnisspor hans árið 2040
          orðið um 216 tonn á meðan skógurinn hefur aðeins bundið um 18 tonn,
          eða rúmlega 7% af heildarlosuninni. Eftir 50 ár er kolefnisskuld hans
          orðin um 340 tonn.
        </p>
        <div className='w-full flex justify-center'>
          <CaptureRelease50YearsCover />
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
