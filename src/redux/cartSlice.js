import { createSlice} from '@reduxjs/toolkit';


export const slice = createSlice({
    name: `cart`,
    initialState:{
        cartItems: []
    },
    reducers:{
        addItemToCart:(state,action)=>{
            const timeId = new Date().getTime();
            
                state.cartItems.push({
                id: timeId, 
                dishId: action.payload.prod.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity*action.payload.prod.price,
                price: action.payload.prod.price,
            })
        },
        updateQuantity: (state, action) => {
            const newCart = [];
            
            state.cartItems.forEach(item => {
                if (item.itemId === action.payload.shopItem.id) {
                    let newQuantity = item.quantity + action.payload.quantity;
                    let totalSum = item.price * newQuantity;
                    const changeCart = {...item, quantity: newQuantity, totalPrice: totalSum };
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