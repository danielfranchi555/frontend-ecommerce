import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.value = action.payload; // Establece el carrito desde el backend
    },
    addCart: (state, action) => {
      const product = action.payload;
      const productExist = state.value.find(
        (prod) => prod.id_product === product.id_product
      );
      if (productExist) {
        console.log("productos ya existente");
        productExist.quantity += product.quantity;
      } else {
        state.value.push(product);
        console.log("producto agregado");
      }
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
