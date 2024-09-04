import { useEffect, useState } from 'react';
import Feature from '../homePageComponents/feature'
import Footer from '../homePageComponents/footer'
import Sidebar from '../homePageComponents/sidebar'
import PopularIngredients from './popularIngredients';
import PopularIngredientsTitle from './popularIngredientsTitle';
import RandomMeals from './randomMeals'



function home() {

    const [meals, setMeals] = useState([]);
    const [popularIngredients, setPopularIngredients] = useState([]);

    useEffect(() => {   //useEffect bileşen ilk render edildiğinde bir kez çalışır
        fetch("http://localhost:4000/latestMeals")
            .then(response => response.json())
            .then(data => setMeals(data))
            .catch(error => console.log(error))
    }, []);

    useEffect(() => {
        fetch("http://localhost:4000/popualarIngredients")
            .then(response => response.json())
            .then(datas => setPopularIngredients(datas))
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
            <div className="">
                <PopularIngredientsTitle />
            </div>
            <div className="popularIngredient mealContainer">
                {popularIngredients.map(populars => (
                    <PopularIngredients img={populars.IngredientImage} ingredientName={populars.Name} />
                ))}
            </div>
            <div className="randomMeals">
                <RandomMeals  />
            </div>

            <Footer />
        </div>
    );
}
export default home;