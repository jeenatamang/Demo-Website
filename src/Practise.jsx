import React from 'react';
import Card from './Card.jsx';

export const Practise = () => {
  const userdata = [
    { name: "Alice", age: 25, city: "New York", Gender: "Female" },
    { name: "Bob", age: 30, city: "San Francisco", Gender: "Male" },
    { name: "Charlie", age: 28, city: "Chicago", Gender: "Male" }
  ];

  const data = [
    { idCategory: '1', strCategory: 'Beef' },
    { idCategory: '2', strCategory: 'Chicken' },
    { idCategory: '3', strCategory: 'Dessert' },
    { idCategory: '4', strCategory: 'Lamb' },
    { idCategory: '5', strCategory: 'Miscellaneous' },
    { idCategory: '6', strCategory: 'Pasta' },
    { idCategory: '7', strCategory: 'Pork' },
    { idCategory: '8', strCategory: 'Seafood' },
    { idCategory: '9', strCategory: 'Side' },
    { idCategory: '10', strCategory: 'Starter' },
    { idCategory: '11', strCategory: 'Vegan' },
    { idCategory: '12', strCategory: 'Vegetarian' },
    { idCategory: '13', strCategory: 'Breakfast' },
    { idCategory: '14', strCategory: 'Goat' }
  ];

  const meals = [

  ]
  
  return (
    <div>
      {userdata.map((user, index) => (
        <Card
          key={index}
          name={user.name}
          Gender={user.Gender}
          City={user.city}
        />
      ))}

      {userdata.map((item, index) => (
        <div key={index}>
          <h1>{`My name is ${item.name} and my age is ${item.age}`}</h1>
        </div>
      ))}
    </div>
  );
};
export default Practise;