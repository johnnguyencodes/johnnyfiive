import Me from '../../public/johnny.jpg';
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '~/components/icons/SocialIcons';
import {Link} from '@remix-run/react';
import image1 from '../../public/images/photos/image-1.jpg';
import image2 from '../../public/images/photos/image-2.jpg';
import image3 from '../../public/images/photos/image-3.jpg';
import image4 from '../../public/images/photos/image-4.jpg';
import image5 from '../../public/images/photos/image-5.jpg';
import clsx from 'clsx';

export function meta() {
  return [
    {title: 'JohnnyFiive'},
    {
      description:
        'My second website. I am a big shot developer now. EVEN MORE MONEY PLS.',
    },
  ];
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{className?: string}>;
}) {
  return (
    <Link className="p-1 -m-1 group" {...props}>
      <Icon className="w-6 h-6 transition fill-lightmode-blue hover:fill-lightmode-blue-300 dark:fill-darkmode-blue dark:hover:fill-darkmode-blue-300 group-hover:fill-lightmode-blue-300 dark:group-hover:fill-darkmode-blue-300" />
    </Link>
  );
}

function Photos() {
  let rotations = [
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    'rotate-2',
    '-rotate-2',
  ];

  return (
    <div className="static w-screen mt-16 sm:mt-20">
      <div className="flex justify-center gap-5 py-4 -my-4 overflow-hidden sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={imageIndex}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <img
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const IndexPage = () => {
  return (
    <>
      <div className="p-6 divide-y divide-gray-200 dark:divide-gray-700 lg:px-8">
        <div>
          <img
            src={Me}
            alt="Image of myself"
            className="object-cover object-top w-auto h-16 mb-8 rounded-full"
          />
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Web developer and mountaineer-in-training.
            </h1>
            <p className="mt-6 text-base">
              I'm John, a web developer based in Orange County. I'm the web
              development manager at{' '}
              <a
                href="https://www.zymoresearch.com"
                target="_blank"
                rel="noreferrer opener"
                className="external-link"
              >
                Zymo Research
              </a>
              , a bio-tech research company where we manufacture research tools
              that help scientists find cures for diseases.
            </p>
            <div className="flex gap-6 mt-6">
              <SocialLink
                to="https://instagram.com/johnnyfiive_"
                aria-label="Follow on Instagram"
                icon={InstagramIcon}
              />
              <SocialLink
                to="https://github.com/johnnguyencodes"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
              />
              <SocialLink
                to="https://linkedin.com/in/johnnguyencodes"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
              />
            </div>
          </div>
        </div>
        <Photos />
      </div>
    </>
  );
};

export default IndexPage;
