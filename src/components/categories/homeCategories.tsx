import Link from "next/link";
import CategoryItem from "./categoryItem";

interface CategoryItemProps {
  name: string;
  imageURL: string;
  link: string;
}

const HomeCategories = ({categories}: {categories: CategoryItemProps[]}) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-10 mt-7'>
      {categories.map((category) => (
        <Link href={category.link} key={category.name} className="max-w-52">
          <CategoryItem name={category.name} imageURL={category.imageURL} />
        </Link>
      ))}
   </div>
  )
}

export default HomeCategories;