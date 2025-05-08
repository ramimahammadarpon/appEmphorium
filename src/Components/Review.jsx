import React from 'react';
import userImg from '../assets/user.png'
import { FaStar } from 'react-icons/fa';

const Review = ({user, review}) => {
    console.log(review);
    console.log(user);
    // console.log(user.photoURL);
    return (
        <div className='mt-5'>
        <div className='flex items-center gap-2'>
           {user?  <img className='w-7 rounded-full aspect-square object-cover' src={user.photoURL} alt="" /> :  <img className='w-7 rounded-full aspect-square object-cover' src={userImg} alt="" />}
            <h4 className='font-semibold text-xl'>{review.user}</h4>
        </div>
        <p className='hidden lg:flex pl-9'>{[...Array(review.rating)].map((_, index)=> <FaStar size={20} color='orange' key={index}></FaStar>)}</p>
        <p className='flex lg:hidden pl-9'>{[...Array(review.rating)].map((_, index)=> <FaStar size={12} color='orange' key={index}></FaStar>)}</p>
        <p className='text-slate-600 ml-9 lg:text-lg'>{review.comment}</p>
        {/* <p>{singleData.reviews[0].}</p> */}
    </div>
    );
};

export default Review;