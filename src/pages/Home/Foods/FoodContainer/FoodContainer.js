import React from "react";

const FoodContainer = ({ food }) => {
  const { id, name, img, details } = food;
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={img} alt="img" className="w-60 h-60" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{name}</h2>
        <p>{`${details.slice(0, 100)} ..`}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-warning btn-outline">Details</button>
        </div>
      </div>
    </div>
  );
};

export default FoodContainer;
