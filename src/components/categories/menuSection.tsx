import { Category } from "@/interfaces/categories";
import Label from "../label";
import Card from "../product/card";
import SkeletonCard from "../product/skeleton";
import { getProductsByCategory } from "@/lib/spree";

const MenuSection = async ({ category, index } : { category: Category, index: number }) => {
  const products = await getProductsByCategory(category.id);
  const productsCount = category.products_count;
  
  return (
    <div key={category.name}>
      <Label
        title={category.name}
        textClass='text-lg whitespace-nowrap font-medium'
        divider={true}
        dividerClass='border-gray-300' />
    
    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 py-7'>
      {index < 2 ? (
        products.map((product) => (
          <Card product={product} key={product.name} />
        ))
      ) : (
        Array(productsCount).fill(0).map((_, index) => (
          <SkeletonCard key={index} />
        ))
      )}
    </div>
  </div>
  )
};

export default MenuSection;