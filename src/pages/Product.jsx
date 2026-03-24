import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Product = () => {
  const { name } = useParams();
  const nav = useNavigate();

  console.log("category name:", name);

  const [text, setText] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `https://dummyjson.com/products/category/${name}`
      );

      console.log(res);
      setText(res.data.products);
    } catch (error) {
      setError(error);
      console.error("Error data fetching", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [name]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-4 my-4">
      {text.map((item) => (
        <div key={item.id} className="bg-white shadow rounded-lg p-4">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-40 object-cover rounded-2xl"
          />

          <h2 className="text-lg font-bold mt-2">{item.title}</h2>

          <p className="text-sm text-gray-600 mt-2">
            {item.description?.slice(0, 100)}...
          </p>

          <p className="text-gray-500 text-sm mt-2">{item.category}</p>

          <button
            onClick={() => nav(`/product/${item.id}`)}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition duration-300"
          >
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;