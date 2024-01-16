import { Product } from "@/interfaces/products";
import ModifierGroup from "./modifier-group";

type FormProps = {
  product: Product;
};

const Form: React.FC<FormProps> = ({ product }) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl p-4">
      {product.modifier_groups.map((modifier_group) => (
        <ModifierGroup key={modifier_group.id} modifier_group={modifier_group} />
      ))}
    </div>
  )
}

export default Form;