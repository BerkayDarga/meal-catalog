function randomMeals(mealRandom) {
    const image = mealRandom.image
    const name = mealRandom.name
    const buttonclick = mealRandom.buttonclick
    
    return (
        <button className="randomMealButton" onClick={buttonclick}>
            <div className="randomMeal">
                <img src={image} />
                <p>{name}</p>
            </div>
        </button>

    )

}
export default randomMeals;