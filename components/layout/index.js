import Head from 'next/head';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import { useRouter } from 'next/router';

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <div className='flex flex-col items-center min-h-screen bg-slate-50'>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      {router.pathname === '/' && <Hero />}
      <div className=''>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'Kolefnisbrask | Kolefnisbinding í skógi',
  description: 'Kolefnisjöfnun með skógrækt á Íslandi',
  keywords: 'Kolefnisbinding, Kolefnisjöfnun, Skógrækt, Ísland',
};
