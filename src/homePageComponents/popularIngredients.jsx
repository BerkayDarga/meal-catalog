function popularIngredients(ingredients) {

    const img = ingredients.img
    const ingredientName = ingredients.ingredientName
    const butonClick = ingredients.butonClick

    return (
        <button className="popularIngredientsButton" onClick={butonClick}>
            <div className="popularIngredients">
                <img src={img} />
                <p>{ingredientName}</p>
            </div>
        </button>

    );
}
export default popularIngredients;