import TurkishFlag from '../stillImages/türkBayragi.png'
import ArjantinBayragi from '../stillImages/arjantinBayragi.png'
import japonBayragi from '../stillImages/japonBayragi.png'
import ispanyolBayragi from '../stillImages/ispanyolBayragi.png'
import { useEffect, useState } from 'react';


function wrapper() {


    useEffect(() => {   //useEffect bileşen ilk render edildiğinde bir kez çalışır
        // Başlangıç ve bitiş harflerinin ASCII kodları
        const startCharCode = 'A'.charCodeAt(0); // 65
        const endCharCode = 'Z'.charCodeAt(0);   // 90

        // Döngü ile harfleri bastırma
        for (let charCode = startCharCode; charCode <= endCharCode; charCode++) {
            // ASCII kodundan harfi dönüştürme
            const letter = String.fromCharCode(charCode);

            // Harfi ekrana yazdırma
            console.log(letter);
        }

    }, []);


    return (
        <div className="outerWrapper">
            <h2>Browse Country</h2>
            <div className="flags">
                <button className='wrapper'>
                    <img src={TurkishFlag} />
                </button>
                <button className='wrapper'>
                    <img src={japonBayragi} />
                </button>
                <button className='wrapper'>
                    <img src={ispanyolBayragi} />
                </button >
                <button className='wrapper'>
                    <img src={ArjantinBayragi} />
                </button>
            </div>
            {/* <h2>Browse By Name</h2> */}
        </div>
    )
}
export default wrapper;