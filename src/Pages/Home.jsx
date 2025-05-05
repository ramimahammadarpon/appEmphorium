import React, { use } from 'react';
import CardsContainer from '../Components/CardsContainer';



const sectionCategories = fetch('/categories.json').then(res => res.json());

const Home = () => {
    const categoriesData = use(sectionCategories); 
    console.log(categoriesData);

    return (
        <div>
           <section>This is carosel</section>
           <section className='space-y-3 my-10'>
            {
                categoriesData.map(category => <CardsContainer key={category.id} category={category}></CardsContainer>)
            }
           </section>
        </div>
    );
};

export default Home;