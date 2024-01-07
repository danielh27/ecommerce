import { Product } from "@/interfaces/products";
import Label from "../label";
import Image from "next/image";
import Link from "next/link";

const Card = ({ product }: {product: Product}) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="flex flex-col bg-white rounded-sm shadow p-6 h-full max-w-80">
        <Image
          src={product.image_url || ''}
          alt={product.name}
          width={300}
          height={300}
          className="rounded-sm object-contain mb-2" />
        
        <div className="h-6 w-3/12 mb-2 font-bold">{product.display_price}</div>
        
        <Label
          title={product.name}
          textClass='text-lg font-bold mb-2 uppercase' />
        
        <div className="mt-auto">
          <Label
            title={product.description}
            textClass='text-xs line-clamp-2 font-semibold text-gray-400' />
        </div>
      </div>
    </Link>
  );
}

export default Card;