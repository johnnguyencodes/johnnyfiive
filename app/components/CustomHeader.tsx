import {Fragment, useState} from 'react';
import {Theme, useTheme} from '../utils/theme-provider';
import Me from '../../public/johnny.jpg';
import {useLocation} from '@remix-run/react';
import {Link, NavLink} from '@remix-run/react';
import {Popover, Transition} from '@headlessui/react';
import MoonIcon from '../components/icons/MoonIcon';
import SunIcon from '../components/icons/SunIcon';

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
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  function HomeLink() {
    return (
      <NavLink
        to="/"
        className={({isActive}) =>
          isActive ? '-m-1.5 p-1.5 hidden' : '-m-1.5 p-1.5'
        }
      >
        <span className="sr-only">Your Company</span>
        <img
          className="w-auto h-10 rounded-full shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 hover:ring-darkmode-black-50 backdrop-blur dark:ring-white/10 dark:hover:ring-white/20"
          src={Me}
          alt="Photo of Johnny Fiive"
        />
      </NavLink>
    );
  }

  function DarkModeToggle() {
    return (
      <button
        onClick={toggleTheme}
        className="h-10 px-3 py-2 ml-4 transition rounded-full shadow-lg dark:hover:ring-white/20 group shadow-zinc-800/5 ring-1 ring-zinc-900/5 hover:ring-darkmode-black-50 backdrop-blur dark:ring-white/10 dark:bg-darkmode-black-700"
      >
        {theme === Theme.DARK ? <MoonIcon /> : <SunIcon />}
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
              ? 'block px-3 py-2 h-10 transition text-lightmode-blue hover:text-lightmode-blue-300 dark:text-darkmode-blue dark:hover:text-darkmode-blue-300'
              : 'block px-3 py-2 transition hover:text-lightmode-blue-300 dark:hover:text-darkmode-blue-300'
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
        <Popover.Button className="flex items-center h-10 px-4 py-2 text-sm font-medium rounded-full shadow-lg group shadow-zinc-800/5 ring-1 ring-zinc-900/5 hover:ring-darkmode-black-50 backdrop-blur dark:ring-white/10 dark:hover:ring-white/20 dark:bg-darkmode-black-700">
          Menu
          <ChevronDownIcon className="w-2 h-auto ml-3 stroke-darkmode-black group-hover:stroke-darkmode-black-400 dark:group-hover:stroke-darkmode-black-400" />
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
            <Popover.Overlay className="fixed inset-0 z-50 bg-darkmode-black-600/40 backdrop-blur-sm dark:bg-darkmode-black-600/80" />
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
            <Popover.Panel className="fixed z-50 p-8 origin-top bg-lightmode-white inset-x-4 top-8 rounded-3xl ring-1 ring-zinc-900/5 hover:ring-lightmode-black-50 dark:hover:ring-white/20 dark:bg-darkmode-black dark:ring-darkmode-black-600/10">
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
              ? 'relative block px-3 py-2 h-10 transition text-lightmode-blue hover:text-lightmode-blue-300 dark:text-darkmode-blue dark:hover:text-darkmode-blue-300'
              : 'relative block px-3 py-2 transition hover:text-lightmode-blue-300 dark:hover:text-darkmode-blue-300'
          }
        >
          {item.name}
          {item.name !== 'GitHub' &&
          item.href.split('/')[1] === pathname.split('/')[1] ? (
            <span className="absolute h-px dark:to-darkmode-blue/0 inset-x-1 -bottom-px bg-gradient-to-r from-lightmode-blue/0 via-lightmode-blue/40 to-lightmode-blue/0 dark:from-darkmode-blue/0 dark:via-darkmode-blue/40 " />
          ) : null}
        </Link>
      </li>
    );
  }

  function DesktopNavigation() {
    return (
      <nav className="hidden pointer-events-auto sm:block">
        <ul className="flex h-10 px-3 text-sm font-medium rounded-full shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:bg-darkmode-black-700 hover:ring-darkmode-black-50 backdrop-blur dark:ring-white/10 dark:hover:ring-white/20">
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
    <header className="relative z-50 flex flex-col flex-none pointer-events-none">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex sm:flex-1">
          <HomeLink />
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
        <div className="hidden sm:justify-end sm:flex sm:flex-1 ">
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default CustomHeader;
