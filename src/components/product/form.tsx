import { Product } from "@/interfaces/products";
import ModifierGroup from "./modifier-group";
import RelatedProductsGroup from "./related-products-group";
import Button from "../button";

type FormProps = {
  product: Product;
};

const Form: React.FC<FormProps> = ({ product }) => {
  return (
    <form className="flex flex-col bg-white rounded-2xl p-4">
      {product.modifier_groups.map((modifier_group) => (
        <ModifierGroup key={modifier_group.id} modifier_group={modifier_group} />
      ))}
      
      {product.related_products.map((related_products_group) => (
        <RelatedProductsGroup key={related_products_group.id} related_products_group={related_products_group} />
      ))}
      
      <div className="flex justify-center sm:justify-end w-dvw gap-5 bg-white border-t border-t-gray-300 fixed bottom-0 left-0 py-4 sm:pr-10">
          <div className="flex items-center gap-2">
            <button
              type="button"
              data-action="decrease"
              className="flex items-center justify-center w-10 h-10 text-2xl text-gray-500 focus:outline-none border rounded-full border-gray-500 bg-white" >
              -
            </button>
            
            <input
              type="number"
              defaultValue={0}
              className="bg-transparent w-7 font-semibold text-center [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            
            <button
              type="button"
              data-action="increase"
              className="flex items-center justify-center w-10 h-10 text-2xl text-gray-500 focus:outline-none border rounded-full border-gray-500" >
              +
            </button>
          </div>
          
          <Button classes="py-3 px-4 bg-rose-600">Agregar {product.display_price}</Button>
      </div>
    </form>
  )
}

export default Form;