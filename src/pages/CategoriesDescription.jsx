import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import { useApiHooks } from "../hooks/apiHooks";

const CategoriesDescription = () => {
  const nav= useNavigate();
  const { id } = useParams();
  console.log("name", id);
  const [text, error, Loading] = useApiHooks(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`, {});
 

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!meal) {
    return <div>No meal found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      {meal.map((item, index) => {
        {console.log(item.strYoutube.split("=")[1])}
        return (
          <div key={index} className="bg-white shadow-lg rounded-xl p-6">
            <img
              src={item.strMealThumb}
              alt={item.strMeal}
              className="w-full h-96 object-cover rounded-xl mb-6"
            />
            <h1 className="text-3xl font-bold mb-4">{item.strMeal}</h1>
            <p className="text-lg mb-2">
              <span className="font-semibold">Category:</span>{" "}
              {item.strCategory}
            </p>
            <p className="text-lg mb-2">
              <span className="font-semibold">Area:</span> {item.strArea}
            </p>
            <h2 className="text-2xl font-bold mt-6 mb-3">Instructions</h2>
            <p className="text-gray-700 leading-7 whitespace-pre-line">
              {item.strInstructions}
            </p>

            <iframe
              width="420"
              height="315"
              src={`https://www.youtube.com/embed/${item.strYoutube.split("=")[1]}`} allowFullScreen
              className="w-full h-64 mt-6 rounded-lg"
            ></iframe>
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesDescription;
