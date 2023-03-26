import React from "react";
import { Link } from "react-router-dom";

const FoodContainer = ({ food }) => {
  const { id, name, img, details, price } = food;
  return (
    <div className="card w-80 h-80 bg-base-100 shadow-xl image-full mx-auto">
      <figure>
        <img src={img} alt="img" className="w-60 h-60" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-4xl">{name}</h2>
        <p>{`${details.slice(0, 100)} ..`}</p>
        <p className='text-2xl font-bold'>Price: ${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-warning btn-outline"><Link to={`foods/${id}`}>Details</Link></button>
        </div>
      </div>
    </div>
  );
};

export default FoodContainer;
