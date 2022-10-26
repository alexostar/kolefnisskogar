import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className='flex flex-col max-w-4xl items-start pt-6 px-4'>
      <Image
        className='rounded-md'
        src='/SigurdurH-1.jpeg'
        alt='Environmental vandalism'
        width={5994}
        height={3996}
      />
      <div className='w-full'>
        <p className='text-sm italic text-right '>Mynd: Sigurður H Magnússon</p>
      </div>
      <h1 className='text-4xl text-slate-900 my-6'>Um kolefnisskogar.is</h1>
      <p className='my-3 text-base sm:text-lg'>
        Kveikjan að þessum vef er greinin{' '}
        <a
          href='https://kjarninn.is/skodun/hernadur-skograektarinnar-gegn-natturu-islands/'
          className=' text-blue-700'>
          Hernaður Skógræktarinnar gegn náttúru Íslands
        </a>{' '}
        sem birtist í Kjarnanum 18. ágúst 2022. Höfundar eru Sveinn Runólfsson,
        fyrrverandi landgræðslustjóri og Andrés Arnalds, fyrrverandi
        fagmálastjóri Landgræðslu ríkisins.
      </p>
      <p className='my-3 text-base sm:text-lg'>
        Fyrr á árinu birti blaðamaður á Kjarnanum (Bára Huld Beck) grein með
        fyrirsögninni{' '}
        <a
          href='https://kjarninn.is/frettir/varar-vid-villandi-markadssetningu-vardandi-kolefnisjofnunar/'
          className=' text-blue-700'>
          Varar við villandi markaðssetningu varðandi kolefnisjöfnun
        </a>{' '}
        byggð á minnisblaði ritað af Stefáni Gíslasyni
        Umhverfisstjórnunarfræðingi. Þar er fjallað um að hugtökunum
        kolefnisbindingu og kolefnisjöfnun sé oft ruglað saman. Í minnisblaðinu
        bendir Stefán á að{' '}
        <q>
          Kolefnisbinding er hvert það ferli sem tekur til sín koldíoxíð úr
          andrúnsloftinu og bindur það sem kolefni en hinsvegar sé ekki hægt að
          tala um kolefnisjöfnun fyrr en bindingin hefur átt sér stað með
          sannanlegum hætti og að uppfylltum nokkrum grundvallarskilyrðum.
        </q>
      </p>
      <p className='my-3 text-base sm:text-lg'>
        Fyrirtæki og samtök sem vinna við kolefnisbindingu nota oft í sinni
        markaðssetningu að fylgt sé aðferðafræði{' '}
        <a
          href='https://www.skogur.is/is/nyskograekt/fraedsluefni/skogarkolefni'
          className=' text-blue-700'>
          Skógarkolefnis.
        </a>{' '}
        Skógarkolefni er verkefni sem Skógræktin hefur hrundið af stað til að
        koma á fót viðurkenndu ferli vottunar á bindingu kolefnis með
        nýskógrækt. <strong>Hér er markaðssetningin oft ansi villandi!</strong>
      </p>
      <p className='my-3 italic'>
        Ganga frá texta um hver sé tillgangurinn með þessum vef.
      </p>
      <p className='mt-3 mb-6 italic'>
        Ganga frá texta um hverjir standi á bak við með þennan vef.
      </p>
    </div>
  );
}
