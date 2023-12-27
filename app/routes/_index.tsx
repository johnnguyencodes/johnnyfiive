import {Link, useLoaderData} from '@remix-run/react';
import {LoaderArgs} from '@remix-run/node';
import {json} from '@shopify/remix-oxygen';
import {Blog} from '~/lib/interface';
import {sanityClient} from '~/lib/sanity';

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
  blogs: Blog[];
}

export async function loader({}: LoaderArgs) {
  const query = `
    *[_type == 'blog' ] {
      title,
      slug,
      "seoImageUrl": seo.image.asset->url
    }
  `;

  const blogs = await sanityClient.fetch(query);

  return json({blogs});
}

const IndexPage = () => {
  const {blogs} = useLoaderData<typeof loader>() as iAppProps;
  return (
    <>
      <Link className="text-black dark:text-white" to="/collections">
        Collections
      </Link>
      <div>
        IndexPage
        <ul>
          {blogs.map((blog) => (
            <li key={blog.slug.current}>
              <Link
                className="relative text-black dark:text-white group"
                to={`/blog/${blog.slug.current}`}
              >
                <h2>{blog.title}</h2>
                <img
                  className="object-contain object-center w-full h-full"
                  src={blog.seoImageUrl}
                  alt={blog.title}
                  width={500}
                  height={500}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default IndexPage;
