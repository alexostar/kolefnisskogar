import Link from 'next/link';

export default function Footer() {
  return (
    <div className='container mx-auto max-w-4xl flex justify-between items-center px-4 py-2 sm:py-4 border-t-2'>
      <p className=' text-orange-600 text-base text-left'>
        This site is under construction
      </p>
      <Link href='/contactform'>
        <a className='text-slate-900 hover:text-orange-600 text-base text-right'>
          Hafðu samband!
        </a>
      </Link>
    </div>
  );
}
