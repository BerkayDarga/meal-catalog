function randomIngredients(randomIngredient) {
    const name = randomIngredient.name
    const image = randomIngredient.image
    const butonClick = randomIngredient.butonClick
    return (
        <button className="popularIngredientsButton" onClick={butonClick}>
            <div className="popularIngredients">
                <img src={image} />
                <p>{name}</p>
            </div>
        </button>
    )
}
export default randomIngredients;