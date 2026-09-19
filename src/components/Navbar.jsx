import React from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png';
import { AuthContext } from '../provider/AuthProvider';
import { use } from 'react';

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("You logged out successfully");
      }).catch((error) => {
        console.log(error);
      });
  };

  const navLinkStyle = ({ isActive }) =>
    `px-3 py-1.5 rounded-md transition-colors duration-200 ${
      isActive ? 'bg-secondary text-base-100 font-semibold' : 'hover:bg-base-200'
    }`;

  return (
    <div className='flex justify-between items-center gap-2'>
   
      <div className='hidden md:block text-sm truncate max-w-[150px]'>
        {user && user.email}
      </div>

      <div className="nav flex gap-1 md:gap-2 text-accent text-sm md:text-base">
        <NavLink to="/" className={navLinkStyle}>Home</NavLink>
        <NavLink to="/about" className={navLinkStyle}>About</NavLink>
        <NavLink to="/career" className={navLinkStyle}>Career</NavLink>
      </div>

      <div className="login-btn flex items-center gap-2 md:gap-5">
        <img
          className="w-8 h-8 md:w-12 md:h-12 rounded-full object-cover"
          src={`${user ? user.photoURL : userIcon}`}
          alt=""
        />
        {
          user
            ? <button onClick={handleLogOut} className='btn btn-primary btn-sm md:btn-md px-4 md:px-10'>LogOut</button>
            : <Link to="/auth/login" className='btn btn-primary btn-sm md:btn-md px-4 md:px-10'>Login</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;