import React from 'react';
import { useLoaderData } from 'react-router';

const DetailsFood = () => {
    const {_id, name, img, details, price} = useLoaderData();
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default DetailsFood;