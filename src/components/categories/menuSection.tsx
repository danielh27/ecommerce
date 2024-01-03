"use client"

import { useEffect, useState } from 'react';
import { Category } from '@/interfaces/categories';
import Label from '../label';
import Card from '../product/card';
import SkeletonCard from '../product/skeleton';
import { getProductsByCategory } from '@/lib/spree';
import { Product } from '@/interfaces/products';
import clsx from 'clsx';
import { useInView } from 'react-intersection-observer';

const LoadingSection = ({ count }: { count: number }) => (
  <>
    {Array(count)
      .fill(0)
      .map((_, idx) => (
        <SkeletonCard key={idx} />
      ))}
  </>
);

const ProductSection = ({ products, animate }: { products: Product[]; animate: boolean }) => (
  <>
    {products.map((product) => (
      <div
        key={product.name}
        className={clsx('transition-opacity duration-500 ease-in-out', animate ? 'opacity-100' : 'opacity-0')}
      >
        <Card product={product} />
      </div>
    ))}
  </>
);

const MenuSection = ({ category, index }: { category: Category; index: number }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(false);
  const productsCount = category.products_count;
  
  const { ref, inView } = useInView({
    rootMargin: '0px 0px 100px 0px',
  });
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await getProductsByCategory(category.id);
        setProducts(productsData);
        setTimeout(() => setAnimate(true), 40);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    if (inView && loading) {
      fetchData();
    }

  }, [inView, category.id, loading]);

  return (
    <div key={category.name} ref={ref}>
      <Label
        title={category.name}
        textClass='text-lg whitespace-nowrap font-medium'
        divider={true}
        dividerClass='border-gray-300' />

      <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 py-7'>
        {loading
          ? <LoadingSection count={productsCount} />
          : <ProductSection products={products} animate={animate} />
        }
      </div>
    </div>
  );
};

export default MenuSection;
