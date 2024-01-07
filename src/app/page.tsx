import Label from '@/components/label'
import HomeCategories from '@/components/categories/homeCategories'
import { getAllCategories } from '@/lib/spree'

export default async function Home() {
  const categories = await getAllCategories();
  
  return (
    <div className='w-full h-full container mx-auto px-3 sm:px-5 mt-5'>
      <Label title="MENÚ" divider={true} textClass='text-xl font-medium' />
      <HomeCategories categories={categories} />
    </div>
  )
}
