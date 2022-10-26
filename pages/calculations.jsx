import Image from 'next/image';
import Link from 'next/link';
import CaptureAgeAndYears from '../components/charts/CaptureAgeAndYears';
import CumulativeCaptureAgeAndYears from '../components/charts/CumulativeCaptureAgeAndYears';
import CumulativeCapture50Lots from '../components/charts/CumulativeCapture50Lots';
import CaptureRelease100Years from '../components/charts/CaptureRelease100Years.jsx';

export default function Calculations() {
  return (
    <div className='flex flex-col max-w-4xl items-center py-2 px-4'>
      <div className='w-full mt-6'>
        <p className='text-left'>Sigfús Bjarnason | 23. október 2022</p>
        <h1 className='text-2xl sm:text-3xl md:text-4xl mt-1 mb-4 text-left'>
          Er hægt að kolefnisjafna sig með skógrækt á Íslandi?
        </h1>
      </div>
      <Image
        className='rounded-md'
        src='/BorgthorH-1.jpg'
        alt='Environmental vandalism'
        width={1976}
        height={852}
      />
      <div className='w-full'>
        <p className='text-sm italic text-right '>Mynd: Borgþór Magnússon</p>
      </div>
      <p className='mt-5 mb-3 text-base sm:text-lg'>
        Já, það er hægt. Skoðum nánar dæmið á forsíðu þessa vefs um
        einstaklinginn sem kaupir árlega í 50 ár nýjan skógræktarpakka þar sem
        áætluð heidarbinding á hverjum reit mótsvarar árlegu kolefnisspori hans
        (12 tonn CO
        <sub>2</sub>-ígildi). Ef við gerum ráð fyrir að kolefnisspori hans á
        þessari jörð ljúki eftir þessi 50 ár, og þar með kaupum á nýrri
        skógrækt, mun árframhaldandi vöxtur skógarins sjá til að hann nær
        kolefnishlutleysi fimm áratugum eftir að hafa tekið sitt síðasta skref!
      </p>
      <div className='my-3'>
        <CaptureRelease100Years />
      </div>
      <p className='my-3 text-base sm:text-lg'>
        Ég vil taka það fram að ég er hvorki skógfræðingur né stærðfræðingur svo
        vonandi eru einhverjar villur í þessum útreikningunm eða þær forsendur
        sem ég gef mér rangar. Annars væri erfitt að skilja hvernig skógrækt
        lenti inn í aðgerðaráætlun stjórnvalda um kolefnishlutleysi árið 2040.
        Lítum nánar á hvernig þetta er reiknað.
      </p>
      <p className='my-3 text-base sm:text-lg'>
        Gögnin sem ég nota er að finna á{' '}
        <a href='https://reiknivel.skogur.is/' className='text-blue-700'>
          Skógarkolefnisreikni
        </a>{' '}
        Skógræktarinnar. Reiknirinn er forrit sem aðstoðar við að gróflega meta
        mögulega kolefnisbindingu nýskógræktar.
      </p>
      <p className='my-3 text-base sm:text-lg'>
        Fyrst reiknaði ég út bindingu <q>staðaltrés</q> á hverju ári í prósentum
        af heildarbindingu 50 ára. Staðaltréð er hér skilgreint sem 30% birki,
        20% stafafura, 20%, sitkagreni, 15% ösp og 15% lerki.
      </p>
      <p className='my-3 text-base sm:text-lg'>
        Á línuritinu hér að neðan eru svo þessar prósentutölur notaðar til að
        reikna áætlaða bindingu á ári í skógræktarreit þar sem áætluð
        heildarbinding á 50 árum er 12 tonn CO
        <sub>2</sub>.
      </p>
      <div className='my-3'>
        <CaptureAgeAndYears />
      </div>
      <p className='my-3 text-base sm:text-lg'>
        Hugtakið staðaltré er notað hér til að fá grófa heildarmynd af
        kolefnisbindingu með skógrækt og mögulegu hlutverki skógræktar í
        framtíða kolefnishlutleysi Íslands. Ef líta ætti til einstakra verkefna
        væri hægt að breyta hlutfalli trjátegunda í samræmi við hvaða tegundir
        eru notaðar í hverju verkefni fyrir sig. Ef meira er notað af ösp næði
        t.d. kúrvan hámarki fyrr og ef meira er notað af sitkagreni nær hún
        hámarki seinna, en það breytir þó ekki heildarmyndinni mikið.
      </p>
      <p className='my-3 text-base sm:text-lg'>
        Sama er að segja um mismunandi landgerðir og staðsetningu á landinu. Þó
        lerkinu sé sleppt í sunnlenskri skógrækt breytist útlit
        prósentukúrfunnar ekki mikið. Og þó mikill munur geti verið á
        heildarbindingu á hektara breytist prósentukúrvan ekki það mikð að
        heildarmyndin breytist.
      </p>
      <p className='my-3 text-base sm:text-lg'>
        Til að áætla heildarbindingu trjánna á hverjum aldri reiknaði ég
        uppsafnaða (cumulative) bindingu út frá þessum tölum. Fyrsta árið er
        heildarbindingin <strong>a</strong>, annað árið <strong>a+b</strong>,
        þriðja árið <strong>a+b+c</strong> (o.s.frv), þar sem{' '}
        <strong>a,b,c....</strong> er binding á hverju ári.
      </p>
      <div className='my-3'>
        <CumulativeCaptureAgeAndYears />
      </div>
      <p className='my-3 text-base sm:text-lg'>
        Að 50 árum liðnum eru skógræktarreitirnir orðnir 50, - einn sem búinn að
        ná 50 ára aldri, einn sem er 49 ára, o.s frv, alla götur niður í eins
        árs gamla nýskógrækt. Hér þarf því aftur að reikna uppsafnaða bindingu.
        Samanlagt er þá bindingin í öllum reitum orðin 261 tonn. Á sama tíma er
        þessi einstaklingur búinn að losa um 600 (50 x 12) tonn.
      </p>
      <div className='my-3'>
        <CumulativeCapture50Lots />
      </div>
      <p className='mt-3 mb-6 text-base sm:text-lg'>
        Hafðu samband{' '}
        <Link href='/contactform'>
          <a className='text-blue-700'>hér</a>
        </Link>{' '}
        ef þú hefur einhverjar athugasemdir við þessa útreikninga eða þær
        forsendur sem ég gef mér, eða ef þú villt koma einhverju öðru á framfæri
        í þessu samhengi.
      </p>
    </div>
  );
}
