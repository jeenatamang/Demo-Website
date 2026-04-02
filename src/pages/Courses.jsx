import { useState } from "react";
import { useSelector } from "react-redux";
const Courses =()=>{
   const post = useSelector((state)=> state.post)
   console.log("this is post", post);

    return (
        <div>
           {/* {post.map((item, index) => (
            <div key={index}>
              <h2>{item.FullName}</h2>
                <p>{item.Email}</p>
                <p>{item.phonenumber}</p>
                <p>{item.classtype}</p>
                <p>{item.course}</p>
            </div>
           ))} */}
        </div>
    )
}
export default Courses;