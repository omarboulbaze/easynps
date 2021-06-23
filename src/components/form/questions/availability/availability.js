import text from '../../../../translations/text.json'
import {useState} from 'react'

function Availability(){

    const [rating, setRating] = useState();

    function ratingOnClick(num){
        setRating(num);
    }

    return(
        <>
            <p className="form-text">
                {text.french.availability}
            </p>
            <div className="rating">
                <div className="rating-text">
                    <span>{text.french.poor}</span>
                    <span>{text.french.excellent}</span>
                </div>
                <div className="rating-buttons">
                    {
                       [0,1,2,3,4,5,6,7,8,9,10].map( num => { 
                        return <div className={`radio ${rating === num ? "checked" : ""}`} onClick={() => ratingOnClick(num)} key={num}>{num}</div>
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default Availability;