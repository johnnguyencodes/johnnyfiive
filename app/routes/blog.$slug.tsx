import React from 'react';
import {useLoaderData} from '@remix-run/react';
import {LoaderArgs} from '@remix-run/node';
import {json} from '@shopify/remix-oxygen';
import {Blogpost} from '~/lib/interface';
import {sanityClient} from '~/lib/sanity';
import {PortableText} from '@portabletext/react';
import {Container} from '~/components/Container';

interface iAppProps {
  blogpost: Blogpost;
}

export async function loader({params}: LoaderArgs) {
  const query = `
    *[_type == 'blog' && slug.current == "${params.slug}"] {
      title,
      slug,
      _createdAt,
      _updatedAt,
      _id,
      overview,
      "seoImageUrl": seo.image.asset->url,
      body
    }
  `;

  const blogpost = await sanityClient.fetch(query);

  return json({blogpost});
}

const BlogSlug = () => {
  const {blogpost} = useLoaderData<typeof loader>() as iAppProps;

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:divide-y xl:divide-lightmode-black xl:dark:divide-darkmode-white lg:px-48">
        <header className="pt-6 xl:pb-6">
          <div className="space-y-1 text-center">
            <div className="space-y-10">
              <div>
                <p className="text-base font-medium leading-6 text-lightmode-blue dark:text-darkmode-blue">
                  {new Date(blogpost[0]._createdAt).toISOString().split('T')[0]}
                </p>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                {blogpost[0].title}
              </h1>
            </div>
          </div>
        </header>

        <div className="pb-8 divide-y divide-gray-200 dark:divide-gray-700 xl:divide-y-0">
          <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
            <div className="pt-10 pb-8 prose max-w-none text-lightmode-black dark:text-darkmode-white">
              <PortableText value={blogpost[0].body} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BlogSlug;
