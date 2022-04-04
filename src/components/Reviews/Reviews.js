import React from 'react';
import useReviewData from '../../hooks/useReviewData';
import ReviewCart from '../ReviewCart/ReviewCart';

const Reviews = () => {
    const [reviewData, setReviewData] = useReviewData([]);
    return (
        <div>
            <h1 className='text-3xl font-bold'>What our customers say!</h1>
            <div className='grid grid-cols-3'>
                {
                    reviewData.map(cartData => <ReviewCart key={cartData.id} cartData={cartData}></ReviewCart>)
                }
            </div>
        </div>
    );
};

export default Reviews;