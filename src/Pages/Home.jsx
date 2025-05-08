import CardsContainer from '../Components/CardsContainer';
import Carausel from '../Components/Carausel';
import { useLoaderData } from 'react-router';
import { use, useEffect } from 'react';



const sectionCategories = fetch('/categories.json').then(res => res.json());

const Home = () => {
    const categoriesData = use(sectionCategories); 
    const datas = useLoaderData();
    useEffect(()=>{
        document.title = "App Emphorium | Home"
    },[])

    return (
        <div>
           <section>
            <Carausel datas={datas}></Carausel>
           </section>
           <section className='space-y-3 my-10'>
            {
                categoriesData.map(category => <CardsContainer key={category.id} datas={datas} category={category}></CardsContainer>)
            }
           </section>
        </div>
    );
};

export default Home;