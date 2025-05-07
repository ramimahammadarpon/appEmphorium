import React from 'react';
import userImg from '../assets/user.png'
import { FaStar } from 'react-icons/fa';

const Review = ({review}) => {
    console.log(review);
    return (
        <div className='mt-5'>
        <div className='flex items-center gap-2'>
            <img className='w-7' src={userImg} alt="" />
            <h4 className='font-semibold text-lg'>{review.user}</h4>
        </div>
        <p className='flex pl-9'>{[...Array(review.rating)].map((_, index)=> <FaStar size={12} color='orange' key={index}></FaStar>)}</p>
        <p className='text-slate-600 ml-9'>{review.comment}</p>
        {/* <p>{singleData.reviews[0].}</p> */}
    </div>
    );
};

export default Review;