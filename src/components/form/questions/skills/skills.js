import {useState} from 'react'

function Skills(props){

    const [rating1, setRating1] = useState();
    const [rating2, setRating2] = useState();

    function ratingOnClick1(num){
        setRating1(num);
    }

    function ratingOnClick2(num){
        setRating2(num);
    }

    return(
        <>
            <p className="form-text">
                {props.text.rating}
            </p>
            <div className="rating">

                <p className="form-subtext">
                {props.text.caring}
                </p>

                <div className="rating-text">
                    <span>{props.text.poor}</span>
                    <span>{props.text.excellent}</span>
                </div>

                <div className="rating-buttons">
                    {
                       [0,1,2,3,4,5,6,7,8,9,10].map( num => { 
                        return <div className={`radio ${rating1 === num ? "checked" : ""}`} onClick={() => ratingOnClick1(num)} key={num}>{num}</div>
                    })
                    }
                </div>
                
                <p className="form-subtext">
                {props.text.expert}
                </p>

                <div className="rating-text">
                    <span>{props.text.poor}</span>
                    <span>{props.text.excellent}</span>
                </div>
                <div className="rating-buttons">
                    {
                       [0,1,2,3,4,5,6,7,8,9,10].map( num => { 
                        return <div className={`radio ${rating2 === num ? "checked" : ""}`} onClick={() => ratingOnClick2(num)} key={num}>{num}</div>
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default Skills;