import React from 'react';
import {Link, useLoaderData} from '@remix-run/react';
import {LoaderArgs} from '@remix-run/node';
import {json} from '@shopify/remix-oxygen';
import {Blogposts} from '~/lib/interface';
import {sanityClient} from '~/lib/sanity';
import {Container} from '~/components/Container';

interface iAppProps {
  blogposts: Blogposts[];
}

export async function loader({}: LoaderArgs) {
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
    <Container className="mt-16 lg:mt-32">
      <div className="divide-y divide-lightmode-black dark:divide-darkmode-white">
        <div className="pt-6 pb-8 space-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-right sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            All Blog Posts
          </h1>
        </div>
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
    </Container>
  );
};

export default Blog;
