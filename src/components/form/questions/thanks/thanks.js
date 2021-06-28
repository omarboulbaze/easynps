


function Thanks(props){

    return(
        <>
            <p className="form-text-thanks">
                {props.text.thanksTitle}
            </p>

            <p className="form-light-subtext">
                {props.text.thanksMessage}
            </p>
            <p className="form-light-subtext">
                {props.text.thanksAgain}
            </p>
            <p className="form-light-subtext">
                {props.text.bestBuyTeam}
            </p>

           
            
            
        </>
    )
}

export default Thanks;