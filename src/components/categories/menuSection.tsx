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
    <div
      ref={ref}
      key={category.name}
      className="p-4 sm:p-5 bg-white rounded">
        
      <h2 className="font-bold text-lg sm:text-2xl whitespace-nowrap">
        {category.name}
      </h2>

      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-1 sm:gap-4'>
        {loading
          ? <LoadingSection count={productsCount} />
          : <ProductSection products={products} animate={animate} />
        }
      </div>
    </div>
  );
};

export default MenuSection;
