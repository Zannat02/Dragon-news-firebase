import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import RightAside from '../components/homelayout/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';
import { FaEllipsisV, FaTimes } from 'react-icons/fa';

const NewsDetails = () => {

    const data = useLoaderData();
    const { id } = useParams();
    const [news, setNews] = useState({});
    const [showRightInfo, setShowRightInfo] = useState(false);

    useEffect(() => {

        const newsDetails = data.find((singleNews) => singleNews.id == id);

        setNews(newsDetails);
    }, [data, id]);

    return (
        <div>
            <header className='py-4'>
                <Header></Header>
                <nav className='w-11/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
            </header>

            {/* মোবাইল/ট্যাবলেটে RightAside দেখানোর আইকন */}
            <div className='w-11/12 mx-auto flex justify-end lg:hidden my-2'>
                <button
                    onClick={() => setShowRightInfo(true)}
                    className='btn btn-sm btn-ghost btn-circle'
                >
                    <FaEllipsisV size={18} />
                </button>
            </div>

            <main className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 py-5 lg:py-10'>
                <section className="col-span-1 lg:col-span-9">
                    <h2 className="font-bold mb-5 text-lg md:text-xl">News Details</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>

                {/* Desktop এ দেখাবে, মোবাইল/ট্যাবলেটে হাইড */}
                <aside className="hidden lg:block lg:col-span-3">
                    <RightAside></RightAside>
                </aside>
            </main>

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

export default NewsDetails;