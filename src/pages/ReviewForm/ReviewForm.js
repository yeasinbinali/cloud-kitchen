import React from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';

const ReviewForm = () => {
    const {_id, name, price} = useLoaderData();
    
    return (
        <form className='text-center'>
            <h2 className='text-3xl font-bold my-5'>{name}</h2>
            <div>
                <input type="text" placeholder="Your name" className="input input-bordered w-full max-w-xs md:mr-1 mb-1" required/>
                <input type="text" placeholder="Your Image URL" className="input input-bordered w-full max-w-xs" required/>
            </div>
            <div className='my-1'>
                <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs  md:mr-1 mb-1" />
                <input type="text" defaultValue={`$${price}`} className="input input-bordered w-full max-w-xs" readOnly/>
            </div>
            <div>
                <textarea className="textarea textarea-bordered w-full md:max-w-xl max-w-xs text-base" placeholder="Please write down your review here"></textarea>
            </div>
            <Link><button className="btn btn-primary mt-3">Submit</button></Link>
        </form>
    );
};

export default ReviewForm;