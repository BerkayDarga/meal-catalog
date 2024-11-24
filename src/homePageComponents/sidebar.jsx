function sidebar(meals) {
    const image = meals.image
    const name = meals.name
    return (
        <div className="mealSection">
            <button onClick={meals.buttonclick}>
                <img src={image} />
                <p>{name}</p>
            </button>
        </div>
    )
}
export default sidebar;