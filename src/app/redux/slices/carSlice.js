import { createSlice } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("cartList") !== null
    ? JSON.parse(localStorage.getItem("cartList"))
    : [];
const totalAmount =
  localStorage.getItem("cartTotal") !== null
    ? JSON.parse(localStorage.getItem("cartTotal"))
    : 0;
const totalQuantity =
  localStorage.getItem("cartQuantity") !== null
    ? JSON.parse(localStorage.getItem("cartQuantity"))
    : 0;

// adding this function to prevent repear code
const setCartListFunc = (items, totalAmount, totalQuantity) => {
  localStorage.setItem("cartList", JSON.stringify(items));
  localStorage.setItem("cartTotal", JSON.stringify(totalAmount));
  localStorage.setItem("cartQuantity", JSON.stringify(totalQuantity));
};

const initialState = {
  value: items,
  totalAmount: totalAmount,
  totalQuantity: totalQuantity,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const product = action.payload;
      const productExist = state.value.find(
        (prod) => prod.product_id === product.product_id
      );
      if (productExist) {
        console.log("productos ya existente");
        productExist.quantity += product.quantity;
      } else {
        state.value.push(product);
      }
      state.totalQuantity = state.value.reduce(
        (acc, prod) => acc + prod.quantity,
        0
      );
      setCartListFunc(state.value, state.totalAmount, state.totalQuantity);
    },
    deleteProduct: (state, action) => {
      const id = action.payload.id_product;
      const productDelete = state.value.filter((prod) => prod.id_product != id);
      state.value = productDelete;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCart, deleteProduct } = cartSlice.actions;

export default cartSlice.reducer;
