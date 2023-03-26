import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <hr className='mt-3'></hr>
            <Outlet></Outlet>
            <hr className='mt-10'></hr>
            <Footer></Footer>
        </div>
    );
};

export default Main;