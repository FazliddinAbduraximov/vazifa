import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    totalPrice: 0,
    ProductList: []
}

const product = createSlice({
    name:'product',
    initialState,
    reducers:{
        addProduct:(state,action)=>{
            return {
                ...state,
                count:state.count+1,
                ProductList:[...state.ProductList,action.payload],
            }
        }
    }
})


export default product.reducer
export const {addProduct}=product.actions