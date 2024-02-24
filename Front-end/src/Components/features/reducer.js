import {createSlice}  from '@reduxjs/toolkit'

export const userSlice=createSlice({
    name: "user",
    initialState: {
        value:{
            username:"",
            password:"",
            isSideEnabled:false
        }
    },
    reducers:{
        login:(state, action)=>{
            state.value=action.payload
        },
        logout:(state,action)=>{
            state.value={username:"",password:""}
        },
        toggleSide:(state,action)=>{
            state.isSideEnabled=action.payload;
        }
    }
});
export const {login,logout,toggleSide} = userSlice.actions;
export default userSlice.reducer;