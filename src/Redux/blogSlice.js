

import {createSlice} from "@reduxjs/toolkit";
import {setData, getData} from "../localstorage/local.js";

const BlogSlice = createSlice ({
    name:"test",
    initialState: {
        posts: getData() || []    },
    reducers:{
        addBlog: (state, action) => {
            console.log("this is action", action.payload);
            state.posts.push(action.payload);
            setData(state.posts)
        },
        deleteBlog: (state,action) =>{
            console.log(action.payload)
            const id = action.payload
            state.posts= state.posts.filter((item)=>item.id !== id)
            console.log(state.posts)

            setData(state.posts)
            
        },
        editBlog: (state,action) => {
            console.log(action.payload)
            const updateData = action.payload
            state.posts= state.posts.map((item)=>item.id===updateData.id? updateData :item)
            setData(state.posts)
        }
    }
}) 
export const {addBlog, deleteBlog, editBlog}=BlogSlice.actions;
export default BlogSlice.reducer;