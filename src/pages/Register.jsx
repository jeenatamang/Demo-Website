import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addBlog } from "../Redux/blogSlice";

const Schema = Yup.object().shape({
  FullName: Yup.string().required("Full name is required"),
  phonenumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Must be exactly 10 digits")
    .required("Phone number is required"),
  email: Yup.string().required("Email is required").email("Invalid email"),
  classtype: Yup.string().required("Please select your preferred class type"),
  course: Yup.array().min(2, "Please select at least 2 courses"),
});

const Register = () => {
    const dispatch = useDispatch();
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <Formik
        initialValues={{
          FullName: "",
          phonenumber: "",
          email: "",
          classtype: "",
          course: [],
        }}
        validationSchema={Schema}
        onSubmit={(values) => {
          console.log(values);
          dispatch(addBlog(values));
        }}
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl space-y-5"
          >
            <h1 className="text-2xl font-bold text-center text-gray-700">
              Register
            </h1>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="FullName"
                value={values.FullName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              {errors.FullName && touched.FullName && (
                <p className="text-red-500 text-sm mt-1">{errors.FullName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                name="phonenumber"
                value={values.phonenumber}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              {errors.phonenumber && touched.phonenumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phonenumber}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
              />
              {errors.email && touched.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Class Type
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="classtype"
                    value="Physical"
                    onChange={handleChange}
                    className="accent-blue-500"
                  />
                  <span>Physical</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="classtype"
                    value="Online"
                    onChange={handleChange}
                    className="accent-blue-500"
                  />
                  <span>Online</span>
                </label>
              </div>

              {errors.classtype && touched.classtype && (
                <p className="text-red-500 text-sm mt-1">{errors.classtype}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Course
              </label>

              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" value="Digital Marketing" name="course" onChange={handleChange} /> Digital
                  Marketing
                </label>
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" value="Web Development" name="course" onChange={handleChange} /> Web
                  Development{" "}
                </label>
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" value="Graphic Design" name="course" onChange={handleChange} /> Graphic
                  Design{" "}
                </label>
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" value="Data Analysis" name="course" onChange={handleChange} /> Data
                  Analysis{" "}
                </label>
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" value="Data Science" name="course" onChange={handleChange} /> Data
                  Science{" "}
                </label>
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" value="AI with Python" name="course" onChange={handleChange} /> AI with
                  Python{" "}
                </label>
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" value="Video Editing" name="course" onChange={handleChange} /> Video
                  Editing{" "}
                </label>
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" value="MERN stack" name="course" onChange={handleChange} /> MERN stack{" "}
                </label>
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" value="UI/UX Design" name="course" onChange={handleChange} /> UI/UX
                  Design{" "}
                </label>
                {errors.course && touched.course ? (
                  <div className="text-red-500 text-sm">{errors.course}</div>
                ) : null}
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500  text-white py-2 rounded-lg font-semibold"
            >
              Register Now
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
