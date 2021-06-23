//style
import './form.css';


function BodyForm(props){

    
    
    return(

        <div className="form-body">   

	        {props.questionTab[props.question]}

            <div className="button-container">
            <button className="form-button" onClick={ ()=> props.setQuestion(props.question + 1)}>{">>"}</button>
            </div>
            
              
            
             

        </div>
    )}

export default BodyForm;