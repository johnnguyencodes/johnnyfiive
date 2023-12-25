import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import ProductGrid from '~/components/ProductGrid';
import {getPaginationVariables} from '@shopify/hydrogen';

const seo = ({data}) => ({
  title: data?.collection?.title,
  description: data?.collection?.description.substr(0, 154),
});

export const handle = {
  seo,
};

const COLLECTION_QUERY = `#graphql
    query CollectionDetails(
        $handle: String!
        $first: Int
        $last: Int
        $startCursor: String
        $endCursor: String
    ) {
        collection(handle: $handle) {
            title
            description
            handle
            products(
                first: $first,
                last: $last,
                before: $startCursor,
                after: $endCursor,
            ) {
                nodes {
                    id
                    title
                    publishedAt
                    handle
                    variants(first: 1) {
                        nodes {
                            id
                            image {
                                url
                                altText
                                width
                                height
                            }
                            price {
                                amount
                                currencyCode
                            }
                            compareAtPrice {
                                amount
                                currencyCode
                            }
                        }
                    }
                }
                pageInfo {
                    hasPreviousPage
                    hasNextPage
                    startCursor
                    endCursor
                }
            }
        }
    }
`;

export async function loader({params, context, request}) {
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 4,
  });
  const {handle} = params;
  const {collection} = await context.storefront.query(COLLECTION_QUERY, {
    variables: {
      ...paginationVariables,
      handle,
    },
  });

  // Handle 404s
  if (!collection) {
    throw new Response(null, {status: 404});
  }

  // json is a Remix utility for creating application/json responses
  // https://remix.run/docs/en/v1/utils/json

  return json({
    collection,
  });
}

export default function Collection() {
  const {collection} = useLoaderData();
  return (
    <>
      <header className="grid w-full gap-8 py-8 justify-items-start">
        <h1 className="inline-block text-4xl font-bold whitespace-pre-wrap">
          {collection.title}
        </h1>
        {collection.description && (
          <div className="flex items-baseline justify-between w-full">
            <div>
              <p className="inline-block max-w-md whitespace-pre-wrap inherit text-copy">
                {collection.description}
              </p>
            </div>
          </div>
        )}
      </header>
      <ProductGrid collection={collection} />
    </>
  );
}
