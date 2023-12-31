import CategoriesCarousel from '@/components/categories-carousel'
import { getAllCategories } from '@/lib/spree'

export default async function Menu() {
  const categories = await getAllCategories();
  
  return (
    <div className='min-h-dvh bg-stone-100'>
        <CategoriesCarousel categories={categories} />
    </div>
  )
}