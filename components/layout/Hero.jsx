import Image from 'next/image';
import Link from 'next/link';
import CaptureRelease50YearsCover from '../charts/CaptureRelease50YearsCover';

export default function Hero() {
  return (
    <div className='container mx-auto flex flex-col justify-between items-center px-4'>
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
            Um kolefnisjöfnun með skógrækt
          </h1>
        </div>
        <p className='text-sm italic text-right '>
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
          Á síðustu árum hefur borið meira og meira á að fyrirtæki selji vörur
          og þjónustu sem kolefnisjafnaðar. Oftar en ekki felst kolefnisjöfnunin
          í nýskógrækt þar sem áætluð kolefnisbinding á öllum vaxtartíma trjánna
          samsvarar losunni sem á að bæta fyrir.
        </p>
        <p className='my-3'>
          Nýlega hefur einnig borið á að landeigendur sem bjóða land till
          skógræktar í þessum tillgangi undirbúi landið brjóti með stórvirkum
          tækjum sem valda miklu jarðraski. Þetta veldur mikilli kolefnislosun
          sem í mörg ár gæti yfirgnæft bindingu trjánna
        </p>

        <p className='my-3'>
          Á{' '}
          <Link href='/about/'>
            <a className='text-blue-700'>þessum vef</a>
          </Link>{' '}
          ætlum við að skoða svo kallaða kolefnisjöfnun með skógrækt nánar, bæði
          markadssetningu þeirra sem kom við sögu og þeim aðferðum sem er beitt.
        </p>

        <p className='my-3'>
          Tökum sem dæni einstakling sem árið 2022 hyggst byrja að kolefnisjafna
          líf sitt með áskrift að árlegri nýskógrækt. Honum stendur til boða að
          kaupa skógræktarpakka þar sem áætluð 50 ára binding skógarins nemur
          árlegu kolefnisspori hans, þ.e.a.s. um 12 tonn CO<sub>2</sub>
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
          Við þessa útreikninga er einungis notast við gögn frá{' '}
          <a href='https://www.skogur.is/' className='text-blue-700'>
            Skógræktinni
          </a>{' '}
          um vaxtarferli trjátegunda. Ekki er tekið tillit til hve mikið
          kolefnislosun jarðvegsins mun aukast þegar stórvirkar vinnuvélar eru
          notaðar til að brjóta gróðið land til skógræktar. Og ekki er heldur
          reiknað með hversu mikið það gróna land sem fór undir skógræktina
          hefði bundið hefði náttúran hefði fengið að hafa sinn gang.
        </p>

        <p className='mt-3 mb-12 text-left'>
          Fjallað er nánar um þessa útrekininga{' '}
          <Link href='/calculations/'>
            <a className='text-blue-700'>hér</a>
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
