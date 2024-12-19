import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ingredient from "../ingredientComponents/ingredient";

function mealPage() {

    const [meals, setMeals] = useState([]);
    const [mealsIngredients, setIngredients] = useState([]);
    const { idMeal } = useParams();
    const { idIngredient } = useParams();

    const navigate = useNavigate();
    const clickIngredient = (clickOlunanIngredient) => {
        navigate(`/ingredientDetail/${clickOlunanIngredient}`)
    }

    useEffect(() => {
        fetch(`http://localhost:4000/meals?id=${idMeal}`)
            .then(aa => aa.json())
            .then(mealData => setMeals(mealData))
            .catch(error => console.error(error))
    }, []);


    // useEffect(() => {
    //     fetch(`http://localhost:4000/meals?ingredient`)
    //         .then(zz => zz.json())
    //         .then(ingredients => setIngredients(ingredients))
    //         .catch(error => console.error(error))
    // })

    return (
        <div className="">
            {meals.map(mealss => (
                <div className="mealDetail" key={mealss.id}>
                    <div className="mealUp">
                        <div className="mealWrapper">
                            <div className="mealDetailLeft">
                                <h1 className="aa">{mealss.Name}</h1>
                                <img src={mealss.ImageUrl} alt={mealss.Name} />
                            </div>
                        </div>
                        <h1 className="bb ">Ingredients</h1>
                        <div className="mealIngredient">
                            {mealss.ingredient.map(aa => (
                                <div className="malzemeler">
                                    <button onClick={() => clickIngredient(aa.id)}>
                                        <img src={aa.IngredientImage} alt="" />
                                    </button>
                                    <h3>{aa.Name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="instructions">
                        <h1>Instructions</h1>
                        <p>{mealss.Instructions}</p>
                    </div>

                </div>
            ))}

            {/* {mealsIngredients.map(ingredients => (
                <p>{ingredients.Name}</p>
            ))} */}
        </div>
    );

}
export default mealPage;