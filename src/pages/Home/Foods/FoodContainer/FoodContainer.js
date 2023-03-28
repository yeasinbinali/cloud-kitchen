import React from "react";
import { Link } from "react-router-dom";

const FoodContainer = ({ food }) => {
  const { _id, name, img, details, price } = food;
  return (
    <div className="card w-80 h-80 bg-base-100 shadow-xl image-full mx-auto">
      <figure>
        <img src={img} alt="img" className="w-60 h-60" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-4xl">{name}</h2>
        <p>{`${details.slice(0, 100)} ..`}</p>
        <p className='text-2xl font-bold'>Price: ${price}</p>
        <div className="card-actions justify-between">
          <Link to={`/reviewform/${_id}`}><button className="btn btn-warning">Review</button></Link>
          <button className="btn btn-warning btn-outline"><Link>Details</Link></button>
        </div>
      </div>
    </div>
  );
};

export default FoodContainer;
