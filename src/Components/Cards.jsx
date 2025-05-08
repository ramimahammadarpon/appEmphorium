import React from 'react';
import { FaStar } from 'react-icons/fa';
import { RiDownloadLine } from 'react-icons/ri';
import { Link } from 'react-router';

const Cards = ({singleData}) => {
    return (
        <Link to={`/app-details/${singleData.id}`} className='flex flex-col items-center lg:items-start lg:text-left text-center py-1 lg:p-2 bg-base-200 rounded-sm lg:rounded-lg'>
        {/* Apps Icon */}
        <img className='w-18 h-12 md:w-full md:h-40 lg:h-60 object-cover rounded-lg' src={singleData.banner} alt="" />
        <div className='mt-2 '>
            <h4 className='font-semibold lg:font-bold lg:text-xl text-primary lg:pl-3'>{singleData.name}</h4>
            <div className='lg:pl-3'>
                <p className='flex items-center lg:text-lg lg:gap-3'><span className='hidden lg:inline-block'>Downloads: </span><RiDownloadLine />{singleData.downloads}</p>
                <p className='flex items-center lg:text-lg lg:gap-3'><span className='hidden lg:inline-block'>Ratings:</span> <FaStar color='orange'width={10}/>{singleData.ratings}</p>
            </div>
        </div>
        </Link>
    );
};

export default Cards;