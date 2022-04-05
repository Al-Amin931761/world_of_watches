import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <section>
            <h1 className='text-5xl font-bold bg-slate-400/25 p-5'>World of Watches</h1>
            <div className='m-5'>
                <nav className='header text-xl'>
                    <Link to="/home">Home</Link>
                    <Link to="/reviews">Reviews</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/about">About</Link>
                </nav>
            </div>
        </section>
    );
};

export default Header;