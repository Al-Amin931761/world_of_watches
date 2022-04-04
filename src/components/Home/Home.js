import React from 'react';
import { Link } from 'react-router-dom';
import useReviewData from '../../hooks/useReviewData';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const [reviewData, setReviewData] = useReviewData([]);

    const sliceData = reviewData.slice(0, 3);
    return (
        <section>
            <h1 className='text-5xl'>World of Watches</h1>
            <div className='grid grid-cols-2'>
                <div className='mt-52'>
                    <h2 className='text-4xl font-bold text-zinc-700'>Your next watch</h2>
                    <h2 className='text-4xl font-bold text-blue-700'>Your best watch</h2>
                </div>

                <div className='picture'>
                    <img src="https://content.rolex.com/dam/watches/family-pages/yacht-master/roller-design-ym-ii/professional-watches-yacht-master-ii_m116681-0002_1909jva_001.jpg?imwidth=2880" alt="" />
                </div>
            </div>

            <div className='mt-8'>
                <h2>Customer Reviews ({sliceData.length})</h2>
                <div className='grid grid-cols-3'>
                    {
                        sliceData.map(data => <Cart key={data.id} data={data}></Cart>)
                    }
                </div>
                <Link className='bg-amber-500 hover:bg-green-500 p-3 rounded-md font-bold' to="/reviews">See All Reviews</Link>
            </div>
        </section>
    );
};

export default Home;