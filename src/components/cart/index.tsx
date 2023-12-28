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
    
      <SideModal isOpen={isOpen} onClose={closeCart} title="Carrito">
        <p>Contenido del carrito</p>
        
        <div>
          <h2>Test</h2>
          <button onClick={closeCart}>Cerrar</button>
        </div>
      </SideModal>
    </>
  );
}

export default Cart;