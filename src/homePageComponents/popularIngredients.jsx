function popularIngredients(ingredients) {

    const img = ingredients.img
    const ingredientName = ingredients.ingredientName

    return (
        <div className="popularIngredients">
            <img src={img} />
            <p>{ingredientName}</p>
        </div>
    );
}
export default popularIngredients;