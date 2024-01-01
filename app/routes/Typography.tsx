import React from 'react';

const Typography = () => {
  return (
    <div className="pt-8 pb-8 prose prose-lg max-w-none dark:prose-invert xl:col-span-2">
      <p className="text-lightmode-black dark:text-darkmode-black">
        Black Lorem{' '}
        <span className="font-bold transition dark:text-darkmode-black text-lightmode-red hover:text-lightmode-red-400">
          ipsum dolor sit amet
        </span>{' '}
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="text-lightmode-red dark:text-darkmode-red">
        Red Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="text-lightmode-orange dark:text-darkmode-orange">
        Orange Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="text-lightmode-yellow dark:text-darkmode-yellow">
        Yellow Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="text-lightmode-green dark:text-darkmode-green">
        Green Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="text-lightmode-blue dark:text-darkmode-blue">
        Blue Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="text-lightmode-purple dark:text-darkmode-purple">
        Purple Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="text-lightmode-white dark:text-darkmode-white">
        White Lorem{' '}
        <span className="font-bold transition dark:text-lightmode-red dark:hover:text-lightmode-red-600">
          ipsum dolor sit amet
        </span>{' '}
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

export default Typography;
