import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../../context/UserContext';

const ReviewForm = () => {
    const {_id, name, price} = useLoaderData();
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleReviewForm = event => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.name.value;
        const image = form.image.value;
        const email = user?.email || 'unregistered';
        const price = form.price.value;
        const message = form.message.value;

        const review = {
            reviewId: _id,
            reviewerName: fullName,
            title: name,
            image,
            email,
            price,
            message
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                form.reset();
                navigate('/reviews')
            }
        })
        .catch(err => console.error(err))
    }
    
    return (
        <div>
            <form onSubmit={handleReviewForm} className='text-center'>
            <h2 className='text-3xl font-bold my-5'>{name}</h2>
            <div>
                <input name='name' type="text" placeholder="Your name" className="input input-bordered w-full max-w-xs md:mr-1 mb-1" required/>
                <input name='image' type="text" placeholder="Your Image URL" className="input input-bordered w-full max-w-xs" required/>
            </div>
            <div className='my-1'>
                <input name='email' defaultValue={user?.email} type="text" placeholder="Email" className="input input-bordered w-full max-w-xs  md:mr-1 mb-1" readOnly/>
                <input name='price' type="text" defaultValue={`$${price}`} className="input input-bordered w-full max-w-xs" readOnly/>
            </div>
            <div>
                <textarea name='message' className="textarea textarea-bordered w-full md:max-w-xl max-w-xs text-base" placeholder="Please write down your review here"></textarea>
            </div>
            <input type='submit' className='btn btn-primary mt-3' value='Submit'  />
        </form>
        </div>
    );
};

export default ReviewForm;