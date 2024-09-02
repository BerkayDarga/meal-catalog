import { useNavigate } from 'react-router-dom';


import HeaderImage from '../stillImages/logo-small.png'



const homePage = () => {
  return (

    <div className="header">
      <img src={HeaderImage} />
      <div className="navbar">
        <button className='home'>Home</button>
        <button className='api'>API</button>
        <input className='input' type="text" placeholder='Search' id="" />
      </div>


    </div>

  );
}
export default homePage;