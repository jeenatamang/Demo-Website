import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Card from "../Card";
import { useApiHooks } from "../hooks/apiHooks";
const About = () => {
  const [text,error,loading]= useApiHooks("https://www.themealdb.com/api/json/v1/1/categories.php");
  
      if(error){
        return <div>Error: {error.message}</div>
      }
      if(loading){
        return <div>Loading...</div>;
      }
  console.log("data", text);
  return (
    <div >
      <h1 className="grid grid-cols-3 my-2 space-y-4">
      {text.map((item,index) =>
        <Card key={index} name={item.strCategory} description={item.strCategoryDescription} thumbnail={item.strCategoryThumb} button="Read More" title="Categories"/>      
    
       )}
    </h1>
  </div>
  )
};
export default About;

//get //read
//post // create
//put// update
//delete
