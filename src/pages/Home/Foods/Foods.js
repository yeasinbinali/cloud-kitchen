import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FoodContainer from "./FoodContainer/FoodContainer";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div>
      <h2 className="text-4xl text-center font-bold my-5">Foods</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-5">
        {foods &&
          foods
            .slice(0, 3)
            .map((food) => (
              <FoodContainer key={food.id} food={food}></FoodContainer>
            ))}
      </div>
      <div className="text-center my-10">
        <button className="btn btn-primary">
          <Link to="/allFoods">Show More 3+</Link>
        </button>
      </div>
    </div>
  );
};

export default Foods;
