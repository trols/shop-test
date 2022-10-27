import { configureStore } from '@reduxjs/toolkit';
import products from "./productsSlice";
import cart from "./cartSlice";

export const store = configureStore({
    reducer:{
products,
cart

    }
})