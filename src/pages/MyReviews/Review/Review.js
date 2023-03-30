import React, { useContext } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { AuthContext } from "../../../context/UserContext";

const Review = ({ review, handleReviewDelete }) => {
  const { user } = useContext(AuthContext);
  const { _id, reviewerName, image, price, message, title } = review;

  return (
    <div className="border md:w-1/2 mx-auto my-5 rounded">
      <div className='flex justify-between items-center p-2 bg-pink-100'>
        <div className="flex">
          <div>
              <PhotoProvider>
                  <PhotoView src={image}>
                    <img className="w-12 h-12 rounded-full mr-2" src={image} alt="" />
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
            <button onClick={() => handleReviewDelete(_id)} className='btn btn-ghost'>X</button>
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
