import { createSlice } from "@reduxjs/toolkit";

const BlogSlice = createSlice({
   name:"blog",
   initialState:[],
   reducers:{
    addBlog: (state,action) =>{
        console.log("this is action", action.payload);
        state.push(action.payload);

    }
   }
})
export const {addBlog} = BlogSlice.actions;
export default BlogSlice.reducer;