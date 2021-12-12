//importing react
import { useEffect, useState } from "react";

function Employee(props){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    function onChangeFirstName(event){
        setFirstName(event.target.value);
      };

    function onChangeLastName(event){
        setLastName(event.target.value);
      };

    
      //checking if the inputs are completed before displaying OK button
    useEffect(()=>{
        if(firstName && lastName ){
            props.setFormCompleted(true);
            props.setFirstName(firstName);
            props.setLastName(lastName);

        }else{
            props.setFormCompleted(false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[firstName, lastName])

    return(
        <div className="scan-container">
          <p className="form-text">Merci d'avoir utilisé Easy NPS. Dans le but de faciliter les futures transactions, vos informations seront sauvegardées sur cet appareil.</p>
          <div>
            <input type="text" className="text-input my-1" name="firstName" placeholder="Prénom" value={firstName} onChange={onChangeFirstName} required />
            <input type="text" className="text-input my-1" name="lastName" placeholder="Nom" value={lastName} onChange={onChangeLastName} required />
          </div>
        </div>
    )
}

export default Employee;