const homePage = () => {
    return(
        <div className="homePage">
        <div className="header">
          <img src={headerImage} />
        </div>
        <div className="feature">
          <div className="center">
            <h3>Welcome to TheMealDB</h3>
            <p><br />Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world. <br />
              We also offer a free recipe API for anyone wanting to use it, with additional features for subscribers.</p>
          </div>

        </div>

        <div className="footer">

        </div>


      </div>
    );
}
export default homePage;