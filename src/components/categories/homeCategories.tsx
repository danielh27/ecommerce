import Link from "next/link";
import CategoryItem from "./categoryItem";
import { Category } from "@/interfaces/categories";

const HomeCategories = ({categories}: {categories: Category[]}) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-10 mt-7'>
      {categories.map((category) => (
        <Link href={category.url} key={category.name} className="max-w-52">
          <CategoryItem name={category.name} imageURL={category.imageURL} />
        </Link>
      ))}
   </div>
  )
}

export default HomeCategories;