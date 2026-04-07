import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addBlog,editBlog } from "../Redux/blogSlice";
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom";

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
  const { id } = useParams();
  const isEditMode = Boolean(id)
  console.log(isEditMode)
  const dispatch = useDispatch();
  const nav= useNavigate();

  const posts = useSelector((state) => state.post.posts);

  const existingPost = posts.find((item) => item.id === id);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Formik
        enableReinitialize
        initialValues={
          existingPost
            ? {
                FullName: existingPost.FullName,
                phonenumber: existingPost.phonenumber,
                email: existingPost.email,
                classtype: existingPost.classtype,
                course: existingPost.course || [],
              }
            : {
                FullName: "",
                phonenumber: "",
                email: "",
                classtype: "",
                course: [],
              }
        }
        validationSchema={Schema}
        onSubmit={(values) => {
          if(isEditMode){
              dispatch(editBlog({id,...values}))
          }else{
          dispatch(
            addBlog({
              ...values,
              id: existingPost ? existingPost.id : crypto.randomUUID(),
            })
          );
          nav("../courses")
        }}}
      >
        {() => (
          <Form className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl space-y-5">
            <h1 className="text-2xl font-bold text-center text-gray-700">
              {isEditMode ? "Edit Registration" : "Register"}
            </h1>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Full Name
              </label>
              <Field
                type="text"
                name="FullName"
                className="w-full px-3 py-2 border rounded-lg"
              />
              <ErrorMessage
                name="FullName"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Phone Number
              </label>
              <Field
                type="text"
                name="phonenumber"
                className="w-full px-3 py-2 border rounded-lg"
              />
              <ErrorMessage
                name="phonenumber"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <Field
                type="email"
                name="email"
                className="w-full px-3 py-2 border rounded-lg"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Class Type
              </label>

              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <Field
                    type="radio"
                    name="classtype"
                    value="Physical"
                  />
                  Physical
                </label>

                <label className="flex items-center gap-2">
                  <Field
                    type="radio"
                    name="classtype"
                    value="Online"
                  />
                  Online
                </label>
              </div>

              <ErrorMessage
                name="classtype"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Course
              </label>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "Digital Marketing",
                  "Web Development",
                  "Graphic Design",
                  "Data Analysis",
                  "Data Science",
                  "AI with Python",
                  "Video Editing",
                  "MERN stack",
                  "UI/UX Design",
                ].map((course) => (
                  <label key={course} className="flex items-center gap-2">
                    <Field
                      type="checkbox"
                      name="course"
                      value={course}
                    />
                    {course}
                  </label>
                ))}
              </div>

              <ErrorMessage
                name="course"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold"
            >
              {isEditMode ? "Update" : "Register Now"}
          
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;