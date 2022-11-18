import { createSlice} from '@reduxjs/toolkit';


export const slice = createSlice({
    name: `cart`,
    initialState:{
        cartItems: []
    },
    reducers:{
        addItemToCart:(state,action)=>{
           
            
                state.cartItems.push({
               ...action.payload.prod,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity*action.payload.prod.price})
        },
        changeQuantity: (state, action) => {
            const newCart = [];
            state.cartItems.forEach(item => {
                if (item.id === action.payload.prod.id) {
                    let countNew = item.quantity + action.payload.quantity
                    let totalSum = item.price * countNew;
                    const changeCart = {...item, quantity: countNew, totalPrice: totalSum };
                    newCart.push(changeCart);
                } else {
                    newCart.push(item);
                }
            })
            state.cartItems = newCart;
        },
        removeItemFromCart:(state,action)=>{
            state.cartItems=state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.cartItemId
            )
        }, 
        clearCart: state => {
            state.cartItems = []
        }
        
    }
})
export const getTotalPrice = state =>{
    return state.cart.cartItems.reduce((total,cartItems)=>{
        return cartItems.totalPrice + total},0)
}

export const getTotalProducts = state =>{
    return state.cart.cartItems.length
};

export const getCartItems=state=>state.cart.cartItems;
export const {addItemToCart,removeItemFromCart,updateQuantity,clearCart}=slice.actions;
export default slice.reducer;