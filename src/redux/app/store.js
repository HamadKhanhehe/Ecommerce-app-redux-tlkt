import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";
import sliderSlice from "../features/sliderSlice";

//create store
export const store = configureStore({
    reducer:{
        sliderName: sliderSlice,
allCart: cartSlice,
    }
})