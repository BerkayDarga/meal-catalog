import { useEffect, useState } from 'react';
import Feature from '../homePageComponents/feature'
import Footer from '../homePageComponents/footer'
import Sidebar from '../homePageComponents/sidebar'

function home() {

    const [meals, setMeals] = useState([]);

    useEffect(() => {   //useEffect bileşen ilk render edildiğinde bir kez çalışır
        fetch("http://localhost:4000/latestMeals")
            .then(response => response.json())
            .then(data => setMeals(data))
            .catch(error => console.log(error))
    }, []);


    return (
        <div className="">
            <Feature />
            <div className="mealContainer">
                {meals.map(meal => (
                    <Sidebar image={meal.ImageUrl} name={meal.Name} />
                ))}

            </div>

            <Footer />
        </div>
    );
}
export default home;