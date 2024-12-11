import TurkishFlag from '../stillImages/türkBayragi.png'
import ArjantinBayragi from '../stillImages/arjantinBayragi.png'
import japonBayragi from '../stillImages/japonBayragi.png'
import ispanyolBayragi from '../stillImages/ispanyolBayragi.png'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function wrapper() {

    const navigate = useNavigate();

    const handleFlagClick = (country) => {
        navigate(`/countryFilters?country=${country}`);
    };



    return (
        <div className="outerWrapper">
            <h2>Browse Country</h2>
            <div className="flags">
                <button className='wrapper' onClick={() => handleFlagClick('turk')}>
                    <img src={TurkishFlag} />
                </button>
                <button className='wrapper' onClick={() => handleFlagClick('japon')}>
                    <img src={japonBayragi} />
                </button>
                <button className='wrapper' onClick={() => handleFlagClick('ispanyol')}>
                    <img src={ispanyolBayragi} />
                </button >
                <button className='wrapper' onClick={() => handleFlagClick('arjantin')}>
                    <img src={ArjantinBayragi} />
                </button>
            </div>
            {/* <h2>Browse By Name</h2> */}
        </div>
    )
}
export default wrapper;