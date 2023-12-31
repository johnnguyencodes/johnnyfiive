import {useState} from 'react';
import {Dialog} from '@headlessui/react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import {Theme, useTheme} from '../utils/theme-provider';
import Me from '../../public/johnny.jpg';
import {useLocation} from '@remix-run/react';
import {Link, NavLink} from '@remix-run/react';

const navigation = [
  {name: 'About', href: '/about'},
  {name: 'Blog', href: '/blog'},
  {name: 'Projects', href: '/projects'},
  {name: 'GitHub', href: 'https://github.com/johnnguyencodes'},
];

const CustomHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const {pathname} = useLocation();
  console.log('pathname', pathname);

  const [theme, setTheme] = useTheme();
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK,
    );
  };

  return (
    <header>
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <NavLink
            to="/"
            className={({isActive}) =>
              isActive ? '-m-1.5 p-1.5 hidden' : '-m-1.5 p-1.5'
            }
          >
            <span className="sr-only">Your Company</span>
            <img className="w-auto h-8 rounded-full" src={Me} alt="" />
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <button onClick={toggleTheme} className="mr-4">
            {theme === Theme.DARK ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            )}
          </button>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <nav className="hidden pointer-events-auto md:block">
          <ul className="flex px-3 text-sm font-medium rounded-full shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:ring-white/10">
            {navigation.map((item) => (
              <li key={item.href} className="mb-0">
                <Link
                  key={item.name}
                  to={item.href}
                  className={
                    item.name !== 'GitHub' &&
                    item.href.split('/')[1] === pathname.split('/')[1]
                      ? 'relative block px-3 py-2 transition text-teal-500 dark:hover:text-teal-400'
                      : 'relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400'
                  }
                >
                  {item.name}
                  {item.name !== 'GitHub' &&
                  item.href.split('/')[1] === pathname.split('/')[1] ? (
                    <span className="absolute h-px inset-x-1 -bottom-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button onClick={toggleTheme}>
            {theme === Theme.DARK ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="w-auto h-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 "
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6 text-blue-500"></div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default CustomHeader;
