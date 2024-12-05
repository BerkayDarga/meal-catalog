import { useEffect, useState } from 'react';

function UrunEkleme() {
    // Ürün için
    const [status, setStatus] = useState('');
    const [IngredientName, setIngredientName] = useState('');
    const [IngredientImage, setMealIngredientImage] = useState('');
    const [popularIngredients, setPopularIngredients] = useState(false);
    const [secilecekIngredient, setSecilecekIngredient] = useState([]);

    // Yemek için
    const [mealName, setMealName] = useState('');
    const [mealImageUrl, setMealImageUrl] = useState('');
    const [mealCountry, setMealCountry] = useState('');
    const [mealInstructions, setMealInstructions] = useState('');
    const [mealLatestMeals, setMealLatestMeals] = useState(false);
    const [mealingredient, setMealIngredient] = useState([]);

    // Ingredient handler functions
    const handleNameChange = (e) => setIngredientName(e.target.value);
    const handleImageChange = (e) => setMealIngredientImage(e.target.value);
    const handlePopularChange = (e) => setPopularIngredients(e.target.checked);

    // Meal handler functions
    const handleMealNameChange = (e) => setMealName(e.target.value);
    const handleMealImageChange = (e) => setMealImageUrl(e.target.value);
    const handleMealCountryChange = (e) => setMealCountry(e.target.value);
    const handleMealInstructionChange = (e) => setMealInstructions(e.target.value);

    useEffect(() => {
        fetch("http://localhost:4000/Ingredients")
            .then(response => response.json())
            .then(data => setSecilecekIngredient(data))
            .catch(error => console.log(error))
    })

    const addIngredient = (a, b, c) => {
        setMealIngredient([...mealingredient, { id: a, Name: b, IngredientImage: c }]);
    };

    const handleIngredientChange = (index, field, value) => {
        const updatedIngredients = [...mealingredient];
        updatedIngredients[index][field] = value;
        setMealIngredient(updatedIngredients);
    };

    const toggleLatestMeals = () => {
        setMealLatestMeals(!mealLatestMeals);
    };

    const postİngredient = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/Ingredients', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    Name: IngredientName,
                    IngredientImage: IngredientImage,
                    popularIngredients: popularIngredients,
                }),
            });

            if (response.ok) {
                setStatus('Kaydetme başarılı');
            } else {
                throw new Error('Failed to add ingredient');
            }
        } catch (error) {
            setStatus(`Error occurred: ${error.message}`);
        }
    };

    const postMeal = async (e) => {
        e.preventDefault();
        const newMeal = {
            id: Date.now().toString(),  // Her yeni öğe için benzersiz bir ID
            Name: mealName,
            ImageUrl: mealImageUrl,
            country: mealCountry,
            Instructions: mealInstructions,
            latestMeals: mealLatestMeals,
            ingredient: mealingredient,
        };
        try {
            const responseMeal = await fetch('http://localhost:4000/meals', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newMeal),
            });

            if (responseMeal.ok) {   //post işlemi doğruysa başarılı yaz ve kullanıcının inputlara girdiği değerleri sıfırla
                setStatus('Meal successfully added!');
                setMealName('');
                setMealImageUrl('');
                setMealCountry('');
                setMealInstructions('');
                setMealIngredient([]);
                setMealLatestMeals(false);
            } else {
                setStatus('Failed to add meal');
            }
        } catch (error) {
            setStatus('Error: ' + error.message);
        }

        function UrunEkleme() {
            const [selectedIngredient, setSelectedIngredient] = useState({
                Name: '',
                ImageUrl: ''
            });

            // Bu fonksiyon butona tıklandığında seçilen veriyi inputlara aktaracak
            const handleIngredientClick = (ingredient) => {
                setSelectedIngredient({
                    Name: ingredient.Name,
                    ImageUrl: ingredient.IngredientImage
                });
            }
        }
    };

    return (
        <div className="containerEklemeSayfası">
            {/* Ürün Ekleme */}
            <div className="urunEkleme">
                <h1>Add a new Ingredient</h1>
                <form onSubmit={postİngredient}>
                    <div className="form-groupUrun">
                        <label>Name:</label>
                        <input type="text" value={IngredientName} onChange={handleNameChange} />
                    </div>
                    <div className="form-groupUrun">
                        <label>Ingredient Image URL:</label>
                        <input type="text" value={IngredientImage} onChange={handleImageChange} />
                    </div>
                    <div className="form-groupUrun">
                        <label>Popular Ingredient:</label>
                        <input type="checkbox" checked={popularIngredients} onChange={handlePopularChange} />
                    </div>
                    <button className="buttonUrun" type="submit">Add Ingredient</button>
                </form>
                {status && <p className={status === 'Kaydetme başarılı' ? 'success' : ''}>{status}</p>}

            </div>

            {/*Yemek Ekleme */}
            <div className="yemekEkleme">
                <h1>Add a New Meal</h1>
                {/* xxx */}
                <form onSubmit={postMeal}>
                    <div className="form-groupYemek">
                        <label>Name:</label>
                        <input type="text" value={mealName} onChange={handleMealNameChange} required />
                    </div>
                    <div className="form-groupYemek">
                        <label>Image URL:</label>
                        <input type="text" value={mealImageUrl} onChange={handleMealImageChange} required />
                    </div>
                    <div className="form-groupYemek">
                        <label>Country:</label>
                        <input type="text" value={mealCountry} onChange={handleMealCountryChange} required />
                    </div>
                    <div className="form-groupYemek">
                        <label>Instructions:</label>
                        <textarea value={mealInstructions} onChange={handleMealInstructionChange} required />
                    </div>
                    <div className="form-groupYemek">
                        <label>Ingredients:</label>
                        {mealingredient.map((ingredient, index) => (
                            <div key={index}>
                                <input
                                    type="text"
                                    value={ingredient.Name}
                                    onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
                                    placeholder="Ingredient Name"
                                    required
                                />
                                <input
                                    type="text"
                                    value={ingredient.IngredientImage}
                                    onChange={(e) => handleIngredientChange(index, 'ingredientImage', e.target.value)}
                                    placeholder="Ingredient Image URL"
                                    required
                                />
                            </div>
                        ))}
                        {/* <button type="button" onClick={addIngredient}>Add Ingredient</button> */}
                        <div className="containerEklenenUrun">
                            {secilecekIngredient.map(eklenenIngredient => (
                                <button type='button' className='urunEklemeButon' onClick={() => {
                                    addIngredient(eklenenIngredient.id, eklenenIngredient.Name, eklenenIngredient.IngredientImage);
                                }}>
                                    <h1>{eklenenIngredient.Name}</h1>
                                    <img src={eklenenIngredient.IngredientImage} alt="" />
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="form-groupYemek">
                        <button type="button" onClick={toggleLatestMeals}>
                            {mealLatestMeals ? 'Remove from Latest Meals' : 'Add to Latest Meals'}
                        </button>
                    </div>
                    <button type="submit">Add Meal</button>
                </form>
                {/* xxx */}
                {status && <p className={status === 'Meal successfully added!' ? 'success' : ''}>{status}</p>}
            </div>
        </div>

    );
}
export default UrunEkleme;


