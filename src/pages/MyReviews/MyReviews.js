import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/UserContext";
import Review from "./Review/Review";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);

  const handleReviewDelete = (id) => {
    const agree = window.confirm(`Are you sure to delete this review?`);
    if (agree) {
      fetch(`https://cloud-kitchen-server-blue.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Deleted successfully");
          }
        });
    }
  };

  fetch(
    `https://cloud-kitchen-server-blue.vercel.app/reviews?email=${user?.email}`
  )
    .then((res) => res.json())
    .then((data) => setReviews(data));

  return (
    <div>
      {reviews.length === 0 ? (
        <h2 className="text-2xl text-center font-bold my-2">
          There is no review
        </h2>
      ) : (
        <h2 className="text-2xl text-center font-bold my-2">
          Total reviews: {reviews.length}
        </h2>
      )}
      {reviews.map((review) => (
        <Review
          review={review}
          key={review._id}
          handleReviewDelete={handleReviewDelete}
        ></Review>
      ))}
    </div>
  );
};

export default MyReviews;
