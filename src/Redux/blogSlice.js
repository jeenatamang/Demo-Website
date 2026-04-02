import { createSlice } from "@reduxjs/toolkit";
import {setData} from "../localstorage/local.js"
const BlogSlice = createSlice({
   name:"blog",
   initialState:{
    posts:[]
   },
   reducers:{
    addBlog: (state,action) =>{
        console.log("this is action", action.payload);
        state.posts.push(action.payload);
        setData(state.posts)

    }
   }
})
export const {addBlog} = BlogSlice.actions;
export default BlogSlice.reducer;