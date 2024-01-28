import Me from '../../public/johnny.jpg';
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '~/components/icons/SocialIcons';
import image1 from '../../public/images/photos/image-1.jpg';
import image2 from '../../public/images/photos/image-2.jpg';
import image3 from '../../public/images/photos/image-3.jpg';
import image4 from '../../public/images/photos/image-4.jpg';
import image5 from '../../public/images/photos/image-5.jpg';
import logoAirbnb from '../../public/airbnb.svg';
import logoFacebook from '../../public/facebook.svg';
import logoPlanetaria from '../../public/planetaria.svg';
import logoStarbucks from '../../public/starbucks.svg';
import clsx from 'clsx';
import {Container} from '~/components/Container';
import {Link, useLoaderData} from '@remix-run/react';
import {LoaderFunctionArgs} from '@remix-run/node';
import {json} from '@shopify/remix-oxygen';
import {Blogposts} from '~/lib/interface';
import {sanityClient} from '~/lib/sanity';
import {Button} from '../components/ui/button';

export function meta() {
  return [
    {title: 'JohnnyFiive'},
    {
      description:
        'My second website. I am a big shot developer now. EVEN MORE MONEY PLS.',
    },
  ];
}

interface iAppProps {
  blogposts: Blogposts[];
}

export async function loader({}: LoaderFunctionArgs) {
  const query = `
  *[_type == 'blog' ] {
    title,
    slug,
    _createdAt,
    _updatedAt,
    _id,
    overview,
    "seoImageUrl": seo.image.asset->url
  }
  `;

  const blogposts = await sanityClient.fetch(query);

  return json({blogposts});
}

const Blog = () => {
  const {blogposts} = useLoaderData<typeof loader>() as iAppProps;
  return (
    <div className="divide-y divide-lightmode-black dark:divide-darkmode-white">
      <ul>
        {blogposts.map((blogpost) => (
          <li key={blogpost._id} className="py-4">
            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <div>
                <p className="text-base font-medium leading-6 text-lightmode-blue dark:text-darkmode-blue">
                  {new Date(blogpost._createdAt).toISOString().split('T')[0]}
                </p>
              </div>
              <Link
                to={`/blog/${blogpost.slug.current}`}
                className="space-y-3 xl:col-span-3"
                prefetch="intent"
              >
                <div>
                  <h3 className="text-2xl font-bold leading-8 tracking-tight">
                    {blogpost.title}
                  </h3>
                </div>
                <div className="prose text-lightmode-black dark:text-darkmode-white max-w-none">
                  <p>{blogpost.overview}</p>
                </div>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface Role {
  company: string;
  title: string;
  logo: ImageProps['src'];
  start: string | {label: string; dateTime: string};
  end: string | {label: string; dateTime: string};
}

function Role({role}: {role: Role}) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label;
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime;

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label;
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime;

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <img src={role.logo} alt="" className="h-7 w-7" />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  );
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Company 1',
      title: 'Front-End Web Developer II',
      logo: logoPlanetaria,
      start: '2021',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Company 2',
      title: 'Alumni Mentor',
      logo: logoAirbnb,
      start: '2024',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Company 3',
      title: 'Catalog Coordinator',
      logo: logoFacebook,
      start: '2016',
      end: '2020',
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="#" variant="default" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  );
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
      <Container className="mt-8">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
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
              I'm John, a web development manager based in Orange County. I
              specialize in Shopify development and eCommerce platform
              management. I also enjoy mountaineering, hiking, and backpacking.
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
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <Blog />
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <div>
              <Resume />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default IndexPage;
