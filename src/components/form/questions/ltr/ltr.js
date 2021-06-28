
import {useState} from 'react'

function Ltr(props){

const [inputVisible, setInputVisible] = useState(false);
const [rating, setRating] = useState();

function ratingOnClick(num){
    setRating(num);
    setInputVisible(true);
}

    return(
        <>
            <p className="form-text">
                {props.text.ltr}
            </p>
            <div className="rating">
                <div className="rating-text">
                    <span>{props.text.notLikely}</span>
                    <span>{props.text.extremeLikely}</span>
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
                {props.text.ltrComment}
            </p>
            
                <input type="text" className="text-input" name="ltrComment" placeholder={props.text.placeholder}/>
                <span className="textarea" role="textbox" contentEditable></span>
            
                </>
            }
        </>
    )
}

export default Ltr;