import CategoriesCarousel from '@/components/categories-carousel'
import MenuSection from '@/components/categories/menuSection';
import { getAllCategories } from '@/lib/spree'

export default async function Menu() {
  const categories = await getAllCategories();
  
  return (
    <div className='min-h-dvh bg-stone-100'>
        <CategoriesCarousel categories={categories} />
        
        <section className='container mx-auto px-5 mt-5 hidden sm:block'>
          <h2 className='text-3xl font-semibold'>MENÚ</h2>
        </section>

        <section className='container mx-auto px-2 sm:px-5 mt-10'>
          {categories.map((category, index) => (
            <MenuSection category={category} key={category.name} index={index} />
          ))}
        </section>
    </div>
  )
}