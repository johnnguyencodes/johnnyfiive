import {Link, useLoaderData} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';

export function meta() {
  return [
    {title: 'JohnnyFiive'},
    {
      description:
        'My second website. I am a big shot developer now. EVEN MORE MONEY PLS.',
    },
  ];
}

const COLLECTIONS_QUERY = `#graphql
  query FeaturedCollections {
    collections(first: 3, query:"collection_type:smart") {
      nodes {
        id
        title
        handle
        image {
          altText
          width
          height
          url
        }
      }
    }
  }
`;

export async function loader({context}) {
  return await context.storefront.query(COLLECTIONS_QUERY);
}

export default function Index() {
  const {collections} = useLoaderData();

  return (
    <div>
      <section className="w-full gap-4">
        <h2 className="font-bold whitespace-pre-wrap max-w-prose text-lead">
          Collections
        </h2>
        <div className="grid grid-flow-row grid-cols-1 gap-2 gap-y-6 md:gap-4 lg:gap-6 sm:grid-cols-3">
          {collections.nodes.map((collection) => {
            return (
              <Link
                to={`/collections/${collection.handle}`}
                key={collection.id}
              >
                <div className="grid gap-4">
                  {collection?.image && (
                    <Image
                      alt={`Image of ${collection.title}`}
                      data={collection.image}
                      key={collection.id}
                      sizes="(max-width: 32em) 100vw,33vw"
                      crop="center"
                    />
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
