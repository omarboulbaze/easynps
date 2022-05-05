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
        if( (firstName !== "") && (lastName !== "") ){
            props.setFormCompleted(true);
            props.setFirstName(firstName);
            props.setLastName(lastName);

        }else{
            props.setFormCompleted(false)
        }
    })

    return(
        <div className="scan-container">
          <p className="form-text center"><span style={{fontSize:"2rem"}}>Thank you for using Easy NPS.</span><br/><br/> In order to facilitate future transactions, this information will only be stored locally on this device.</p>
          <div>
            <input type="text" className="text-input my-1" name="firstName" placeholder="First Name" value={firstName} onChange={onChangeFirstName} required />
            <input type="text" className="text-input my-1" name="lastName" placeholder="Last Name" value={lastName} onChange={onChangeLastName} required />
          </div>
        </div>
    )
}

export default Employee;