import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ingredient() {

    const [ingredients, setIngredients] = useState();
    const { idIngredient } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/Ingredients?id=${idIngredient}`)
            .then(response => response.json())
            .then(data => setIngredients(data))
            .catch(error => console.log(error))
    }, []);

    return (
        // <div className="">
        //     {ingredients.map(ingredientler => (
        //         <button>
        //             <img src={ingredientler.IngredientImage} alt="" />
        //             <p>{ingredientler.Name}</p>
        //         </button>


        //     ))}
        // </div>
        
            <div className="">
                {ingredients && ingredients.length > 0 ? (
                    ingredients.map(ingredientler => (
                        <button>
                            <img src={ingredientler.IngredientImage} alt={ingredientler.Name} />
                            <p>{ingredientler.Name}</p>
                        </button>
                    ))
                ) : (
                    <p>No ingredients found</p>  // Eğer veriler gelmezse kullanıcıya mesaj göster
                )}
            </div>
        
    );
}
export default ingredient;