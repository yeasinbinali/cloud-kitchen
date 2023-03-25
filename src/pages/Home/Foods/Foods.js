import React, { useEffect, useState } from "react";
import FoodContainer from "./FoodContainer/FoodContainer";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
      fetch('foods.json')
      .then(res => res.json())
      .then(data => setFoods(data))
  }, [])
  return (
    <div>
      <h2 className="text-4xl text-center font-bold my-5">Foods</h2>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-5'>
          {
              foods.map(food => <FoodContainer
                key = {food.id}
                food = {food}
              ></FoodContainer>)
          }
      </div>
    </div>
  );
};

export default Foods;
