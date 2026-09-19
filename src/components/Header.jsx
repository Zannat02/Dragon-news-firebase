import React from 'react';
import logo from "../assets/logo.png"
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 mt-6 px-4'>
           <img className='w-[200px] sm:w-[280px] md:w-[350px] lg:w-[400px] max-w-full h-auto' src={logo} alt="" />
           <p className='text-accent text-sm md:text-base text-center'>Journalism Without Fear or Favour</p>
           
           <p className='font-semibold text-accent text-xs sm:text-sm md:text-base text-center'>
             {format(new Date(), "EEEE, MMMM d, yyyy")}
           </p>
        </div>
    );
};

export default Header;