import React, { useContext } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { AuthContext } from "../../../context/UserContext";

const Review = ({ review }) => {
  const { user } = useContext(AuthContext);
  const { _id, reviewerName, image, price, message, title } = review;

  return (
    <div className="border md:w-1/2 mx-auto my-5 rounded">
      <div className='flex justify-between items-center p-2'>
        <div className="flex">
          <div>
              <PhotoProvider>
                  <PhotoView src={image}>
                    <img className="w-12 h-12 rounded-full" src={image} alt="" />
                  </PhotoView>
              </PhotoProvider>
          </div>
          <div>
            <h5>
              <b>{reviewerName}</b>
            </h5>
            <h5><b>{user?.email}</b></h5>
          </div>
        </div>
        <div>
            <button className='btn btn-ghost'>X</button>
        </div>
      </div>
      <hr></hr>
      <div className='p-2'>
        <p><b>{title} | {price}</b></p>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Review;
