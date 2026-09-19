import React, { useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import RightAside from '../components/homelayout/RightAside';
import { FaEllipsisV, FaTimes, FaBriefcase, FaLaptopCode, FaHeartbeat, FaFutbol, FaFilm, FaFlask, FaLandmark } from 'react-icons/fa';

const categories = [
    { name: "Business", icon: <FaBriefcase /> },
    { name: "Technology", icon: <FaLaptopCode /> },
    { name: "Health", icon: <FaHeartbeat /> },
    { name: "Sports", icon: <FaFutbol /> },
    { name: "Entertainment", icon: <FaFilm /> },
    { name: "Science", icon: <FaFlask /> },
    { name: "Politics", icon: <FaLandmark /> },
];

const stats = [
    { label: "Daily Readers", value: "1M+" },
    { label: "News Published", value: "500+" },
    { label: "Categories Covered", value: "10+" },
    { label: "Years of Trust", value: "5+" },
];

const About = () => {
    const [showRightInfo, setShowRightInfo] = useState(false);

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
                <section className="col-span-1 lg:col-span-9 space-y-8 md:space-y-12">

                    {/* Intro / Mission */}
                    <div>
                        <h2 className='text-xl md:text-3xl font-bold mb-3 md:mb-4'>About Dragon News</h2>
                        <p className='text-sm md:text-base text-accent leading-relaxed'>
                            Dragon News is a digital news platform committed to bringing you accurate,
                            timely, and unbiased news from Bangladesh and around the world. Guided by
                            our motto "Journalism Without Fear or Favour," we strive to keep our readers
                            informed on the stories that matter most — from business and technology to
                            health, sports, entertainment, science, and politics.
                        </p>
                        <p className='text-sm md:text-base text-accent leading-relaxed mt-3'>
                            Our mission is simple: deliver credible journalism that empowers people to
                            make informed decisions, and to be a trusted voice for our community in an
                            age of information overload.
                        </p>
                    </div>

                    {/* Categories We Cover */}
                    <div>
                        <h3 className='text-lg md:text-2xl font-bold mb-4 md:mb-6'>What We Cover</h3>
                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4'>
                            {categories.map((cat, index) => (
                                <div
                                    key={index}
                                    className='flex flex-col items-center justify-center gap-2 bg-base-200 p-4 rounded-lg hover:bg-base-300 transition'
                                >
                                    <span className='text-secondary text-xl md:text-2xl'>{cat.icon}</span>
                                    <span className='text-xs md:text-sm font-semibold text-center'>{cat.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stats */}
                    <div>
                        <h3 className='text-lg md:text-2xl font-bold mb-4 md:mb-6'>Dragon News in Numbers</h3>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5'>
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className='bg-base-200 p-4 md:p-6 rounded-lg text-center'
                                >
                                    <p className='text-xl md:text-3xl font-bold text-secondary'>{stat.value}</p>
                                    <p className='text-xs md:text-sm text-accent mt-1'>{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

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

export default About;