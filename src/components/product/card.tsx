import { Product } from "@/interfaces/products";
import Label from "../label";
import Image from "next/image";
import Link from "next/link";

const Card = ({ product }: {product: Product}) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="flex bg-white p-4 h-full gap-x-4">
        
        <div className="w-36 min-w-36">
          <Image
            src={product.image_url || ''}
            alt={product.name}
            width={300}
            height={300}
            className="rounded-sm object-contain" />
        </div>
          
        <div className="flex flex-col justify-center">
          <div className="font-medium">
            {product.display_price}
          </div>
          
          <Label
            title={product.name}
            textClass='mb-2 uppercase' />
          
          <Label
            title={product.description}
            textClass='text-xs line-clamp-2 text-neutral-500' />
        </div>
        
      </div>
    </Link>
  );
}

export default Card;