import text from '../../../../translations/text.json'
import {useState} from 'react'

function Ltr(){

const [inputVisible, setInputVisible] = useState(false);
const [rating, setRating] = useState();

function ratingOnClick(num){
    setRating(num);
    setInputVisible(true);
}

    return(
        <>
            <p className="form-text">
                {text.french.ltr}
            </p>
            <div className="rating">
                <div className="rating-text">
                    <span>{text.french.notLikely}</span>
                    <span>{text.french.extremeLikely}</span>
                </div>
                <div className="rating-buttons">
                    {
                       [0,1,2,3,4,5,6,7,8,9,10].map( num => { 
                           return <div className={`radio ${rating === num ? "checked" : ""}`} onClick={() => ratingOnClick(num)} key={num}>{num}</div>
                       })
                    }
                </div>
            </div>
            { inputVisible &&
                <>
            <p className="form-text">
                {text.french.ltrComment}
            </p>
            
                <input type="text" className="text-input" name="ltrComment" placeholder="Veuillez saisir votre réponse ici."/>
            
                </>
            }
        </>
    )
}

export default Ltr;