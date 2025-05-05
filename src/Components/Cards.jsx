import React from 'react';
import { FaStar } from 'react-icons/fa';
import { RiDownloadLine } from 'react-icons/ri';

const Cards = ({singleData}) => {
    console.log(singleData);
    return (
        <div className='flex flex-col items-center text-center p-2 bg-base-200 rounded-sm'>
        {/* Apps Icon */}
        <img className='w-12 h-12 object-cover rounded-lg' src={singleData.banner} alt="" />
        <div className='mt-2 '>
            <h4 className='font-semibold'>{singleData.name}</h4>
            <div className=''>
                <p className='flex items-center'><RiDownloadLine />{singleData.downloads}</p>
                <p className='flex items-center'><FaStar color='orange'width={10}/>{singleData.ratings}</p>
            </div>
        </div>
        </div>
    );
};

export default Cards;