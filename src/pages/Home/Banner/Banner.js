import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../images/banner/banner.jpeg";

const Banner = () => {
  return (
    <div className="md:flex justify-around items-center my-10">
      <div className="lg:w-1/3 md:w-1/2 p-3">
        <h1 className="text-5xl font-bold">Could Kitchen</h1>
        <p className="my-5 text-justify">
          At CloudKitchens, we help restaurateurs succeed in delivery. Our ghost
          kitchens give you a delivery model that works, so you can focus on the
          food.
        </p>
        <button className="btn btn-primary">
          <Link to="/reviews">Reviews</Link>
        </button>
      </div>
      <div>
        <img className='p-3 w-full mx-auto' src={banner} alt=""></img>
      </div>
    </div>
  );
};

export default Banner;
