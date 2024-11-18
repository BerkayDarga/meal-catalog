function randomIngredients(randomIngredient) {
    const name = randomIngredient.name
    const image = randomIngredient.image
    return (
        <button className="popularIngredientsButton">
            <div className="popularIngredients">
                <img src={image} />
                <p>{name}</p>
            </div>
        </button>

    )
}
export default randomIngredients;