//style
import './form.css';


function BodyForm(props){

    return(

        <div className="form-body">   

	        {props.questionTab[props.question]}

            <div className="button-container">

            
            <button 
            className={props.nextBtnVisible ? "form-button" : "d-none"} 
            onClick={ () => {
                
                if(props.codeValid === false) {
                    props.setAlertType("code");
                    props.setAlertVisible(true);
                }else if(props.codeValid && props.formCompleted ){
                    props.setQuestion(props.question + 1)
                }else{
                    props.setAlertType("form");
                    props.setAlertVisible(true);
                }
                
                }}>{">>"}
            </button> 
            
            
            </div>
            
        </div>
    )}

export default BodyForm;