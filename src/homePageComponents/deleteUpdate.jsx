// import { useEffect, useState } from "react";
// import DeleteButton from '../stillImages/deleteButton.png'

// function deleteUpdate() {

//     const [yemek, setYemek] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:4000/meals')
//             .then(response => response.json())
//             .then(yemkeVerisi => setYemek(yemkeVerisi))
//             .catch(error => console.log(error))
//     }, [])

//     const deleteMeal = (silinecekId) => {
//         fetch(`http://localhost:4000/meals/${silinecekId}`,
//             {
//                 method: 'DELETE',  // DELETE isteği gönderiyoruz
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             })
//             .then(response => response.json())
//             .then(silinecekYemek => {   //delete yaptığımız için dönen değerle(silinecekYemek ile) işimiz yok
//                 console.log("silindi")

//                 fetch('http://localhost:4000/meals')
//                     .then(response => response.json())
//                     .then(yemkeVerisi => setYemek(yemkeVerisi))
//                     .catch(error => console.log(error))

//             }
//             )
//             .catch(error => console.log(error))
//     }

//     // const update = (updateId) => {
//     //     fetch(`http://localhost:4000/meals/${updateId}`,
//     //         {
//     //             method: 'PATCH',
//     //             headers: {
//     //                 'Content-Type': 'application/json'
//     //             }
//     //         })
//     //         .then(response => response.json())
//     //         .then(updateData => {
//     //         }
//     //         )
//     //         .catch(error => console.log(error))
//     // }



//     return (
//         <div className="mealContainer">

//             {yemek.map(herbiri => (
//                 <div>
//                     <input type="text" />
//                     <button onClick={() => deleteMeal(herbiri.id)} className="aaa">
//                         <img src={DeleteButton} alt="" />
//                     </button>
//                     <div className="mealSection">
//                         <button>
//                             <img src={herbiri.ImageUrl} alt={herbiri.Name} />
//                             <p>{herbiri.Name}</p>
//                         </button>
//                     </div>
//                 </div>

//             ))}
//         </div>
//     )
// }
// export default deleteUpdate;















// import { useEffect, useState } from "react";
// import DeleteButton from '../stillImages/deleteButton.png'

// function deleteUpdate() {
//     const [yemek, setYemek] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:4000/meals')
//             .then(response => response.json())
//             .then(yemkeVerisi => setYemek(yemkeVerisi))
//             .catch(error => console.log(error))
//     }, [])

//     const deleteMeal = (silinecekId) => {
//         fetch(`http://localhost:4000/meals/${silinecekId}`,
//             {
//                 method: 'DELETE',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             })
//             .then(response => response.json())
//             .then(() => {
//                 console.log("silindi")
//                 fetch('http://localhost:4000/meals')
//                     .then(response => response.json())
//                     .then(yemkeVerisi => setYemek(yemkeVerisi))
//                     .catch(error => console.log(error))
//             })
//             .catch(error => console.log(error))
//     }

//     return (
//         <div className="mealContainer">
//             <div className="mealContainer1">
//                 <input
//                     type="text"
//                     value={ }
//                     onChange={ }
//                     placeholder="update meal" />
//                 <button>Update</button>
//             </div>
//             <div className="mealSection2">
//                 {yemek.map(herbiri => (
//                     <div key={herbiri.id}>

//                         <button onClick={() => deleteMeal(herbiri.id)} className="aaa">
//                             <img src={DeleteButton} alt="" />
//                         </button>
//                         <div className="mealSection">
//                             <button onClick={() => handleMealClick(herbiri.Name)}>
//                                 <img src={herbiri.ImageUrl} alt={herbiri.Name} />
//                                 <p>{herbiri.Name}</p>
//                             </button>
//                         </div>

//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default deleteUpdate;










import { useEffect, useState } from "react";
import DeleteButton from '../stillImages/deleteButton.png';

function deleteUpdate() {
    const [yemek, setYemek] = useState([]);
    const [inputValue, setInputValue] = useState('');  // Input değerini tutmak için
    const [selectedMeal, setSelectedMeal] = useState(null);  // Tıklanan yemeği tutacak

    // Yemek verilerini al
    useEffect(() => {
        fetch('http://localhost:4000/meals')
            .then(response => response.json())
            .then(yemkeVerisi => setYemek(yemkeVerisi))
            .catch(error => console.log(error))
    }, []);

    // Yemek silme fonksiyonu
    const deleteMeal = (silinecekId) => {
        fetch(`http://localhost:4000/meals/${silinecekId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(() => {
                console.log("Silindi");
                fetch('http://localhost:4000/meals')
                    .then(response => response.json())
                    .then(yemkeVerisi => setYemek(yemkeVerisi))
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
    }

    // Yemek butonuna tıklama (yemeğin adı input'a yazılacak)
    const handleMealClick = (mealName, mealId) => {
        setInputValue(mealName);  // Yemeğin adını input'a yaz
        setSelectedMeal(mealId);  // Tıklanan yemeği seç
    }

    // Yemek adı güncelleme fonksiyonu
    const updateMeal = () => {
        if (selectedMeal) {
            fetch(`http://localhost:4000/meals/${selectedMeal}`, {
                method: 'PATCH',  // Güncelleme işlemi için PATCH kullanıyoruz
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Name: inputValue  // Güncellenmiş yemek adı
                })
            })
                .then(response => response.json())
                .then(() => {
                    console.log("Yemek adı güncellendi");
                    // Güncelleme sonrası yemek verilerini tekrar al
                    fetch('http://localhost:4000/meals')
                        .then(response => response.json())
                        .then(yemkeVerisi => setYemek(yemkeVerisi))
                        .catch(error => console.log(error));
                })
                .catch(error => console.log(error));
        }
    }

    return (
        <div className="mealContainer">
            <div className="mealContainer1">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}  // Input değeri değiştikçe güncellenir
                    placeholder="Update meal"
                />
                <button onClick={updateMeal}>Update</button>  {/* Update butonuna tıklanırsa güncelleme yapılır */}
            </div>
            <div className="mealSection2">
                {yemek.map(herbiri => (
                    <div className="mealSection2a" key={herbiri.id}>
                        <button onClick={() => deleteMeal(herbiri.id)} className="aaa">
                            <img src={DeleteButton} alt="" />
                        </button>
                        <div className="mealSectionx">
                            <button onClick={() => handleMealClick(herbiri.Name, herbiri.id)}>
                                <img src={herbiri.ImageUrl} alt={herbiri.Name} />
                                <p>{herbiri.Name}</p>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default deleteUpdate;
