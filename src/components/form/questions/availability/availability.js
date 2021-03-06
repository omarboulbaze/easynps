import {useState, useEffect} from 'react'

function Availability(props){

    const [rating, setRating] = useState();

    function ratingOnClick(num){
        setRating(num);
    }

    useEffect(() => {

        if(rating !== undefined){
            props.setAvailability(rating)
            props.setFormCompleted(true)
        }else{
            props.setFormCompleted(false)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
       },[rating]);
     

    return(
        <>
            <p className="form-text">
                {props.text.availability}
            </p>
            <div className="rating">
                <div className="rating-text">
                    <span>{props.text.poor}</span>
                    <span>{props.text.excellent}</span>
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