import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // URL parametresi almak için kullanılır

function CountryFilters() {
    const [meals, setMeals] = useState([]);
    const [filteredMeals, setFilteredMeals] = useState([]);
    const location = useLocation(); // URL'yi almak için useLocation kullanılır
    const queryParams = new URLSearchParams(location.search); // URL parametrelerini almak

    const country = queryParams.get('country'); // URL'den 'country' parametresini alıyoruz

    // Meals verisini almak için useEffect
    useEffect(() => {
        fetch("http://localhost:4000/meals")
            .then(response => response.json())
            .then(data => {
                setMeals(data);
            })
            .catch(error => console.log(error));
    }, []);

    // Meals filtreleme işlemi
    useEffect(() => {
        if (country) {
            const filtered = meals.filter(meal => meal.country.toLowerCase() === country.toLowerCase());
            setFilteredMeals(filtered);
        }
    }, [meals, country]); // meals veya country değiştiğinde filtreleme yapılır

    return (
        <div className="meal-lista">
            <div className="mealListTitle">
                <h2 className=''>{country ? `${country.toUpperCase()} Meals` : 'All Meals'}</h2>
            </div>
            <div className="mealListContainer">
                {filteredMeals.length > 0 ? (
                    filteredMeals.map((meal) => (
                        <div key={meal.id} className="meal-cardx">
                            <img src={meal.ImageUrl} alt={meal.Name} />
                            <h3>{meal.Name}</h3>
                            <p>{meal.Instructions}</p>
                        </div>
                    ))
                ) : (
                    <p>No meals found for this country.</p>
                )}
            </div>
        </div>
    );
}

export default CountryFilters;
