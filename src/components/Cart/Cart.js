import React from 'react';
import './Cart.css';

const Cart = ({ data }) => {
    const { name, rating, comment, picture } = data;
    return (
        <div className='bg-gray-200 m-6 p-6 rounded-lg shadow-xl'>
            <div className='cart'>
                <img src={picture} alt="" />
                <h2 className='m-5 text-2xl'><span className='font-bold'>Name:</span> {name}</h2>
            </div>
            <h6 className='m-5 text-xl text-start '><span className='font-bold'>Rating: </span>{rating}</h6>
            <p className='text-base'>{comment}</p>

        </div>
    );
};

export default Cart;