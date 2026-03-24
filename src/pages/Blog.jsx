import React from "react";
import {useState} from "react";

const Blog = () => {
    const [data,setdata]=useState("Hello")
    const upperCase=()=>{
        setdata(data.toUpperCase())
    }
    const LowerCase=()=>{
        setdata(data.toLowerCase())
    }
    return (
        <div>
            <h1>{data}</h1>
            <button onClick={upperCase}>Convert to Uppercase</button>
            <button onClick={LowerCase}>Convert to Lowercase</button>
        </div>
    )
}
export default Blog;