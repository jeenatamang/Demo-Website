import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchSingleProduct = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      console.log(res);
      setProduct(res.data);
    } catch (error) {
      setError(error);
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleProduct();
  }, [id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid grid-cols-2 gap-8 bg-white shadow-lg rounded-xl p-6">
        <div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-96 object-cover rounded-xl"
          />

          <div className="grid grid-cols-3 gap-3 mt-4">
            {product.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={product.title}
                className="w-full h-24 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>

          <p className="text-gray-600 mt-3">{product.description}</p>

          <p className="text-2xl font-semibold text-green-600 mt-4">
            ${product.price}
          </p>

          <p className="mt-2">
            <span className="font-semibold">Category:</span> {product.category}
          </p>

          <p className="mt-2">
            <span className="font-semibold">Brand:</span> {product.brand}
          </p>

          <p className="mt-2">
            <span className="font-semibold">Rating:</span> {product.rating}
          </p>

          <p className="mt-2">
            <span className="font-semibold">Stock:</span> {product.stock}
          </p>

          <p className="mt-2">
            <span className="font-semibold">Availability:</span>{" "}
            {product.availabilityStatus}
          </p>

          <p className="mt-2">
            <span className="font-semibold">Warranty:</span>{" "}
            {product.warrantyInformation}
          </p>

          <p className="mt-2">
            <span className="font-semibold">Shipping:</span>{" "}
            {product.shippingInformation}
          </p>

          <p className="mt-2">
            <span className="font-semibold">Return Policy:</span>{" "}
            {product.returnPolicy}
          </p>

          <button className="bg-green-500 text-white px-6 py-3 rounded mt-6 hover:bg-green-600">
            Confirm Purchase
          </button>
        </div>
      </div>

      <div className="mt-10 bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>

        {product.reviews?.length > 0 ? (
          product.reviews.map((review, index) => (
            <div key={index} className="border-b py-4">
              <p className="font-semibold">{review.reviewerName}</p>
              <p className="text-sm text-gray-500">{review.reviewerEmail}</p>
              <p className="text-yellow-600 mt-1">Rating: {review.rating}</p>
              <p className="text-gray-700 mt-1">{review.comment}</p>
            </div>
          ))
        ) : (
          <p>No reviews available</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;