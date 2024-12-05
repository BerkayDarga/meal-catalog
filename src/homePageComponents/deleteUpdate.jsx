import { useEffect, useState } from "react";
import DeleteButton from '../stillImages/deleteButton.png'

function deleteUpdate() {

    const [yemek, setYemek] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/meals')
            .then(response => response.json())
            .then(yemkeVerisi => setYemek(yemkeVerisi))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="mealContainer">

            {yemek.map(herbiri => (

                <div>
                    <button className="aaa">
                        <img src={DeleteButton} alt="" />
                    </button>
                    <div className="mealSection">



                        <button>
                            <img src={herbiri.ImageUrl} alt={herbiri.Name} />
                            <p>{herbiri.Name}</p>
                        </button>

                    </div>
                </div>

            ))}
        </div>
    )
}
export default deleteUpdate;