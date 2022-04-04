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
            <div className='grid grid-cols-2'>
                <div className='mx-5 my-28'>
                    <h2 className='text-6xl font-bold text-zinc-700'>Your next watch</h2>
                    <h2 className='text-6xl font-bold text-blue-700'>Your best watch</h2>
                    <p className='m-5 text-xl font-medium'> With your life moving faster than ever, keeping track of time is essential. Sure, you can do it with your phone, but why not do it in style, with one of the world’s best luxury watches on your wrist?</p>
                    <button className='text-2xl hover:bg-amber-500 font-semibold bg-emerald-600/90 p-3 text-white rounded'>Live demo</button>
                </div>

                <div className='picture m-5'>
                    <img src="https://content.rolex.com/dam/watches/family-pages/yacht-master/roller-design-ym-ii/professional-watches-yacht-master-ii_m116681-0002_1909jva_001.jpg?imwidth=2880" alt="" />
                </div>
            </div>

            <div className='mt-8'>
                <h2 className='text-5xl font-medium m-5'>Customer Reviews ({sliceData.length})</h2>
                <div className='grid grid-cols-3'>
                    {
                        sliceData.map(data => <Cart key={data.id} data={data}></Cart>)
                    }
                </div>
                <div className='m-10'>
                    <Link className='bg-amber-500 hover:bg-green-500 p-3 rounded font-bold text-xl' to="/reviews">See All Reviews</Link>
                </div>
            </div>
        </section>
    );
};

export default Home;