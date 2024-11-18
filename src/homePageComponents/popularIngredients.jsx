function popularIngredients(ingredients) {

    const img = ingredients.img
    const ingredientName = ingredients.ingredientName

    return (
        <button className="popularIngredientsButton">
            <div className="popularIngredients">
                <img src={img} />
                <p>{ingredientName}</p>
            </div>
        </button>

    );
}
export default popularIngredients;