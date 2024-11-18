function randomMeals(mealRandom) {
    const image = mealRandom.image
    const name = mealRandom.name
    return (
        <button className="randomMealButton">
            <div className="randomMeal">
                <img src={image} />
                <p>{name}</p>
            </div>
        </button>

    )

}
export default randomMeals;