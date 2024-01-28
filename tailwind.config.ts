import type {Config} from 'tailwindcss';

const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
  content: [
    './app/**/*.{js,jsx,ts,tsx,md,mdx}',
    './node_modules/flowbite/**/*.js',
  ],
  lightmode: ['class'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontSize: {
      xs: ['0.8125rem', {lineHeight: '1.5rem'}],
      sm: ['0.875rem', {lineHeight: '1.5rem'}],
      base: ['1rem', {lineHeight: '1.75rem'}],
      lg: ['1.125rem', {lineHeight: '1.75rem'}],
      xl: ['1.25rem', {lineHeight: '2rem'}],
      '2xl': ['1.5rem', {lineHeight: '2rem'}],
      '3xl': ['1.875rem', {lineHeight: '2.25rem'}],
      '4xl': ['2rem', {lineHeight: '2.5rem'}],
      '5xl': ['3rem', {lineHeight: '3.5rem'}],
      '6xl': ['3.75rem', {lineHeight: '1'}],
      '7xl': ['4.5rem', {lineHeight: '1'}],
      '8xl': ['6rem', {lineHeight: '1'}],
      '9xl': ['8rem', {lineHeight: '1'}],
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      typography: ({theme}) => ({
        maincolors: {
          css: {
            '--tw-prose-headings': theme('colors.dark'),
          },
        },
      }),
      colors: {
        'darkmode-black': {
          DEFAULT: '#2C292D',
          50: '#C5C1C7',
          100: '#BBB7BD',
          200: '#A7A1AA',
          300: '#948C96',
          400: '#7F7782',
          500: '#6B636D',
          600: '#565058',
          700: '#413C42',
          800: '#2C292D',
          900: '#0F0E10',
          950: '#010101',
        },
        'darkmode-red': {
          DEFAULT: '#FF6188',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFDBE4',
          300: '#FFB3C5',
          400: '#FF8AA7',
          500: '#FF6188',
          600: '#FF295E',
          700: '#F0003B',
          800: '#B8002D',
          900: '#80001F',
          950: '#640019',
        },
        'darkmode-orange': {
          DEFAULT: '#FC9867',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FEE9DF',
          300: '#FECEB7',
          400: '#FDB38F',
          500: '#FC9867',
          600: '#FB7330',
          700: '#EE5105',
          800: '#B73F04',
          900: '#802C03',
          950: '#652202',
        },
        'darkmode-yellow': {
          DEFAULT: '#FFD866',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFF7E0',
          300: '#FFEDB8',
          400: '#FFE28F',
          500: '#FFD866',
          600: '#FFCA2E',
          700: '#F5B600',
          800: '#BD8D00',
          900: '#856300',
          950: '#694E00',
        },
        'darkmode-green': {
          DEFAULT: '#AADC76',
          50: '#FFFFFF',
          100: '#FBFDF8',
          200: '#E6F5D7',
          300: '#D2EDB7',
          400: '#BEE496',
          500: '#AADC76',
          600: '#8ED149',
          700: '#72B42E',
          800: '#568723',
          900: '#395A17',
          950: '#2B4411',
        },
        'darkmode-blue': {
          DEFAULT: '#78DCE8',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#E1F7FA',
          300: '#BEEEF4',
          400: '#9BE5EE',
          500: '#78DCE8',
          600: '#48D0E0',
          700: '#23BBCD',
          800: '#1B8F9D',
          900: '#13636D',
          950: '#0E4D55',
        },
        'darkmode-purple': {
          DEFAULT: '#AB9DF2',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#E9E5FC',
          400: '#CAC1F7',
          500: '#AB9DF2',
          600: '#816BEB',
          700: '#563AE5',
          800: '#381BCC',
          900: '#2A149A',
          950: '#241181',
        },
        'darkmode-white': {
          DEFAULT: '#FDF8F3',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#FDF8F3',
          600: '#F5DCC3',
          700: '#EDC093',
          800: '#E5A463',
          900: '#DD8833',
          950: '#D17A23',
        },
        'lightmode-black': {
          DEFAULT: '#393A42',
          50: '#9294A1',
          100: '#878997',
          200: '#727484',
          300: '#5F606E',
          400: '#4C4D58',
          500: '#393A42',
          600: '#1F2024',
          700: '#050506',
          800: '#000000',
          900: '#000000',
          950: '#000000',
        },
        'lightmode-red': {
          DEFAULT: '#E45749',
          50: '#FCEBE9',
          100: '#F9DAD7',
          200: '#F4B9B4',
          300: '#EF9990',
          400: '#E9786D',
          500: '#E45749',
          600: '#D53020',
          700: '#A42518',
          800: '#741A11',
          900: '#430F0A',
          950: '#2A0A06',
        },
        'lightmode-orange': {
          DEFAULT: '#FF9800',
          50: '#FFE2B8',
          100: '#FFDAA3',
          200: '#FFC97A',
          300: '#FFB952',
          400: '#FFA829',
          500: '#FF9800',
          600: '#C77700',
          700: '#8F5500',
          800: '#573400',
          900: '#1F1200',
          950: '#030200',
        },
        'lightmode-yellow': {
          DEFAULT: '#986800',
          50: '#FFC851',
          100: '#FFC13C',
          200: '#FFB513',
          300: '#EAA000',
          400: '#C18400',
          500: '#986800',
          600: '#604200',
          700: '#281B00',
          800: '#000000',
          900: '#000000',
          950: '#000000',
        },
        'lightmode-green': {
          DEFAULT: '#50A14F',
          50: '#C5E3C5',
          100: '#B8DCB7',
          200: '#9DCE9C',
          300: '#81C181',
          400: '#66B465',
          500: '#50A14F',
          600: '#3D7B3D',
          700: '#2B562A',
          800: '#183018',
          900: '#050A05',
          950: '#000000',
        },
        'lightmode-blue': {
          DEFAULT: '#4078F2',
          50: '#ECF2FE',
          100: '#D9E4FC',
          200: '#B3C9FA',
          300: '#8CAEF7',
          400: '#6693F5',
          500: '#4078F2',
          600: '#1055EA',
          700: '#0C42B5',
          800: '#092F81',
          900: '#051C4C',
          950: '#031232',
        },
        'lightmode-purple': {
          DEFAULT: '#A627A4',
          50: '#E89DE7',
          100: '#E48CE3',
          200: '#DC6BDA',
          300: '#D44AD2',
          400: '#C72FC5',
          500: '#A627A4',
          600: '#791C77',
          700: '#4B124A',
          800: '#1E071D',
          900: '#000000',
          950: '#000000',
        },
        'lightmode-white': {
          DEFAULT: '#FAFAFA',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#FAFAFA',
          600: '#DEDEDE',
          700: '#C2C2C2',
          800: '#A6A6A6',
          900: '#8A8A8A',
          950: '#7C7C7C',
        },
        'lightmode-highlight': {
          DEFAULT: '#FEE1CF',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFAF7',
          500: '#FEE1CF',
          600: '#FDBF98',
          700: '#FC9C61',
          800: '#FB7A2A',
          900: '#E85C05',
          950: '#CC5104',
        },
        'darkmode-highlight': {
          DEFAULT: '#CFE8E5',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#EBF5F4',
          500: '#CFE8E5',
          600: '#A9D6D0',
          700: '#83C4BC',
          800: '#5DB1A7',
          900: '#469188',
          950: '#3C7E76',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {height: '0'},
          to: {height: 'var(--radix-accordion-content-height)'},
        },
        'accordion-up': {
          from: {height: 'var(--radix-accordion-content-height)'},
          to: {height: '0'},
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    require('flowbite/plugin'),
  ],
  'tailwind-class-sorter.classRegex': {
    rescript: [
      'className\\w*?=\\w*("[\\s\\S]+?")|className\\w*?=\\w*?\\{([\\s\\S]+?)\\}',
      '"(.+?)"',
    ],
  },
} satisfies Config;

export default config;
