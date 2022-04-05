import React from 'react';
import './ReviewCart.css';

const reviewCart = ({ cartData }) => {
    const { name, rating, comment, picture } = cartData;
    return (
        <div className='bg-slate-100 m-6 p-6 rounded-lg shadow-xl'>
            <div className='review-cart'>
                <img src={picture} alt="" />
                <h2 className='m-5 text-2xl'> <span className='font-bold'>Name: </span>{name}</h2>
            </div>
            <h6 className='m-5 text-xl'><span className='font-bold'>Rating: </span> {rating}</h6>
            <p className='text-base'>{comment}</p>
        </div>
    );
};

export default reviewCart;