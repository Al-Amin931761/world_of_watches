import React from 'react';
import useReviewData from '../../hooks/useReviewData';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const [reviewData, setReviewData] = useReviewData([]);

    const sliceData = reviewData.slice(0, 3);
    return (
        <section>
            <div className='grid grid-cols-2'>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nostrum architecto quis praesentium animi, officia velit aliquam odio maxime voluptatum aperiam numquam. Eius quo, necessitatibus repellendus quisquam et itaque, aut dicta aperiam nihil odio minima asperiores non tempora. Natus cum iure, ipsa recusandae magni nemo ad sunt libero pariatur, delectus maxime eaque iste numquam optio necessitatibus reiciendis ipsam reprehenderit? Odit maxime asperiores nostrum corrupti et ea eum, debitis expedita qui! Suscipit tempora, obcaecati quaerat porro id ex! Unde, recusandae magnam officia deleniti natus libero. Nihil dolore tenetur, vitae harum nam iste rem reprehenderit veniam nobis molestiae odit ullam. Eius, eum?
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
            </div>
        </section>
    );
};

export default Home;