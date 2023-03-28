import React from "react";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";

const DetailsFood = () => {
  const { _id, name, img, details, price } = useLoaderData();
  return (
    <div className="border lg:w-1/2 md:1/3 mx-auto p-5 mt-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img className="w-16 h-16 rounded-full" src={img} alt=""></img>
          <div className="ml-3">
            <h5 className="font-bold">{name}</h5>
            <h5>Price: ${price}</h5>
          </div>
        </div>
        <div className="rating gap-1">
          <input
            type="radio"
            name="rating-3"
            className="mask mask-heart bg-red-400"
          />
          <input
            type="radio"
            name="rating-3"
            className="mask mask-heart bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-3"
            className="mask mask-heart bg-yellow-400"
            checked
          />
          <input
            type="radio"
            name="rating-3"
            className="mask mask-heart bg-lime-400"
          />
          <input
            type="radio"
            name="rating-3"
            className="mask mask-heart bg-green-400"
          />
        </div>
      </div>
      <p className='my-5 text-justify'>{details}</p>
      <div className='flex'>
        <Link to={`/reviewform/${_id}`}><button className="transition ease-in-out delay-150 bg-blue-500 text-white hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 duration-300 py-2 px-5 rounded mr-4">
        Review
        </button></Link>
        <Link to='/allfoods'><button className="transition ease-in-out delay-150 bg-orange-500 text-white hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 py-2 px-5 rounded">
        Go Back
        </button></Link>
      </div>
    </div>
  );
};

export default DetailsFood;
