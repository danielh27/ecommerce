import { Product } from "@/interfaces/products";
import Image from "next/image";
import Label from "../label";

const Hero = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-2xl p-4">
      <div>
        <Image
          src={product.image_url}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-auto object-scale-down" />
      </div>
      
      <div className="flex flex-col gap-2">
        <Label title={product.display_price} textClass="text-xl font-bold text-rose-600"/>
        
        <h1 className="text-xl font-bold">
          {product.name}
        </h1>
        
        <span
          className="text-sm text-neutral-500"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
      </div>
    </div>
  )
}

export default Hero;