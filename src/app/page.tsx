import Label from '@/components/label'
import categories from '@/test-data/categories.json'
import HomeCategories from '@/components/categories/homeCategories'

export default function Home() {
  return (
    <div className='w-full h-full p-4'>
      <Label title="MENÚ" size='xl' divider={true} />
      <HomeCategories categories={categories} />
    </div>
  )
}
