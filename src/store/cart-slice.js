import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'ui',
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        addItemsToCart(state, action){
            const newItem = action.payload;

            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if(!existingItem){
                state.items.push({id: newItem.id,
                     price: newItem.price,
                      quantity: 1,
                       totalPrice: newItem.price,
                        name: newItem.title})
            }else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemsFromCart(state, action){
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            // state.totalPrice--;
            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id != id);
            }else{
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice- existingItem.price
            }
        },
        clearItemsFromCart(state, action){
            if(state.totalQuantity >= 1){
                state.items=[];
                state.totalQuantity=0;
            }else{
                alert('cart is empty bruh')
            }
        },
        orderItemsFromCart(state, action){
            if(state.totalQuantity >=1){
                state.totalQuantity=0;
                state.items =[];
                alert('ordered your food enjoy')
            }else{
                alert('first add food items in your cart')
            }
            
        }
    }
})


export const cartActions = cartSlice.actions;

export default cartSlice;