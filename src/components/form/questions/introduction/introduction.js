import {useEffect} from 'react'

function Introduction(props){

    useEffect(() => {
        props.setFormCompleted(true);
      });


    return(
        <>
            <p className="form-text">
                        {props.text.introduction}
            </p>
        </>
    )
}
export default Introduction;