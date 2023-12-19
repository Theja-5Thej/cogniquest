import { createSlice } from "@reduxjs/toolkit";

const initialState =[]

export const UserSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        addUser:(state,action)=>{
           state.push(action.payload)
        }    
    }

})

export const {addUser} = UserSlice.actions
export default UserSlice.reducer