import useAuth from '@/hooks/useAuth';
import AuthContent from '@/components/users/AuthContent';
import Link from 'next/link';

import MyNotesFetch from '@/components/mynotes/MyNotesFetch';

export default function MyNotes() {
  const { user } = useAuth();
  const isUser = Boolean(user);

  return (
    <div className='flex justify-center'>
      <main className='bg-white my-3 md:my-6 md:rounded-lg max-w-3xl '>
        <section className='flex flex-col items-start justify-start px-12 pt-12 pb-2'>
          <h1 className='text-2xl sm:text-4xl font-extrabold text-gray-800'>
            Umræða
          </h1>
          <p className='text-left mt-5 text-gray-800 text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          {isUser ? (
            <p className='text-left mt-5 text-indigo-700  '>
              Notandanafn: {user.username}
            </p>
          ) : (
            <p></p>
          )}
          <Link href={`/mynotes/create`}>
            <a className='bg-orange-600 text-white rounded-md my-8 py-2 px-4 flex justify-center'>
              Sendu skilaboð
            </a>
          </Link>
        </section>
        <AuthContent>
          {user ? (
            <MyNotesFetch user={user} />
          ) : (
            <p>You don&#39;t have the permissions necessary to create posts.</p>
          )}
        </AuthContent>
      </main>
    </div>
  );
}
