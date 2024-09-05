function randomMeals(mealRandom) {
    const image = mealRandom.image
    const name = mealRandom.name
    return (
        <div className="randomMeal">
            <img src={image} />
            <p>{name}</p>
        </div>
    )

}
export default randomMeals;