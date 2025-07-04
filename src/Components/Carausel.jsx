import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCard from './SwiperCard';

const Carausel = ({datas}) => {
    const [sorted, setSorted] = useState([]);
    useEffect(()=>{
        const sortedDatas = [...datas].sort((a,b)=> b.releasedYear-a.releasedYear).slice(0, 4);
        setSorted(sortedDatas);
    }, [datas])
    return (
       <div>
        <h1 className='font-semibold lg:font-bold text-lg lg:text-3xl mb-4 text-primary'>Newly Launched Apps</h1>
         <Swiper navigation pagination={{clickable:true}} modules={[Navigation, Pagination, Autoplay]} slidesPerView={1} spaceBetween={50} loop={true} autoplay={{delay: 2000}} className='h-[30vh] md:h-[40vh] lg:h-[70vh]'>
            
            {
                sorted.map(data => <SwiperSlide><SwiperCard data={data}></SwiperCard></SwiperSlide>)
            }
        </Swiper>
       </div>
    );
};

export default Carausel;