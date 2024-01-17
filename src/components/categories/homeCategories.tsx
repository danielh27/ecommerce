import Link from "next/link";
import CategoryItem from "./categoryItem";
import { Category } from "@/interfaces/categories";

const HomeCategories = ({categories}: {categories: Category[]}) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-10 mt-7'>
      {categories.map((category) => (
        <Link href={category.url} key={category.name} className="max-w-48">
          <CategoryItem name={category.name} imageURL={category.image_url} />
        </Link>
      ))}
   </div>
  )
}

export default HomeCategories;