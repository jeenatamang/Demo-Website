import { useState } from "react";
// const Courses = () => {
//     const [data,setData] = useState(1) 
//     const increment =() =>{
//         setData(data+1)
//     }
//     return (
//         <div>
//           <div>{data}</div> 
//            <button onClick={increment}>increment</button>
//         </div>
//     )
// }
const Courses =()=>{
    const [Courses, setCourses] = useState(0)
    const increment =()=>{
        setCourses(Courses+1)}
    const decrement =()=>{
        setCourses(Courses-1)
    }
    return (
        <div>
            <div className="mx-auto">
                {Courses}</div> 
                <button onClick={increment} className="border-2 rounded w-24 p-1">Increment</button> 
                <button onClick={decrement} className="border-2 rounded w-24 p-1 ml-2">Decrement</button>
        </div>
    )
}
export default Courses;