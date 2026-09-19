import React, { useState } from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside';
import Loading from '../pages/Loading';
import { FaBars, FaEllipsisV, FaTimes } from 'react-icons/fa';

const HomeLayout = () => {
  const { state } = useNavigation();
  const [showCategories, setShowCategories] = useState(false);
  const [showRightInfo, setShowRightInfo] = useState(false);

  return (
    <div>
      <header>
        <Header></Header>

        <section className='w-11/12 mx-auto my-3'>
          <LatestNews></LatestNews>
        </section>

        {/* মোবাইল/ট্যাবলেটে দুইটা আইকন - lg এর নিচে দেখাবে */}
        <div className='w-11/12 mx-auto flex justify-between items-center lg:hidden my-2'>
          <button
            onClick={() => setShowCategories(true)}
            className='btn btn-sm btn-outline gap-2'
          >
            <FaBars /> Categories
          </button>

          <button
            onClick={() => setShowRightInfo(true)}
            className='btn btn-sm btn-ghost btn-circle'
          >
            <FaEllipsisV size={18} />
          </button>
        </div>

        <nav className='w-11/12 mx-auto my-3'>
          <Navbar></Navbar>
        </nav>
      </header>

      <main className='w-11/12 mx-auto my-3 grid grid-cols-1 lg:grid-cols-12 gap-5'>
        {/* Desktop এ দেখাবে, মোবাইল/ট্যাবলেটে হাইড */}
        <aside className='hidden lg:block lg:col-span-3 sticky top-0 h-fit'>
          <LeftAside></LeftAside>
        </aside>

        <section className='main col-span-1 lg:col-span-6'>
          {state === "loading" ? <Loading /> : <Outlet></Outlet>}
        </section>

        <aside className='hidden lg:block lg:col-span-3 sticky top-0 h-fit'>
          <RightAside></RightAside>
        </aside>
      </main>

      {/* Categories Drawer (Mobile/Tablet) */}
      {showCategories && (
        <div className='fixed inset-0 z-50 lg:hidden'>
          <div
            className='absolute inset-0 bg-black/50'
            onClick={() => setShowCategories(false)}
          ></div>
          <div className='absolute left-0 top-0 h-full w-4/5 max-w-xs bg-base-100 p-4 overflow-y-auto'>
            <button
              onClick={() => setShowCategories(false)}
              className='btn btn-sm btn-circle mb-4'
            >
              <FaTimes />
            </button>
            <LeftAside></LeftAside>
          </div>
        </div>
      )}

      {/* Right Info Drawer (Mobile/Tablet) */}
      {showRightInfo && (
        <div className='fixed inset-0 z-50 lg:hidden'>
          <div
            className='absolute inset-0 bg-black/50'
            onClick={() => setShowRightInfo(false)}
          ></div>
          <div className='absolute right-0 top-0 h-full w-4/5 max-w-xs bg-base-100 p-4 overflow-y-auto'>
            <button
              onClick={() => setShowRightInfo(false)}
              className='btn btn-sm btn-circle mb-4'
            >
              <FaTimes />
            </button>
            <RightAside></RightAside>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeLayout;