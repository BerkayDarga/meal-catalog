import { useEffect, useState } from 'react';


function UrunEkleme() {
    const [status, setStatus] = useState('');
    const [IngredientName, setIngredientName] = useState('');
    const [IngredientImage, setMealIngredientImage] = useState('');
    const [popualarIngredients, setPopualarIngredients] = useState(false);

    const handleNameChange = (e) => {
        setIngredientName(e.target.value)
    }

    const handleImageChange = (e) => {
        setMealIngredientImage(e.target.value)
    }

    const handlePopularChange = (e) => {
        setPopualarIngredients(e.target.checked)
    }


   const postMeal = async (event) => {
    event.preventDefault()
        try {
            // POST isteği gönder
            const response = await fetch('http://localhost:4000/Ingredients', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // JSON formatında veri gönderiyoruz
                },
                body: JSON.stringify({
                    Name: IngredientName,
                    IngredientImage: IngredientImage,
                    popualarIngredients: popualarIngredients
                }), // mealData'yı JSON'a dönüştürüp gönderiyoruz
            });

            if (response.ok) {
                const result = await response.json();
                setStatus(`Kaydetme başarılı`);
            } else {
                throw new Error('Failed to add meal');
            }
        } catch (error) {
            // Hata durumunda
            setStatus(`Error occurred: ${error.message}`);
        }
    };

    return (
        <div>

            <div>
                <h3>Add a new Ingredient</h3>
                <form onSubmit={postMeal}>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            value={IngredientName}
                            onChange={handleNameChange}
                        />
                    </div>

                    <div>
                        <label>Ingredient Image URL:</label>
                        <input
                            type="text"
                            value={IngredientImage}
                            onChange={handleImageChange}
                        />
                    </div>

                    <div>
                        <label>Popular Ingredient:</label>
                        <input
                            type="checkbox"
                            checked={popualarIngredients}
                            onChange={handlePopularChange}
                        />
                    </div>

                    <button type="submit">Add Ingredient</button>
                </form>
            </div>



    
            {status && <p>{status}</p>}
        </div>
    );
};

export default UrunEkleme;