import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-red-300 w-11/12 mx-auto '>
            <header className='w-11/12 mx-auto py-5'>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto py-5'>
                 <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;