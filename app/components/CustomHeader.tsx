import {Fragment, useState} from 'react';
import {Theme, useTheme} from '../utils/theme-provider';
import Me from '../../public/johnny.jpg';
import {useLocation} from '@remix-run/react';
import {Link, NavLink} from '@remix-run/react';
import {Popover, Transition} from '@headlessui/react';

const navigation = [
  {name: 'About', href: '/about'},
  {name: 'Blog', href: '/blog'},
  {name: 'Projects', href: '/projects'},
  {name: 'GitHub', href: 'https://github.com/johnnguyencodes'},
];

const CustomHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const {pathname} = useLocation();

  const [theme, setTheme] = useTheme();
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK,
    );
  };

  function CloseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path
          d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  function ChevronDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
      <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
        <path
          d="M1.75 1.75 4 4.25l2.25-2.5"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  function SunIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
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
    );
  }

  function MoonIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
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
    );
  }

  function DarkModeToggle() {
    return (
      <button
        onClick={toggleTheme}
        className="px-3 py-2 ml-4 transition rounded-full shadow-lg group shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:ring-white/10 dark:hover:ring-white/20"
      >
        {theme === Theme.DARK ? <SunIcon /> : <MoonIcon />}
      </button>
    );
  }

  function MobileNavItem({
    children,
    item,
  }: {
    children: React.ReactNode;
    item: {name: string; href: string};
  }) {
    return (
      <li>
        <Popover.Button
          as={Link}
          to={item.href}
          className={
            item.name !== 'GitHub' &&
            item.href.split('/')[1] === pathname.split('/')[1]
              ? 'block py-2 transition text-teal-500 dark:hover:text-teal-400'
              : 'block py-2 transition hover:text-teal-500 dark:hover:text-teal-400'
          }
        >
          {children}
        </Popover.Button>
      </li>
    );
  }

  function MobileNavigation(
    props: React.ComponentPropsWithoutRef<typeof Popover>,
  ) {
    return (
      <Popover {...props}>
        <Popover.Button className="flex items-center px-4 py-2 text-sm font-medium rounded-full shadow-lg group shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:ring-white/10 dark:hover:ring-white/20">
          Menu
          <ChevronDownIcon className="w-2 h-auto ml-3 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
        </Popover.Button>
        <Transition.Root>
          <Transition.Child
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel className="fixed z-50 p-8 origin-top bg-white inset-x-4 top-8 rounded-3xl ring-1 ring-zinc-900/5 dark:bg-gray-900 dark:ring-zinc-800">
              <div className="flex flex-row-reverse items-center justify-between">
                <Popover.Button aria-label="Close menu" className="p-1 -m-1">
                  <CloseIcon className="w-6 h-6 text-zinc-500 dark:text-zinc-400" />
                </Popover.Button>
                <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  Navigation
                </h2>
              </div>
              <nav className="mt-6">
                <ul className="-my-2 text-base text-left divide-y divide-zinc-100 dark:divide-zinc-100/5">
                  {navigation.map((item, index) => (
                    <MobileNavItem item={item} key={index}>
                      {item.name}
                    </MobileNavItem>
                  ))}
                </ul>
              </nav>
            </Popover.Panel>
          </Transition.Child>
        </Transition.Root>
      </Popover>
    );
  }

  function DesktopNavItem({
    item,
  }: {
    children: React.ReactNode;
    item: {name: string; href: string};
  }) {
    return (
      <li className="mb-0">
        <Link
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
    );
  }

  function DesktopNavigation() {
    return (
      <nav className="hidden pointer-events-auto sm:block">
        <ul className="flex px-3 text-sm font-medium rounded-full shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:ring-white/10 dark:hover:ring-white/20">
          {navigation.map((item, index) => (
            <DesktopNavItem item={item} key={index}>
              {item.name}
            </DesktopNavItem>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <header>
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex sm:flex-1">
          <NavLink
            to="/"
            className={({isActive}) =>
              isActive ? '-m-1.5 p-1.5 hidden' : '-m-1.5 p-1.5'
            }
          >
            <span className="sr-only">Your Company</span>
            <img
              className="w-auto h-8 rounded-full shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:ring-white/10 dark:hover:ring-white/20"
              src={Me}
              alt="Photo of Johnny Fiive"
            />
          </NavLink>
        </div>
        <div className="flex sm:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <MobileNavigation className="pointer-events-auto sm:hidden" />
          </button>
          <DarkModeToggle />
        </div>
        <DesktopNavigation />
        <div className="hidden sm:flex sm:flex-1 sm:justify-end">
          <button
            onClick={toggleTheme}
            className="px-3 py-2 ml-4 transition rounded-full shadow-lg group shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:ring-white/10 dark:hover:ring-white/20"
          >
            {theme === Theme.DARK ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default CustomHeader;
