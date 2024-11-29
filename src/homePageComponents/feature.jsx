// import { useState, useEffect } from 'react';
// import MealIcon from '../stillImages/meal-icon.png'
// function feature() {

//     const divStyle = {
//         color: "orange",
//         backgroundColor: "transparent"
//     }

//     const [yemekler, setYemekler] = useState([]);
//     const [ingredients, setIngredient] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:4000/meals')
//             .then(response => response.json())
//             .then(data => {
//                 setYemekler(data)
//             })
//             .catch(error => console.log(error))
//     }, [])

//     useEffect(() => {
//         fetch('http://localhost:4000/Ingredients')
//             .then(responseIngredient => responseIngredient.json())
//             .then(dataIngredient => {
//                 setIngredient(dataIngredient)
//             })
//             .catch(error => console.log(error))
//     })

//     return (
//         <>
//             <div className="feature">
//                 <div className="center">
//                     <img src={MealIcon} />
//                     <div className="content">
//                         <div className='title'>
//                             <h3>Welcome to TheMealDB</h3>
//                         </div>

//                         <p>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world. </p>
//                         <p> We also offer a <button style={divStyle}>free recipe API</button>  for anyone wanting to use it, with additional features for subscribers.</p>

//                         <button className="paypal "> <span>Pay</span> Pal</button>

//                         <p>Click button above to upgrade free API to premium for $3</p>
//                         <p className='text-primary'>Currently (54 supporters)</p>

//                         <div className="divider"></div>
//                         <div>
//                             <input className="inputContainer" type="text" />
//                             <button className="search-button">Search</button>
//                         </div>


//                         <div className="counters">
//                             <span>Total Meals:</span>
//                             <span>Total Ingredients: </span>
//                             <span>Images: </span>
//                         </div>
//                         <div className="divider"></div>


//                     </div>

//                     <img src={MealIcon} />


//                 </div>
//             </div>
//             {/* <div className="title">
//                 <h4>Latest Meals</h4>
//             </div> */}

//         </>
//     );
// }
// export default feature;








import { useState, useEffect } from 'react';
import MealIcon from '../stillImages/meal-icon.png';

function Feature() {

    const divStyle = {
        color: "orange",
        backgroundColor: "transparent"
    };

    // State değişkenleri
    const [yemekler, setYemekler] = useState([]);  // Yemek verisi
    const [icerik, setIcerik] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");  // Kullanıcının girdiği arama terimi
    const [filteredMeals, setFilteredMeals] = useState([]);  // Arama sonucu filtrelenmiş yemekler

    // Yemek verisini fetch et
    useEffect(() => {
        fetch('http://localhost:4000/meals')
            .then(response => response.json())
            .then(data => {
                setYemekler(data);
                setFilteredMeals('');  // Başlangıçta tüm yemekleri göstereceğiz
            })
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        fetch('http://localhost:4000/Ingredients')
            .then(responseIcerik => responseIcerik.json())
            .then(dataIcerik => {
                setYemekler(dataIcerik);
                setFilteredMeals('');
            })
            .catch(error => console.log(error));
    }, []);

    // Kullanıcının arama terimini güncelleyen fonksiyon
    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Arama fonksiyonu, yemeklerin adlarını filtreler
    const handleSearch = () => {
        // Eğer arama terimi boşsa, tüm yemekleri göster
        if (!searchQuery) {
            setFilteredMeals('');
            return;
        }

        // Arama terimi ile eşleşen yemekleri filtrele
        const filtered = yemekler.filter((meal) => {
            const mealName = meal.Name.toLowerCase(); // Sadece yemek ismine odaklan
            const query = searchQuery.toLowerCase();

            // Sadece yemek ismi ile arama yapıyoruz
            return mealName.includes(query);
        });

        // Filtrelenmiş yemekleri state'e aktar
        setFilteredMeals(filtered);
    };

    return (
        <>
            <div className="feature">
                <div className="center">
                    <img src={MealIcon} alt="Meal Icon" />
                    <div className="content">
                        <div className='title'>
                            <h3>Welcome to TheMealDB</h3>
                        </div>

                        <p>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world. </p>
                        <p> We also offer a <button style={divStyle}>free recipe API</button>  for anyone wanting to use it, with additional features for subscribers.</p>

                        <button className="paypal "> <span>Pay</span> Pal</button>

                        <p>Click button above to upgrade free API to premium for $3</p>
                        <p className='text-primary'>Currently (54 supporters)</p>

                        <div className="divider"></div>

                        {/* Arama alanı ve butonu */}
                        {/* <div>
                            <input
                                className="inputContainer"
                                type="text"
                                value={searchQuery}
                                onChange={handleSearchInputChange}
                                placeholder="Search meals"
                            />
                            <button className="search-button" onClick={handleSearch}>Search</button>
                        </div> */}

                        {/* Ekranda filtrelenmiş yemekleri listele */}
                        {/* <div className="meal-list">
                            {filteredMeals.length > 0 ? (
                                filteredMeals.map((meal) => (
                                    <div key={meal.id} className="meal-card">
                                        <img src={meal.ImageUrl} alt={meal.Name} />
                                        <h3>{meal.Name}</h3>
                                        <p>{meal.Instructions}</p>
                                        
                                    </div>
                                ))
                            ) : (
                                <p>No meals found</p>
                            )}
                        </div> */}

                        {/* <div className="counters">
                            <span>Total Meals: {yemekler.length}</span>
                            <span>Images: {filteredMeals.length}</span>
                        </div> */}


                    </div>

                    <img src={MealIcon} alt="Meal Icon" />
                </div>
            </div>
        </>
    );
}

export default Feature;
