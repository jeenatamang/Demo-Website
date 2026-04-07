
import { configureStore} from "@reduxjs/toolkit";
import BlogSlice from "../Redux/blogSlice";
const store = configureStore ({
    reducer: {
        post: BlogSlice,
    }
})
export default store;