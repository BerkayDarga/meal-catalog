import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ingredient() {

    // İNGREDİENTDETAİL

    const [ingredients, setIngredients] = useState();
    const [meallar, setMeallar] = useState([]);
    const { idIngredient } = useParams();

    const nav = useNavigate();
    const clickMeal = (disaridanMealId) => {
        nav(`/mealDetail/${disaridanMealId}`)
    }

    useEffect(() => {
        fetch(`http://localhost:4000/Ingredients?id=${idIngredient}`)
            .then(response => response.json())
            .then(data => setIngredients(data))
            .catch(error => console.log(error))
    }, []);

    // useEffect(() => {
    //     fetch(`http://localhost:4000/meals`)
    //         .then(aa => aa.json())
    //         .then(veris => {
    //             for (let i = 0; i < veris.length; i++) {
    //                 for (let index = 0; index < veris[i].ingredient.length; index++) {
    //                     // console.log(veris[i].Name+" : "+JSON.stringify(element))
    //                     if (veris[i].ingredient[index].id === idIngredient) {
    //                         const meall = veris[i]
    //                         meallar.push(meall);
    //                         setMeallar(meallar)
    //                         // console.log(meallar)
    //                     }
    //                 }
    //             }
    //         })
    //         .catch(error => console.log(error))
    // }, [])


    useEffect(() => {
        fetch(`http://localhost:4000/meals`)
            .then(aa => aa.json())
            .then(veris => {
                const newMeallar = []; // Yeni bir array oluştur
                for (let i = 0; i < veris.length; i++) {
                    for (let index = 0; index < veris[i].ingredient.length; index++) {
                        if (veris[i].ingredient[index].id === idIngredient) {
                            newMeallar.push(veris[i]); // Yeni array'e yemekleri ekle
                        }
                    }
                }
                setMeallar(newMeallar); // Yeni array'i state'e at
                console.log(newMeallar); // Yeni state'in doğru şekilde güncellenip güncellenmediğini kontrol et
            })
            .catch(error => console.log(error));
    }, [idIngredient]); // idIngredient değiştiğinde tekrar çalışması için dependency array'e ekledik




    return (
        <div className="eee">
            {ingredients && ingredients.length > 0 ? (
                ingredients.map(ingredientler => (
                    <div className="mealDetail">
                        <div className="mealUp">
                            <div className="mealDetailLeft">
                                <h1>{ingredientler.Name}</h1>
                                <img src={ingredientler.IngredientImage} alt={ingredientler.Name} />
                            </div>
                            <div className="mealDetailRight">
                                <h1 className="bb ">Meals</h1>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No ingredients found</p>  // Eğer veriler gelmezse kullanıcıya mesaj göster
            )}
            <div className="mealIngredient">
                {meallar.map(mealss => (
                    <div className="malzemeler">
                        <button onClick={() => clickMeal(mealss.id)}>
                            <img src={mealss.ImageUrl} alt="" />
                            <h3> {mealss.Name} </h3>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ingredient;