import { configureStore } from "@reduxjs/toolkit";
import BlogSlice from "../Redux/blogSlice";
 const store = configureStore({
    reducer: {
       post: BlogSlice,
        // Add your reducers here
    },
});
export default store;