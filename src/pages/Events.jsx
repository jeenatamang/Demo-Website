import React from "react";
import { Formik } from "formik";
 import * as Yup from 'yup';
  
const Schema = Yup.object().shape({
    firstname: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Name is required"),
    lastname: Yup.string()
    .min(3, "Last name must be at least 3 characters")
    .max(50, "Last name must be less than 50 characters")
    .required("Last name is required"),
    phonenumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Must be exactly 10 digits")
    .required("Phone number is required"),
    email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
    password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
     confirmpassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required("Confirm password is required"),
    address: Yup.string()
    .required("Address is required"),
});

const Events = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-5">Event Registration Form</h1>
            <Formik
                initialValues={{
                    firstname: '',
                    lastname: '',
                    phonenumber:'',
                    email: '',
                    password: '',
                    confirmpassword: '',
                    address: '', }}
                validationSchema={Schema}
                onSubmit={(values) => {
                    console.log(values);
                }}
                >
                    {({values, handleChange, handleSubmit, errors, touched}) => (
                        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md" >
                        <label>First Name:</label>
                        < input type="text" name="firstname" value={values.firstname} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 mb-2"/>
                        {errors.firstname && touched.firstname ? <div className="text-red-500 text-sm">{errors.firstname}</div> : null}
                        <label>Last Name:</label>
                        < input type="text" name="lastname" value={values.lastname} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 mb-2"/>
                        {errors.lastname && touched.lastname ? <div className="text-red-500 text-sm">{errors.lastname}</div> : null}
                        <label>Phone Number:</label>
                        <input type="text" name="phonenumber" value={values.phonenumber} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 mb-2"/>
                        {errors.phonenumber && touched.phonenumber ? <div className="text-red-500 text-sm">{errors.phonenumber}</div> : null}
                        <label>Email:</label>
                        <input type="email" name="email" value={values.email} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 mb-2"/>
                        {errors.email && touched.email ? <div className="text-red-500 text-sm">{errors.email}</div> : null}
                        <label>Password:</label>
                        <input type="password" name="password" value={values.password} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 mb-2"/>
                        {errors.password && touched.password ? <div className="text-red-500 text-sm">{errors.password}</div> : null}
                        <label>Confirm Password:</label>
                        <input type="password" name="confirmpassword" value={values.confirmpassword} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 mb-2"/>
                        {errors.confirmpassword && touched.confirmpassword ? <div className="text-red-500 text-sm">{errors.confirmpassword}</div> : null}
                        <label>Address:</label>
                        <input type="text" name="address" value={values.address} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 mb-2"/>
                        {errors.address && touched.address ? <div className="text-red-500 text-sm">{errors.address}</div> : null}
                        <button type="submit" className="bg-blue-500 w-full text-white rounded-md px-4 py-2 mt-4">Register Now</button>
            
                        </form>
                    )}
                </Formik>
        </div>
    )
}
export default Events;