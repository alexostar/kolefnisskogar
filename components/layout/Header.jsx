import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { BiLogIn } from 'react-icons/bi';
import { BiLogOut } from 'react-icons/bi';

import useAuth from '@/hooks/useAuth';

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const { loggedIn } = useAuth();

  return (
    <header className='sticky top-0 z-40 w-full bg-white md:bg-white/90 md:backdrop-blur-sm'>
      <div className='container mx-auto max-w-4xl flex justify-between items-center py-2 px-4'>
        {/* Left - Logo */}
        <Link href='/'>
          <a className='flex space-x-0 items-end cursor-pointer my-auto'>
            <p className='text-slate-900 text-xl font-semibold tracking-widest'>
              kolefnis
            </p>
            <span className='text-xl font-semibold text-orange-700 tracking-widest'>
              skógar
            </span>
          </a>
        </Link>

        {/* Right */}
        <nav className='flex  items-center justify-end text-slate-900 md:ml-auto'>
          <ul className='space-x-8'>
            <li className='hidden md:inline cursor-pointer hover:text-orange-600'>
              <Link href='/calculations'>
                <a>Útreikningar</a>
              </Link>
            </li>
            <li className='hidden md:inline cursor-pointer hover:text-orange-600'>
              <Link href='/about'>
                <a>Um</a>
              </Link>
            </li>

            <div className='hidden'>
              {!loggedIn ? (
                <BiLogIn
                  className='text-2xl text-slate-900 hidden md:inline cursor-pointer hover:text-orange-600'
                  onClick={() => router.push('/users/log-in')}
                />
              ) : (
                <>
                  <li className='hidden md:inline cursor-pointer hover:text-orange-600'>
                    <Link href='/mynotes/create'>
                      <a>Ábendingar</a>
                    </Link>
                  </li>

                  <BiLogOut
                    className='text-2xl text-slate-900 hidden md:inline cursor-pointer hover:text-orange-600'
                    onClick={() => router.push('/users/log-out')}
                  />
                </>
              )}
            </div>
            {!menuOpen && (
              <HiMenu
                className='text-3xl text-slate-900 md:hidden cursor-pointer hover:text-orange-600'
                onClick={() => setMenuOpen(true)}
              />
            )}
          </ul>

          {/* Open mobile menu starts      */}
          <div className='flex relative'>
            {menuOpen && (
              <AiOutlineClose
                fontSize={28}
                className='text-white md:hidden cursor-pointer hover:text-orange-600'
                onClick={() => setToggleMenu(false)}
              />
            )}
            {menuOpen && (
              <ul
                className='z-10 fixed -top-0 -right-2 px-6 py-1 backdrop-blur-sm w-full h-screen shadow-2xl md:hidden list-none
                flex flex-col justify-start items-end bg-slate-50/90 text-slate-900 animate-slide-in'>
                <li className='text-3xl mt-3 mb-6 cursor-pointer hover:text-orange-600'>
                  <AiOutlineClose onClick={() => setMenuOpen(false)} />
                </li>

                <li className='my-2 mr-3 text-lg flex flex-col items-end'>
                  <Link href='/calculations'>
                    <a
                      onClick={() => setMenuOpen(false)}
                      className='cursor-pointer hover:text-orange-600'>
                      Útreikningar
                    </a>
                  </Link>
                </li>

                <div className='hidden'>
                  <li className=' my-2 mr-3 text-lg flex flex-col items-end'>
                    <Link href='/mynotes/create'>
                      <a
                        onClick={() => setMenuOpen(false)}
                        className='cursor-pointer hover:text-orange-600'>
                        Ábendingar
                      </a>
                    </Link>
                  </li>
                </div>

                <li className='my-2 mr-3 text-lg flex flex-col items-end'>
                  <Link href='/about'>
                    <a
                      onClick={() => setMenuOpen(false)}
                      className='cursor-pointer hover:text-orange-600'>
                      Um vefinn
                    </a>
                  </Link>
                </li>

                <div className='hidden'>
                  <li className=' my-2 mr-3 text-lg flex flex-col items-end'>
                    {!loggedIn ? (
                      <Link href='/users/log-in'>
                        <a
                          onClick={() => setMenuOpen(false)}
                          className='cursor-pointer hover:text-orange-600'>
                          Innskráning
                        </a>
                      </Link>
                    ) : (
                      <Link href='/users/log-out'>
                        <a
                          onClick={() => setMenuOpen(false)}
                          className='cursor-pointer hover:text-orange-600'>
                          Útskráning
                        </a>
                      </Link>
                    )}
                  </li>
                </div>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
