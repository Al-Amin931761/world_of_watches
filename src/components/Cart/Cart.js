import React from 'react';

const Cart = ({ data }) => {
    return (
        <div className='bg-gray-200 m-6 p-6 rounded-lg shadow-xl'>
            <h2>Name: {data.name}</h2>
            <h6>Rating: {data.rating}</h6>
            <p>{data.comment}</p>
        </div>
    );
};

export default Cart;