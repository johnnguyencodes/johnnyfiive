import {Pagination} from '@shopify/hydrogen';
import ProductCard from './ProductCard';

export default function ProductGrid({collection}) {
  return (
    <section className="grid w-full gap-4 md:gap-8">
      <Pagination connection={collection.products}>
        {({nodes, NextLink, PreviousLink, isLoading}) => (
          <>
            <div className="flex items-center justify-center mt-6">
              <PreviousLink className="inline-block w-full px-6 py-3 font-medium text-center border rounded cursor-pointer">
                {isLoading ? 'Loading...' : 'load previous products'}
              </PreviousLink>
            </div>
            <div className="grid grid-flow-row grid-cols-2 gap-2 gap-y-6 md:gap-4 lg:gap-6 md:grid-cols-3 lg:grid-cols-4">
              {nodes.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="flex items-center justify-center mt-6">
              <NextLink className="inline-block w-full px-6 py-3 font-medium text-center border rounded cursor-pointer">
                {isLoading ? 'Loading...' : 'load more products'}
              </NextLink>
            </div>
          </>
        )}
      </Pagination>
    </section>
  );
}
