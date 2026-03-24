import React from "react";
import {useState} from "react";

// const Events = () => {
//     const [data,setdata]=useState("Green")
//     const Changecolor=()=>{
//         setdata("Black")
//     }
//     return (
//         <div>
//             <p>My favorite color is {data}.</p>
//             <button onClick={Changecolor} className="border-2 bg-blue-500 text-white p-2 rounded">Change me</button>
//         </div>
//     )
// }
// export default Events;

const events=()=>{
    const [car, setcar]=useState({brand:"Ford", model:"Mustang", year:2002, color:"black"})
    const changecolor=()=>{
        setcar((previousState)=>{
            console.log("this is data", previousState)
            return{...previousState,color:"red", model:"Ranger", year:2010}
        });
    }
    return(
        <div>
            <h1>My {car.brand} {car.model} is {car.color} and it came out in {car.year}.</h1>
            <button onClick={changecolor}>Change Color</button>
        </div>
    )
}
export default events;