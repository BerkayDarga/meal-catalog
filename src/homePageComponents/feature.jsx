import MealIcon from '../stillImages/meal-icon.png'
function feature() {

    const divStyle = {
        color: "orange",
        backgroundColor: "transparent"
    }
    return (
        <>
            <div className="feature">
                <div className="center">
                    <img src={MealIcon} />
                    <div className="content">
                        <div className='title'>
                            <h3>Welcome to TheMealDB</h3>
                        </div>

                        <p>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world. </p>
                        <p> We also offer a <button style={divStyle}>free recipe API</button>  for anyone wanting to use it, with additional features for subscribers.</p>

                        <button className="paypal "> <span>Pay</span> Pal</button>

                        <p>Click button above to upgrade free API to premium for $3</p>
                        <p className='text-primary'>Currently (54 supporters)</p>

                        <div className="divider"></div>
                        <div>
                            <input className="inputContainer" type="text" />
                            <button className="search-button">Search</button>
                        </div>


                        <div className="counters">
                            <span>Total Meals:</span>
                            <span>Total Ingredients: </span>
                            <span>Images: </span>
                        </div>
                        <div className="divider"></div>


                    </div>

                    <img src={MealIcon} />


                </div>
            </div>
            <div className="title">
                <h4>Latest Meals</h4>
            </div>
            
        </>
    );
}
export default feature;