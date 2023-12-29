'use server';

import { createCart, addToCart } from "@/lib/spree";
import { cookies } from 'next/headers';

export async function addItem(variantId: string, quantity: number) {
  let cartToken = cookies().get("cartToken")?.value as string;
  
  if (!cartToken) {
    const cart = await createCart();
    cartToken = cart.body.data.attributes.token;
    
    const sevenDays = 7 * 24 * 60 * 60 * 1000;
    cookies().set("cartToken", cartToken, { expires: new Date(Date.now() + sevenDays) });
  }
  
  try {
    const res = await addToCart(cartToken, variantId, quantity);
  } catch (e) {
    console.log("Error adding item to cart", e);
  }
}