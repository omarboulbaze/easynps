
import {useEffect, useState} from 'react'



function Overall(props){

    const [feedback, setFeedback] = useState();

useEffect(()=> {
    props.setFeedback(feedback);
       // eslint-disable-next-line react-hooks/exhaustive-deps
},[feedback])

function onChangeHandler(event){
    setFeedback(event.target.value);
  };

    return(
        <>
            <p className="form-text">
                {props.text.overall}
            </p>
            
            <textarea className="text-input" rows = "5" cols = "60" name = "overallComment" placeholder={props.text.placeholder} value={feedback} onChange={onChangeHandler}>
            </textarea>

            <p className="form-subtext">
                {props.text.callUs}
            </p>

           
            
            
        </>
    )
}

export default Overall;