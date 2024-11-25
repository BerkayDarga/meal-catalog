import { useNavigate, useParams } from 'react-router-dom';


import HeaderImage from '../stillImages/logo-small.png'



const homePage = () => {
  const navigate = useNavigate();

  const urunEklemeClick = () => {
    navigate(`/urunEkleme`)
  }
  return (

    <div className="header">
      <img src={HeaderImage} />
      <div className="navbar">
        <button onClick={() => window.location.href = 'http://localhost:3000/'} className='home'>Home</button>
        <button onClick={urunEklemeClick} className='api'>Ekle</button>
        <input className='input' type="text" placeholder='Search' id="" />
      </div>

    </div>

  );
}
export default homePage;