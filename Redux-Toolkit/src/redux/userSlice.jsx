import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  users : [],
  loading:true
}

export const getAllUsers = createAsyncThunk("users", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
})

export const userSlice = createSlice({
    name:"user",
    initialState,//if you change the name of the initialState to "test" => initialState: test
    reducers:{
        //used when there isn't Http request
    },
    extraReducers : (builder) =>{
        //used when there is HTTP request
        builder.addCase(getAllUsers.fulfilled, (state,action) =>{
            state.users = action.payload;
        })
    }
})




// Action creators are generated for each case reducer function
export const {} = userSlice.actions

export default userSlice.reducer