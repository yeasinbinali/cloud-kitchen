import React, {useContext, useState} from 'react';
import { AuthContext } from '../../context/UserContext';
import Review from './Review/Review';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const {user} = useContext(AuthContext)

    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
    .then(res => res.json())
    .then(data => setReviews(data));

    return (
        <div>
            <h2 className='text-2xl text-center font-bold my-2'>Total reviews: {reviews.length}</h2>
            {
                reviews.map(review => <Review
                    review = {review}
                    key = {review._id}
                ></Review>)
            }
        </div>
    );
};

export default MyReviews;