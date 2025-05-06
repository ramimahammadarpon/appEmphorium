import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const HomeLayout = () => {
    return (
        <div className='min-h-screen text-[#001219]'>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='my-5 mx-5 lg:my-10 lg:mx-20'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;