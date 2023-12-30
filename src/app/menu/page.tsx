import CategoriesCarousel from '@/components/categories-carousel'
import categories from '@/test-data/categories.json'

export default function Menu() {
  
  
  return (
    <>
      <CategoriesCarousel categories={categories} />
    </>
  )
}