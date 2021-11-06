//importing react
import { useEffect, useState } from "react";

function Employee(props){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [cash, setCash] = useState("");
    const [bill, setBill] = useState("");

    function onChangeFirstName(event){
        setFirstName(event.target.value);
      };

    function onChangeLastName(event){
        setLastName(event.target.value);
      };

    function onChangeCash(event){
        setCash(event.target.value);
      };

    function onChangeBill(event){
        setBill(event.target.value);
      };

      //checking if the inputs are completed before displaying OK button
    useEffect(()=>{
        if(firstName && lastName && cash && bill ){
            props.setFormCompleted(true);
            props.setFirstName(firstName.toUpperCase());
            props.setLastName(lastName.toUpperCase());

            //checking if cash number is on this format XXX. For example cash number 1 will be 001, number 56 will be 056
            if(cash.length === 1){
              props.setCash("00"+cash);
            }else if(cash.length === 2){
              props.setCash("0"+cash);
            }else{
              props.setCash(cash);
            }
            
            //checking if bill number is on this format XXXX.
            if(bill.length === 1){
              props.setBill("000"+bill);
            }else if(bill.length === 2){
              props.setBill("00"+bill);
            }else if(bill.length === 3){
              props.setBill("0"+bill);
            }else{
              props.setBill(bill);
            }

        }else{
            props.setFormCompleted(false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[firstName, lastName, cash, bill])

    return(
        <div className="scan-container">
          <p className="form-text">Remplissez les champs suivants :</p>
          <div>
            <input type="text" className="text-input my-1" name="firstName" placeholder="Prénom" value={firstName} onChange={onChangeFirstName} required />
            <input type="text" className="text-input my-1" name="lastName" placeholder="Nom" value={lastName} onChange={onChangeLastName} required />
            <input type="number" inputMode="numeric" className="text-input my-1" name="cash" placeholder="Caisse" value={cash} onChange={onChangeCash} required />
            <input type="number" inputMode="numeric" className="text-input my-1" name="bill" placeholder="Numéro de la facture" value={bill} onChange={onChangeBill} required />
          </div>
        </div>
    )
}

export default Employee;