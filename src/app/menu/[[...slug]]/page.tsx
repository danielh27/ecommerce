import CategoriesCarousel from '@/components/categories-carousel'
import MenuSection from '@/components/categories/menuSection';
import { getAllCategories } from '@/lib/spree'

export default async function Menu() {
  const categories = await getAllCategories();
  
  return (
    <>
      <CategoriesCarousel categories={categories} />

      <section className='flex flex-col gap-4 container mx-auto px-3 sm:px-5 py-8'>
        {categories.map((category, index) => (
          <MenuSection key={category.name}  category={category} index={index} />
        ))}
      </section>
    </>
  )
}