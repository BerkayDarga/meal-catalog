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
import { useNavigate, useParams } from 'react-router-dom';



function home() {

    const [latestMeals, setLatestMeals] = useState([]);
    const [popularIngredients, setPopularIngredients] = useState([]);
    const [randomMeals, setRandomMeals] = useState([]);
    const [randomIngredients, setRandomIngredients] = useState([]);

    const [meals, setMeals] = useState([]);
    const { idMeal } = useParams();
    const navigation = useNavigate();
    const productDetailPage = (tt) => {
        navigation(`/mealDetail/${tt}`)
    }

    useEffect(() => {
        fetch(`http://localhost:4000/meals?id=${idMeal}`)
            .then(aa => aa.json())
            .then(mealData => setMeals(mealData))
            .catch(error => console.error(error))
    }, []);

    useEffect(() => {   //useEffect bileşen ilk render edildiğinde bir kez çalışır
        fetch("http://localhost:4000/meals?latestMeals=true")
            .then(response => response.json())
            .then(data => setLatestMeals(data))
            .catch(error => console.log(error))
    }, []);

    useEffect(() => {
        fetch("http://localhost:4000/Ingredients?popualarIngredients=true")
            .then(response => response.json())
            .then(datas => {
                setPopularIngredients(datas)
            })
            .catch(error => console.log(error))
    }, []);

    // random meals
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

    //random ingredients

    useEffect(() => {
        fetch("http://localhost:4000/Ingredients")
            .then(response => response.json())
            .then(veri => {
                setRandomIngredients(veri)
                const allMeals = veri;
                const selectedIngredients = [];
                const allMealsCopy = [...allMeals];

                for (let i = 0; i < 4; i++) {
                    if (allMealsCopy.length === 0) break; // Eğer seçim yapılacak yemek kalmadıysa döngüden çık

                    // Rastgele bir index seç
                    const randomIndex = Math.floor(Math.random() * allMealsCopy.length);

                    // Seçilen öğeyi al ve diziden çıkar
                    const selectedIngredient = allMealsCopy[randomIndex];
                    selectedIngredients.push(selectedIngredient);
                    allMealsCopy.splice(randomIndex, 1); // Seçilen öğeyi diziden kaldır
                }
                setRandomIngredients(selectedIngredients);

            })
            .catch(error => console.log(error))
    }, []);

    const navigate = useNavigate();

    const mealButtonClick = (idclickmeal) => {
        navigate(`/mealDetail/${idclickmeal}`);
    }

    const urunEklemeClick = () => {
        navigate(`/urunEkleme`)
    }

    return (
        <div className="">
            <Feature />
            <div className="mealContainer">
                {latestMeals.map(meal => (
                    <Sidebar image={meal.ImageUrl} name={meal.Name} buttonclick={() => mealButtonClick(meal.id)} />
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
            <Footer />
        </div>
    );
}
export default home;