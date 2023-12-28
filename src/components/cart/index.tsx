"use client";

import { useState } from "react";
import SideModal from "../sideModal";
import OpenCartButton from "./openCartButton";

const Cart: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  
  return (
    <>
      <OpenCartButton onClick={openCart} />
    
      <SideModal isOpen={isOpen} onClose={closeCart} title="Resumen de tu pedido">
        <p>Contenido del carrito</p>
        
      </SideModal>
    </>
  );
}

export default Cart;