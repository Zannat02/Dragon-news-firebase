import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {

    return (
        <div className='space-y-5'>
            <img className="w-full h-[220px] sm:h-[280px] md:h-[350px] object-cover rounded-md" src={news?.image_url} alt="" />

            <h2 className='text-xl md:text-2xl font-bold'>{news.title}</h2>
            <p className='text-sm md:text-base'>{news.details}</p>

            <Link className='btn btn-secondary' to={`/category/${news.category_id}`}>Back to category</Link>
        </div>
    );
};

export default NewsDetailsCard;