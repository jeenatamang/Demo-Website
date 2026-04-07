import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteBlog } from "../Redux/blogSlice";
import {editBlog} from "../Redux/blogSlice";

const Courses = () => {
  const post = useSelector((state) => state.post.posts);
  const dispatch = useDispatch()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5">
      {post.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl "
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {item.FullName}
          </h2>

          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-700">Email:</span>{" "}
            {item.email}
          </p>

          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-700">Phone:</span>{" "}
            {item.phonenumber}
          </p>

          <p className="text-sm text-gray-600 mb-2">
            <span className="font-medium text-gray-700">Class Type:</span>{" "}
            {item.classtype}
          </p>

          <div>
            <p className="font-medium text-gray-700 mb-1">Courses:</p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              {item.course.join(", ")}
            </ul>
          </div>
          <div className="m-4 space-x-4">
            <button
              type="submit"
              className="bg-black hover:bg-gray-800 text-white font-semibold border-none py-2 px-4 rounded cursor-pointer"
            >
              Edit{" "}
            </button>
            <button
              onClick={()=>dispatch(deleteBlog(item.id))}
              type="submit"
              className=" bg-red-600 hover:bg-red-800 border-none text-white font-semibold py-2 px-4 rounded cursor-pointer"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
