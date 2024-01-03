"use client"

import { Category } from "@/interfaces/categories";
import Image from "next/image";
import Label from "./label";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

const CategoriesCarousel = ({categories}: { categories: Category[] }) => {
  const { ref, inView } = useInView({
    threshold: 0.55,
    initialInView: true,
  });

  return (
    <div className="py-3 px-6 bg-white sticky top-0 sm:-top-16" ref={ref}>
      <div className="flex items-center overflow-x-auto gap-9 snap-x">
        
        {categories.map((category) => (
          <div className="flex flex-col items-center justify-between gap-2 pb-2 cursor-pointer snap-start" key={category.name}>
            <Image
              src={category.image_url || ''}
              alt={category.name}
              width={64}
              height={64}
              className={clsx("rounded-full min-w-16 object-contain shadow-[0_2px_6px_rgba(0,0,0,0.25)] hidden sm:block",
              inView? "block" : "invisible")} />
            
            <Label title={category.name} textClass="text-sm whitespace-nowrap font-semibold"/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoriesCarousel;