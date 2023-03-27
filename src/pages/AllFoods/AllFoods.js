import React, { useEffect, useState } from "react";
import FoodContainer from "../Home/Foods/FoodContainer/FoodContainer";

const AllFoods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div>
      <h2 className="text-3xl text-center font-bold my-5">All Foods</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 px-5">
        {foods.map((food) => (
          <FoodContainer key={food.id} food={food}></FoodContainer>
        ))}
      </div>
    </div>
  );
};

export default AllFoods;
