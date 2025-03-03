import Link from 'next/link';
import { useMutation, gql } from '@apollo/client';

import { GET_USER } from '@/hooks/useAuth';

const LOG_IN = gql`
  mutation logIn($login: String!, $password: String!) {
    loginWithCookies(input: { login: $login, password: $password }) {
      status
    }
  }
`;

export default function LogInForm() {
  const [logIn, { loading, error }] = useMutation(LOG_IN, {
    refetchQueries: [{ query: GET_USER }],
  });

  const errorMessage = error?.message || '';
  const isEmailValid =
    !errorMessage.includes('empty_email') &&
    !errorMessage.includes('empty_username') &&
    !errorMessage.includes('invalid_email') &&
    !errorMessage.includes('invalid_username');
  const isPasswordValid =
    !errorMessage.includes('empty_password') &&
    !errorMessage.includes('incorrect_password');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const { email, password } = Object.fromEntries(data);
    logIn({
      variables: {
        login: email,
        password,
      },
    }).catch((error) => {
      console.error(error);
    });
  }

  return (
    <div className='flex flex-col justify-start items-center mt-12 min-h-screen grow'>
      <div className='bg-white shadow-md border border-gray-200 rounded-lg w-96 p-4 sm:p-6 lg:p-8 my-6'>
        <form className='space-y-6' method='post' onSubmit={handleSubmit}>
          <h1 className='text-xl mb-6'>
            LOGIN{' '}
            <span>
              <i>(Not yet implemented)</i>
            </span>
          </h1>
          <fieldset disabled={loading} aria-busy={loading}>
            <label
              className='text-sm font-medium text-gray-900 block mb-2'
              htmlFor='log-in-email'>
              Netfang
            </label>
            <input
              className='mb-4 bg-orange-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5'
              id='log-in-email'
              type='email'
              name='email'
              autoComplete='username'
              required
            />
            <label
              className='text-sm font-medium text-gray-900 block mb-2 dark:text-slate-300'
              htmlFor='log-in-password'>
              Lykilorð
            </label>
            <input
              className='mb-8 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5'
              id='log-in-password'
              type='password'
              name='password'
              autoComplete='current-password'
              required
            />
            <Link href='/users/log-in'>
              <a className='text-gray-300'>
                Gleymt lykilorði? (Not enabled yet)
              </a>
            </Link>
            {!isEmailValid ? (
              <p className='error-message'>Invalid email. Please try again.</p>
            ) : null}
            {!isPasswordValid ? (
              <p className='error-message'>
                Invalid password. Please try again.
              </p>
            ) : null}
            <button
              className='mt-2 w-full text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
              type='submit'
              disabled={loading}>
              {loading ? 'Logging in...' : 'Innskráning'}
            </button>
          </fieldset>
          <p className=''>
            <Link href='/users/sign-up'>
              <a className='text-blue-600 hover:underline'>NÝSKRÁNING</a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
