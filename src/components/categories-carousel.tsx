import { Category } from "@/interfaces/categories";
import Label from "./label";

const CategoriesCarousel = ({categories}: { categories: Category[] }) => {
  return (
    <div className="py-3 px-6 bg-white sticky top-0 z-10">
      <div className="flex items-center overflow-x-auto gap-9 snap-x">
        
        {categories.map((category) => (
          <div className="flex flex-col items-center justify-between gap-2 cursor-pointer snap-start" key={category.name}>
            <Label title={category.name} textClass="text-sm whitespace-nowrap font-semibold"/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoriesCarousel;