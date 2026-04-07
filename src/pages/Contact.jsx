import React from "react";
import {useState} from "react";

// const Contact = () => {
//   const [name, setName]= useState("");
//   const [email, setEmail]= useState("");
//   const [phonenumber, setPhonenumber] =useState("");
//   const [password, setPassword] = useState("");
//   const [gender, setGender] = useState("");

//     const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Name is: ${name}`);
//   }

//   const handleChange = (e) => {
//     console.log(e.target.name, e.target.value);
//     if (e.target.name === "name") {
//       setName(e.target.value);
//     } else if (e.target.name === "email") {
//       setEmail(e.target.value);
//     } else if (e.target.name === "phonenumber") {
//       setPhonenumber(e.target.value);
//     } else if (e.target.name === "password") {
//       setPassword(e.target.value);
//     } else if (e.target.name === "gender") {
//       setGender(e.target.value);
//     }
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//        <input type="text" name="name" value={name} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" /></label>
//        <label>Enter your email:
//        <input type="email" name="email" value={email} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" /></label>
//        <label>Enter your password: 
//        <input type="password" name="password" value={password} onChange={handleChange} 
//        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" /></label>
//        <label>Enter your phone number:
//        <input type="text" name="phonenumber" value={phonenumber} onChange={handleChange} 
//        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" /></label>
//        <p>Select your gender:</p>
//        <label>Male<input type="radio" name="gender" value="male" checked={gender === 'male'}   onChange={handleChange}/></label>
//        <label>Female<input type="radio" name="gender" value="female" checked={gender === 'female'}   onChange={handleChange}/></label>
//       <label>Other<input type="radio" name="gender" value="other" checked={gender === 'other'}   onChange={handleChange}/></label>
//       <p className=" block mt-2 mx-4 text-sm font-medium text-black">
//         Name is: {name}
//         {email && <span>, Email is: {email}</span>}
//         {phonenumber && <span>, Phone Number is: {phonenumber}</span>}
//         {password && <span>, Password is: {password}</span>}
//       </p>
//       <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//         click me
//       </button>
//     </form>
//   );
// };

const Contact = () => {
  const [count, setCount] = useState(0);
  const [data, setData] =useState({name:"", email:"", phonenumber:"", password:"", gender:""});
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Data is: ${JSON.stringify(data)}`);
   
  }

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setData((prevData) => ({
        ...prevData,
      [e.target.name]: e.target.value,
    }));
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input type="text" name="name" value={data.name} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
      </label>
      <label>Enter your email:
        <input type="email" name="email" value={data.email} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
      </label>
      <label>Enter your password:
        <input type="password" name="password" value={data.password} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
      </label>
      <label>Enter your phone number:
        <input type="text" name="phonenumber" value={data.phonenumber} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
      </label>
      <p>Select your gender:</p>
      <label>Male
        <input type="radio" name="gender" value="male" checked={data.gender === 'male'} onChange={handleChange} />
      </label>
      <label>Female
        <input type="radio" name="gender" value="female" checked={data.gender === 'female'} onChange={handleChange} />
      </label>
      <label>Other
        <input type="radio" name="gender" value="other" checked={data.gender === 'other'} onChange={handleChange} />
      </label>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white block font-bold py-2 px-4 rounded">
        click me
      </button>
    </form>
  )
}
export default Contact;