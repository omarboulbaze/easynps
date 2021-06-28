


function Overall(props){

    return(
        <>
            <p className="form-text">
                {props.text.overall}
            </p>
            
            <textarea className="text-input" rows = "5" cols = "60" name = "overallComment" placeholder={props.text.placeholder}>
            </textarea>

            <p className="form-subtext">
                {props.text.callUs}
            </p>

           
            
            
        </>
    )
}

export default Overall;