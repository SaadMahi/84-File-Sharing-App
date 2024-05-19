'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

import DarkModeToogle from '../_components/DarkModeToggle';

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 border-b px-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-2 text-primary" href="/">
          <Image src="/logo.svg" height={35} width={35} alt="logo" />
          <span className="font-extrabold">File-Share</span>
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <p className="cursor-pointer text-gray-500 transition hover:text-gray-500/75">
                  {' '}
                  About{' '}
                </p>
              </li>

              <li>
                <p className="cursor-pointer text-gray-500 transition hover:text-gray-500/75">
                  {' '}
                  Careers{' '}
                </p>
              </li>

              <li>
                <p className="cursor-pointer text-gray-500 transition hover:text-gray-500/75">
                  {' '}
                  History{' '}
                </p>
              </li>

              <li>
                <p className="cursor-pointer text-gray-500 transition hover:text-gray-500/75">
                  {' '}
                  Services{' '}
                </p>
              </li>

              <li>
                <p className="cursor-pointer text-gray-500 transition hover:text-gray-500/75">
                  {' '}
                  Projects{' '}
                </p>
              </li>

              <li>
                <p className="cursor-pointer text-gray-500 transition hover:text-gray-500/75">
                  {' '}
                  Blog{' '}
                </p>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <DarkModeToogle />

            <div className="hidden sm:flex sm:gap-4 lg:block">
              <Link
                className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primaryHover"
                href="/files"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
