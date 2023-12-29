'use client'

import { useState } from "react";
import SideModal from "../sideModal"
import OpenCartButton from "./openCartButton"
import { addItem } from "./actions";

const CartModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  
  const handleAddToCart = async () => {
    await addItem('124' , 1);
  }
  
  return (
    <>
    <OpenCartButton onClick={openCart} />
  
    <SideModal isOpen={isOpen} onClose={closeCart} title="Resumen de tu pedido">
      <p>Contenido del carrito</p>
      
      <div>
        <button>Crear carrito</button>
      </div>
      <div>
        <button>Obtener carrito</button>
      </div>
      <div>
        <button onClick={handleAddToCart}>Añadir al carrito</button>
      </div>
      
    </SideModal>
  </>
  )
}

export default CartModal;