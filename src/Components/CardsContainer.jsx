import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Cards from './cards';

const CardsContainer = ({category}) => {
    const [data, setData] = useState([])
    const datas = useLoaderData();
    useEffect(()=>{
        const filteredData = datas.filter(data => data.category_id===category.id);
        setData(filteredData);
        if(category.id === 1){
            console.log("yess");
            const filteredData = datas.sort((a, b) => b.ratings - a.ratings).slice(0,4);
            setData(filteredData);
        }
    }, [datas, category.id]);
    
    return (
        <div>
            <div className='rounded-lg p-2 shadow-sm'>
                <h1 className='font-semibold text-lg mb-2 text-primary'>{category.name}</h1>
                {/* apps Container */}
                <div className='grid grid-cols-4 gap-1 text-xs'>
                    {/* apps */}
                    {
                    data.map(singleData=><Cards key={singleData.id} singleData={singleData}></Cards>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CardsContainer;