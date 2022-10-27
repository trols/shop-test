import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({

    name: `products`,
    initialState : {
        selectedCategory : 'КАТАЛОГ'
    }, 
    reducers : {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
          }
    }
})


export const { filterCategory } = productsSlice.actions;
export const getSelectedCategory = state => state.products.selectedCategory;
export default productsSlice.reducer;