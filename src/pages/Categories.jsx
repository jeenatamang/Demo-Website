import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useApiHooks } from "../hooks/apiHooks";

const Categories = () => {
  const nav = useNavigate();
  const { name } = useParams();
  console.log("name", name);
  const [text, error, loading] = useApiHooks(
    "https://www.themealdb.com/api/json/v1/1/filter.php",
    { c: name },
  );
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log("data", text);

  return (
    <div className="grid grid-cols-3 my-2 space-y-4">
      {text.map((item, index) => (
        <div
          key={index}
          onClick={() => nav(`/category-description/${item.idMeal}`)}
          className="cursor-pointer"
        >
          <img
            src={item.strMealThumb}
            alt={item.strMeal}
            className="w-80 m-4 h-40 object-cover rounded-2xl"
          />

          <h2 className="text-sm">{item.idMeal}</h2>
          <h2 className="text-xl font-bold">{item.strMeal}</h2>
        </div>
      ))}
    </div>
  );
};
export default Categories;
