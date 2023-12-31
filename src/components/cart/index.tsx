import { getCart } from "@/lib/spree";
import { cookies } from "next/headers";
import CartModal from "./modal";

const Cart: React.FC = async () => {
  // const cartToken = cookies().get('cartToken')?.value;
  
  // if (cartToken) {
  //   const res = await getCart(cartToken);
  //   console.log(res.body);
  // }
  
  return (
    <CartModal />
  );
}

export default Cart;