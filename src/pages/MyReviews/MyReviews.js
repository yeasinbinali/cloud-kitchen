import React, {useContext, useState} from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/UserContext';
import Review from './Review/Review';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [displayReviews, setDisplayReviews] = useState(reviews);
    const {user} = useContext(AuthContext)

    const handleReviewDelete = (id) => {
        const agree = window.confirm(`Are you sure to delete this review?`);
        if(agree){
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    toast.success('Deleted successfully')
                    const remaining = reviews.filter(rvw => rvw._id !== id);
                    setDisplayReviews(remaining);
                }
            })
        }
    }

    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
    .then(res => res.json())
    .then(data => setReviews(data));

    return (
        <div>
            {
                displayReviews.length === 0 ?
                <h2 className='text-2xl text-center font-bold my-2'>There is no review</h2>
                : 
                <h2 className='text-2xl text-center font-bold my-2'>Total reviews: {displayReviews.length}</h2>
            }
            {
                displayReviews.map(review => <Review
                    review = {review}
                    key = {review._id}
                    handleReviewDelete = {handleReviewDelete}
                ></Review>)
            }
        </div>
    );
};

export default MyReviews;