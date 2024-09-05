import TurkishFlag from '../stillImages/türkBayragi.png'
import ArjantinBayragi from '../stillImages/arjantinBayragi.png'
import japonBayragi from '../stillImages/japonBayragi.png'
import ispanyolBayragi from '../stillImages/ispanyolBayragi.png'


function wrapper() {
    return (
        <div className="">
            <button>
                <img src={TurkishFlag} />
            </button>
            <button>
                <img src={japonBayragi} />
            </button>
            <button>
                <img src={ispanyolBayragi} />
            </button>
            <button>
                <img src={ArjantinBayragi} />
            </button>
        </div>

    )
}
export default wrapper;