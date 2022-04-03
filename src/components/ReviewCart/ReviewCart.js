import React from 'react';

const reviewCart = ({ cartData }) => {
    const { name, rating, comment } = cartData;
    return (
        <div className='bg-gray-200 m-6 p-6 rounded-lg shadow-xl'>
            <h2>Name: {name}</h2>
            <h6>Rating: {rating}</h6>
            <p>{comment}</p>
        </div>
    );
};

export default reviewCart;