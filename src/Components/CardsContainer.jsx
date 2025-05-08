import React, { useEffect, useState } from 'react';
import Cards from './cards';

const CardsContainer = ({datas, category}) => {

    const [data, setData] = useState([])

    useEffect(()=>{
        const filteredData = datas.filter(data => data.category_id===category.id);
        setData(filteredData);
        if(category.id === 1){
            const filteredData = [...datas].sort((a, b) => b.ratings - a.ratings).slice(0,4);
            setData(filteredData);
        }
    }, [datas, category.id]);
    
    return (
        <div>
            <div className='bg-yellow-50 rounded-lg p-2 shadow-sm'>
                <h1 className='font-semibold text-lg lg:text-3xl lg:mb-5 mb-2 text-primary'>{category.name}</h1>
                {/* apps Container */}
                <div className='grid grid-cols-4 gap-1 md:gap-4 text-xs'>
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