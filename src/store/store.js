import { configureStore } from "@reduxjs/toolkit";
import product from './reducer/product-reducer'


export const store=configureStore({
    reducer:{
        product,
    },
    preloadedState:{

    }
})