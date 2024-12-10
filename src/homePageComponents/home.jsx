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
    const [ingredients, setIngredients] = useState([]);
    const [meals, setMeals] = useState([]);
    const [filteredMeals, setFilteredMeals] = useState([]);  // Arama sonucu filtrelenmiş yemekler
    const [searchQuery, setSearchQuery] = useState("");  // Kullanıcının girdiği arama terimi


    // Kullanıcının arama terimini güncelleyen fonksiyon
    const handleSearchInputChange = (a) => {
        setSearchQuery(a.target.value);   //kullanıcının girdiği değer
        setFilteredMeals('');   //Eski filtrelenmiş öğeler sıfırlanır (boş bir değer atanır).
    };
    //clear butonu
    const handleClear = () => {
        setSearchQuery('')   //kullanıcının girdiği değeri sıfırla
        setFilteredMeals('')  //filtrelenmiş ögeleri sıfırla
    }

    const handleSearch = () => {
        // Eğer arama terimi boşsa, tüm yemekleri göster
        if (!searchQuery) {
            setFilteredMeals('');
            return;
        }

        // Arama terimi ile eşleşen yemekleri filtrele
        const filtered = meals.filter((meal) => {
            const mealName = meal.Name.toLowerCase(); // Sadece yemek ismine odaklan
            const query = searchQuery.toLowerCase();

            // Sadece yemek ismi ile arama yapıyoruz
            return mealName.includes(query);
        });

        // Filtrelenmiş yemekleri state'e aktar
        setFilteredMeals(filtered);
    };


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
                setMeals(veri)
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
                setIngredients(veri)
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

    const urunDetay = (secilenUrunId) => {
        navigate(`/ingredientDetail/${secilenUrunId}`)
    }

    return (
        <div className="">
            <Feature />
            <div className="title">
                {/* s */}
                <div className='search'>
                    <input
                        className="inputContainer"
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                        placeholder="Search meals"
                    />
                    <button className="search-button" onClick={handleSearch}>Search</button>
                    <button className="search-button" onClick={handleClear}>Clear</button>
                </div>

                {/* Ekranda filtrelenmiş yemekleri listele */}


                <div className="counters">
                    <span>Total Meals: {meals.length}</span>
                </div>
                {
                    (
                        <div className="meal-list">
                            {filteredMeals.length > 0 ? (
                                filteredMeals.map((meal) => (
                                    <div key={meal.id} className="meal-card">
                                        <img src={meal.ImageUrl} alt={meal.Name} />
                                        <h3>{meal.Name}</h3>
                                        <p>{meal.Instructions}</p>
                                        {/* Ingredients listesine gerek yok */}
                                    </div>
                                ))
                            ) : (   //filteredMeals boş ise
                                (
                                    <div>
                                        <h4>Latest Meals</h4>

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
                                                <PopularIngredients img={populars.IngredientImage} ingredientName={populars.Name} butonClick={() => urunDetay(populars.id)} />
                                            ))}
                                        </div>
                                        <div className='RandomMealsTitle'>
                                            <RandomMealsTitle />
                                        </div>
                                        <div className="randomMeals">
                                            {randomMeals.map(randomMeals => (
                                                <RandomMeals image={randomMeals.ImageUrl} name={randomMeals.Name} buttonclick={() => mealButtonClick(randomMeals.id)} />
                                            ))}
                                        </div>
                                        <div className="RandomMealsTitle">
                                            <RandomIngredientsTitle />
                                        </div>

                                        <div className="popularIngredient mealContainer">
                                            {randomIngredients.map(randoms => (
                                                <RandomIngredients image={randoms.IngredientImage} name={randoms.Name} butonClick={() => urunDetay(randoms.id)}/>
                                            ))}
                                        </div>
                                    </div>
                                )
                            )}
                        </div>)


                }

                {/* k */}


                <Footer />
            </div>
        </div>
    );
}
export default home;                                