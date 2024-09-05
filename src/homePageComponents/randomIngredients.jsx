function randomIngredients(randomIngredient) {
    const name = randomIngredient.name
    const image = randomIngredient.image
    return (
        <div className="popularIngredients">
            <img src={image} />
            <p>{name}</p>
        </div>
    )
}
export default randomIngredients;