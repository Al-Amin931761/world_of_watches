import React from 'react';

const reviewCart = ({ cartData }) => {
    const { name, rating, comment } = cartData;
    return (
        <div className='bg-gray-200 m-6 p-6 rounded-lg shadow-xl'>
            <h2 className='m-5 text-xl'> <span className='font-bold'>Name: </span>{name}</h2>
            <h6 className='m-5 text-base'><span className='font-bold text-sm'>Rating: </span> {rating}</h6>
            <p className='text-xs'>{comment}</p>
        </div>
    );
};

export default reviewCart;