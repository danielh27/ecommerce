import { Product } from "@/interfaces/products";
import Label from "../label";
import Image from "next/image";

const Card = ({ product }: {product: Product}) => {
  return (
    <div className="bg-white rounded-sm shadow p-6 cursor-pointer">
      <div className="min-h-28 mb-2">
        <Image
          src={product.image_url || ''}
          alt={product.name}
          width={300}
          height={300}
          className="rounded-sm object-contain" />
      </div>
      
      <div className="h-6 w-3/12 mb-2 font-bold">{product.display_price}</div>
      
      <Label
        title={product.name}
        textClass='text-lg font-bold mb-2 uppercase' />
      
      <Label
        title={product.description}
        textClass='text-xs mb-6 font-semibold text-gray-400' />
    </div>
  );
}

export default Card;