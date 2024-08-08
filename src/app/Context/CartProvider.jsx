"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = async (object) => {
    try {
      const resp = await fetch("http://localhost:4000/api/cart/add-product", {
        method: "POST",
        body: JSON.stringify(object),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (!resp.ok) {
        throw new Error("Error al agregar producto al carrito");
      } else {
        const respuesta = await resp.json();
        // toast({
        //   title: "Product Added ",
        //   description: `Name: ${data?.name_product}, Quantity:${count}, Price: $${data?.price}`,
        //   action: (
        //     <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
        //   ),
        // });

        // dispatch(resetCount());

        // const exist = cart.find(
        //   (prod) => prod.product_id === object.cart_items[0].product_id
        // );

        // if (exist) {

        //   console.log("ya existe");
        // } else {
        //   setCart((prevCart) => [...prevCart, object.cart_items[0]]);
        //   console.log("se agrego");
        // }
      }
    } catch (error) {
      console.log({ message: error });
    }
  };

  const removeFromCart = async (id_cart_item) => {
    try {
      await fetch("http://localhost:4000/api/cart/remove-product", {
        method: "DELETE",
        body: JSON.stringify({ id_cart_item }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setCart((prevCart) =>
        prevCart.filter((item) => item.id_cart_item !== id_cart_item)
      );
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
