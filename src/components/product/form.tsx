import { Product } from "@/interfaces/products";
import ModifierGroup from "./modifier-group";
import RelatedProductsGroup from "./related-products-group";

type FormProps = {
  product: Product;
};

const Form: React.FC<FormProps> = ({ product }) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl p-4">
      {product.modifier_groups.map((modifier_group) => (
        <ModifierGroup key={modifier_group.id} modifier_group={modifier_group} />
      ))}
      
      {product.related_products.map((related_products_group) => (
        <RelatedProductsGroup key={related_products_group.id} related_products_group={related_products_group} />
      ))}
    </div>
  )
}

export default Form;