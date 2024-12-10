import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ingredient() {

    // İNGREDİENTDETAİL

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
                    <div className="mealDetail">
                        <div className="mealUp">
                            <div className="mealWrapper">
                                <div className="mealDetailLeft">
                                    <p>{ingredientler.Name}</p>
                                    <img src={ingredientler.IngredientImage} alt={ingredientler.Name} />
                                </div>
                            </div>
                            <h1 className="bb ">Meals</h1>
                            <div className="mealIngredient">
                                <p>ürünün dahil olduğu yemekler burada olacaklar map le de olabilir yemekler bu kısımda çağırılacaklar</p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No ingredients found</p>  // Eğer veriler gelmezse kullanıcıya mesaj göster
            )}
        </div>

    );
}
export default ingredient;