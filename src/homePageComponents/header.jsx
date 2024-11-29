import { useNavigate, useParams } from 'react-router-dom';
import HeaderImage from '../stillImages/logo-small.png'
import { useEffect, useState } from 'react';



const homePage = () => {
  const navigate = useNavigate();

  const urunEklemeClick = () => {
    navigate(`/urunEkleme`)
  }

  const [mealArama, setMealArama] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/meals")
      .then(responseMeal => responseMeal.json())
      .then(dataMeal => setMealArama(dataMeal))
      .catch(error => console.log(error))
  })

  const handleSearch = (event) => {
    const searchEdilen = event.target.value.toLowerCase();
    const filteredOlanlar = mealArama.filter(meals => meals.Name.toLowerCase().includes(searchEdilen))
    setMealArama(filteredOlanlar);
  }

  return (

    <div className="header">
      <img src={HeaderImage} />
      <div className="navbar">
        <button onClick={() => window.location.href = 'http://localhost:3000/'} className='home'>Home</button>
        <button onClick={urunEklemeClick} className='api'>Ekle</button>
        {/* <input onChange={handleSearch} className='inputx' type="text" placeholder='Search' id="" /> */}
      </div>
    </div>

  );
}
export default homePage;












// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import data from '../db.json'; // db.json dosyasını import et
// import HeaderImage from '../stillImages/logo-small.png';

// const HomePage = () => {
//   const navigate = useNavigate();

//   const [searchTerm, setSearchTerm] = useState(''); // Arama terimi
//   const [filteredMeals, setFilteredMeals] = useState(data.meals); // Filtrelenmiş yemekler
//   const [filteredIngredients, setFilteredIngredients] = useState(data.Ingredients); // Filtrelenmiş malzemeler

//   // Ürün ekleme butonuna tıklandığında yönlendirme
//   const urunEklemeClick = () => {
//     navigate('/urunEkleme');
//   };

//   // Arama inputu değiştiğinde çalışacak fonksiyon
//   const handleSearch = (e) => {
//     const searchQuery = e.target.value.toLowerCase();
//     setSearchTerm(searchQuery); // Arama terimini güncelle

//     // Meals ve Ingredients dizilerinde filtreleme yap
//     const filteredMeals = data.meals.filter(meal =>
//       meal.Name.toLowerCase().includes(searchQuery)
//     );

//     const filteredIngredients = data.Ingredients.filter(ingredient =>
//       ingredient.Name.toLowerCase().includes(searchQuery)
//     );

//     setFilteredMeals(filteredMeals); // Filtered meals dizisini güncelle
//     setFilteredIngredients(filteredIngredients); // Filtered ingredients dizisini güncelle
//   };

//   return (
//     <div className="header">
//       <img src={HeaderImage} alt="Logo" />

//       <div className="navbar">
//         <button onClick={() => window.location.href = 'http://localhost:3000/'} className="home">
//           Home
//         </button>
//         <button onClick={urunEklemeClick} className="api">
//           Ekle
//         </button>

//         {/* Arama input alanı */}
//         <input
//           className="inputx"
//           type="text"
//           placeholder="Search"
//           value={searchTerm} // Arama terimini inputta göster
//           onChange={handleSearch} // Kullanıcı yazdıkça arama terimini günceller
//         />
//       </div>

//       {/* Arama sonuçları */}
//       <div className="results">
//         <h3>Meals:</h3>
//         <ul>
//           {filteredMeals.length > 0 ? (
//             filteredMeals.map((meal) => (
//               <li key={meal.id}>
//                 <img src={meal.ImageUrl} alt={meal.Name} />
//                 <p>{meal.Name}</p>
//               </li>
//             ))
//           ) : (
//             <p>No meals found.</p>
//           )}
//         </ul>

//         <h3>Ingredients:</h3>
//         <ul>
//           {filteredIngredients.length > 0 ? (
//             filteredIngredients.map((ingredient) => (
//               <li key={ingredient.id}>
//                 <img src={ingredient.IngredientImage} alt={ingredient.Name} />
//                 <p>{ingredient.Name}</p>
//               </li>
//             ))
//           ) : (
//             <p>No ingredients found.</p>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default HomePage;















//input a değer girilmediğinde ürünleri getirmeyen version

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import data from '../db.json'; // db.json dosyasını import et
// import HeaderImage from '../stillImages/logo-small.png';

// const HomePage = () => {
//   const navigate = useNavigate();

//   const [searchTerm, setSearchTerm] = useState(''); // Arama terimi
//   const [filteredMeals, setFilteredMeals] = useState([]); // Filtrelenmiş yemekler
//   const [filteredIngredients, setFilteredIngredients] = useState([]); // Filtrelenmiş malzemeler

//   // Ürün ekleme butonuna tıklandığında yönlendirme
//   const urunEklemeClick = () => {
//     navigate('/urunEkleme');
//   };

//   // Arama inputu değiştiğinde çalışacak fonksiyon
//   const handleSearch = (e) => {
//     const searchQuery = e.target.value.toLowerCase();
//     setSearchTerm(searchQuery); // Arama terimini güncelle

//     // Eğer searchTerm boşsa, her iki listeyi de boş yaparak gizleyelim
//     if (searchQuery === '') {
//       setFilteredMeals([]); // Arama yapılmadığı için yemekleri gizle
//       setFilteredIngredients([]); // Arama yapılmadığı için malzemeleri gizle
//       return;
//     }

//     // Arama terimi girildiyse filtreleme yap
//     const filteredMeals = data.meals.filter(meal =>
//       meal.Name.toLowerCase().includes(searchQuery)
//     );

//     const filteredIngredients = data.Ingredients.filter(ingredient =>
//       ingredient.Name.toLowerCase().includes(searchQuery)
//     );

//     setFilteredMeals(filteredMeals); // Filtered meals dizisini güncelle
//     setFilteredIngredients(filteredIngredients); // Filtered ingredients dizisini güncelle
//   };

//   return (
//     <div className="header">
//       <img src={HeaderImage} alt="Logo" />

//       <div className="navbar">
//         <button onClick={() => window.location.href = 'http://localhost:3000/'} className="home">
//           Home
//         </button>
//         <button onClick={urunEklemeClick} className="api">
//           Ekle
//         </button>

//         {/* Arama input alanı */}
//         <input
//           className="inputx"
//           type="text"
//           placeholder="Search"
//           value={searchTerm} // Arama terimini inputta göster
//           onChange={handleSearch} // Kullanıcı yazdıkça arama terimini günceller
//         />
//       </div>

//       {/* Arama sonuçları */}
//       <div className="results">
//         {/* Sadece arama terimi girildiğinde yemekler ve malzemeler gösterilecek */}
//         {searchTerm && (
//           <>
//             <h3>Meals:</h3>
//             <ul>
//               {filteredMeals.length > 0 ? (
//                 filteredMeals.map((meal) => (
//                   <li key={meal.id}>
//                     <img src={meal.ImageUrl} alt={meal.Name} />
//                     <p>{meal.Name}</p>
//                   </li>
//                 ))
//               ) : (
//                 <p>No meals found.</p>
//               )}
//             </ul>

//             <h3>Ingredients:</h3>
//             <ul>
//               {filteredIngredients.length > 0 ? (
//                 filteredIngredients.map((ingredient) => (
//                   <li key={ingredient.id}>
//                     <img src={ingredient.IngredientImage} alt={ingredient.Name} />
//                     <p>{ingredient.Name}</p>
//                   </li>
//                 ))
//               ) : (
//                 <p>No ingredients found.</p>
//               )}
//             </ul>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomePage;
