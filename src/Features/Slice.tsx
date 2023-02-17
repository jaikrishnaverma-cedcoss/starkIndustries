import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./database";

const MySlice = createSlice({
  name: "mySlice",
  initialState,
  reducers: {
    setAll: (state, action) => {
      state.users = action.payload.users;
      state.session = action.payload.session;
    },
    // action.payload {key:'objName' , data:{}}
    pushData: (state: any, action) => {
      (action.payload.key == 'users')?
      state[action.payload.key].push({ ...action.payload.data,cart:[] })
       :state[action.payload.key].push({ ...action.payload.data });
    },
    // lets deleteFunc action.payload {key:'objName' , index:1}
    deleteFunc: (state: any, action) => {
      state[action.payload.key].splice(action.payload.index, 1);
    },
    // login & LogOut Status Upadte
    setSession:(state:any,action)=>{
      state.session=action.payload
    },
    //for  signup 
    addUser:(state,action)=>{
      state.users.push({...action.payload,cart:[]})
    },
    addProductInCart:(state:any,action)=>{
      state.users[action.payload.userIndex].cart.push(action.payload.obj)
    },
    updateProductInCart:(state:any,action)=>{
      state.users[action.payload.userIndex].cart[action.payload.cartIndex].Quantity=action.payload.Quantity;
      state.users[action.payload.userIndex].cart[action.payload.cartIndex].total=state.users[action.payload.userIndex].cart[action.payload.cartIndex].price*action.payload.Quantity;
    },
    updateProductstock:(state:any,action)=>{
      state.products[action.payload.index].stock=action.payload.stock;
    },
    // {UseIndex.1,index:1}
    deleteProductInCart:(state:any,action)=>{
      state.users[action.payload.userIndex].cart.splice(action.payload.index, 1);
    }
  },
});

export default MySlice.reducer;
export const {updateProductstock,updateProductInCart, deleteProductInCart, addProductInCart, setAll, pushData, deleteFunc, setSession, addUser} = MySlice.actions;
