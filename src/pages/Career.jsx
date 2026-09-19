import React, { useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import RightAside from '../components/homelayout/RightAside';
import { FaEllipsisV, FaTimes, FaMapMarkerAlt, FaClock, FaBriefcase } from 'react-icons/fa';

const openPositions = [
    {
        title: "Senior Journalist",
        department: "Editorial",
        location: "Dhaka, Bangladesh",
        type: "Full-time",
    },
    {
        title: "Content Writer (Business Desk)",
        department: "Editorial",
        location: "Dhaka, Bangladesh",
        type: "Full-time",
    },
    {
        title: "Photojournalist",
        department: "Media",
        location: "Chittagong, Bangladesh",
        type: "Full-time",
    },
    {
        title: "Frontend Developer",
        department: "Technology",
        location: "Remote",
        type: "Full-time",
    },
    {
        title: "Social Media Manager",
        department: "Marketing",
        location: "Dhaka, Bangladesh",
        type: "Part-time",
    },
    {
        title: "Video Editor",
        department: "Media",
        location: "Dhaka, Bangladesh",
        type: "Contract",
    },
];

const perks = [
    "Competitive Salary",
    "Health Insurance",
    "Flexible Working Hours",
    "Professional Development",
    "Festival Bonuses",
    "Friendly Work Environment",
];

const Career = () => {
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

                    {/* Intro */}
                    <div>
                        <h2 className='text-xl md:text-3xl font-bold mb-3 md:mb-4'>Careers at Dragon News</h2>
                        <p className='text-sm md:text-base text-accent leading-relaxed'>
                            Join a team that's passionate about honest journalism and meaningful storytelling.
                            At Dragon News, we believe great journalism starts with great people. We're always
                            looking for talented, driven individuals to help us deliver news without fear or favour.
                        </p>
                    </div>

                    {/* Why Work With Us */}
                    <div>
                        <h3 className='text-lg md:text-2xl font-bold mb-4 md:mb-6'>Why Work With Us</h3>
                        <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4'>
                            {perks.map((perk, index) => (
                                <div
                                    key={index}
                                    className='bg-base-200 p-3 md:p-4 rounded-lg text-center'
                                >
                                    <p className='text-xs md:text-sm font-semibold'>{perk}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Open Positions */}
                    <div>
                        <h3 className='text-lg md:text-2xl font-bold mb-4 md:mb-6'>Open Positions</h3>
                        <div className='space-y-4'>
                            {openPositions.map((job, index) => (
                                <div
                                    key={index}
                                    className='bg-base-200 p-4 md:p-5 rounded-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3'
                                >
                                    <div>
                                        <h4 className='font-bold text-sm md:text-base'>{job.title}</h4>
                                        <p className='text-xs md:text-sm text-secondary font-semibold'>{job.department}</p>
                                        <div className='flex flex-wrap gap-3 mt-2 text-xs md:text-sm text-accent'>
                                            <span className='flex items-center gap-1'>
                                                <FaMapMarkerAlt /> {job.location}
                                            </span>
                                            <span className='flex items-center gap-1'>
                                                <FaClock /> {job.type}
                                            </span>
                                        </div>
                                    </div>
                                    <button className='btn btn-sm md:btn-md btn-primary w-full sm:w-auto shrink-0'>
                                        Apply Now
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className='bg-base-200 p-5 md:p-8 rounded-lg text-center'>
                        <FaBriefcase className='text-secondary text-2xl md:text-3xl mx-auto mb-3' />
                        <h4 className='font-bold text-sm md:text-lg mb-2'>Don't see a role that fits?</h4>
                        <p className='text-xs md:text-sm text-accent mb-4'>
                            We're always interested in meeting talented people. Send us your resume anyway.
                        </p>
                        <button className='btn btn-secondary btn-sm md:btn-md'>Send Your Resume</button>
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

export default Career;