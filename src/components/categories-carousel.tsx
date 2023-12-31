import { Category } from "@/interfaces/categories";
import Image from "next/image";
import Label from "./label";

const CategoriesCarousel = ({categories}: { categories: Category[] }) => {
  return (
    <div className="py-4 px-6 bg-white">
      <div className="flex items-center overflow-x-auto gap-9">
        
        {categories.map((category) => (
          <div className="flex flex-col items-center justify-between gap-2 pb-2 cursor-pointer" key={category.name}>
            <Image
              src={category.image_url}
              alt={category.name}
              width={64}
              height={64}
              className="rounded-full min-w-16 object-contain shadow-[0_2px_6px_rgba(0,0,0,0.25)] hidden sm:block" />
            
            <Label title={category.name} size="sm" className="whitespace-nowrap font-semibold"/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoriesCarousel;