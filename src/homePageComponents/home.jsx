import { useEffect, useState } from 'react';
import Feature from '../homePageComponents/feature'
import Footer from '../homePageComponents/footer'
import Sidebar from '../homePageComponents/sidebar'
import PopularIngredients from './popularIngredients';
import PopularIngredientsTitle from './popularIngredientsTitle';
import RandomMeals from './randomMeals'
import RandomIngredients from './randomIngredients'
import RandomMealsTitle from './randomMealsTitle'
import RandomIngredientsTitle from './randomIngredientsTitle';
import Wrapper from './wrapper'



function home() {

    const [meals, setMeals] = useState([]);
    const [popularIngredients, setPopularIngredients] = useState([]);
    const [randomMeals, setRandomMeals] = useState([]);
    const [randomIngredients, setRandomIngredients] = useState([]);

    useEffect(() => {   //useEffect bileşen ilk render edildiğinde bir kez çalışır
        fetch("http://localhost:4000/latestMeals")
            .then(response => response.json())
            .then(data => setMeals(data))
            .catch(error => console.log(error))
    }, []);

    useEffect(() => {
        fetch("http://localhost:4000/popualarIngredients")
            .then(response => response.json())
            .then(datas => {
                setPopularIngredients(datas)
            })
            .catch(error => console.log(error))
    }, []);

    useEffect(() => {
        fetch("http://localhost:4000/meals")
            .then(response => response.json())
            .then(veri => {
                setRandomMeals(veri)
                const allMeals = veri;
                const selectedMeals = [];
                const allMealsCopy = [...allMeals];

                for (let i = 0; i < 8; i++) {
                    if (allMealsCopy.length === 0) break; // Eğer seçim yapılacak yemek kalmadıysa döngüden çık

                    // Rastgele bir index seç
                    const randomIndex = Math.floor(Math.random() * allMealsCopy.length);

                    // Seçilen öğeyi al ve diziden çıkar
                    const selectedMeal = allMealsCopy[randomIndex];
                    selectedMeals.push(selectedMeal);
                    allMealsCopy.splice(randomIndex, 1); // Seçilen öğeyi diziden kaldır
                }
                setRandomMeals(selectedMeals);

            })
            .catch(error => console.log(error))
    }, []);

    useEffect(() => {
        fetch("http://localhost:4000/Ingredients")
            .then(response => response.json())
            .then(dataRandom => setRandomIngredients(dataRandom))
            .catch(error => console.console.log(error))
    })

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
            <div className='RandomMealsTitle'>
                <RandomMealsTitle />
            </div>
            <div className="randomMeals">
                {randomMeals.map(randomMeals => (
                    <RandomMeals image={randomMeals.ImageUrl} name={randomMeals.Name} />
                ))}
            </div>
            <div className="RandomMealsTitle">
                <RandomIngredientsTitle />

            </div>

            <div className="popularIngredient mealContainer">
                {randomIngredients.map(randoms => (
                    <RandomIngredients image={randoms.IngredientImage} name={randoms.Name} />
                ))}
            </div>
            <div>
            </div>
            <Wrapper />
            <Footer />
        </div>
    );
}
export default home;