//importing react
import { useEffect, useState } from "react";
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAd, faAddressBook, faTrash, faTrashAlt, faTrashRestore, faUserAlt, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faAcquisitionsIncorporated } from "@fortawesome/free-brands-svg-icons";

function Bill(props){

    
    const [cash, setCash] = useState("");
    const [bill, setBill] = useState("");

  
    function onChangeCash(event){
        setCash(event.target.value);
      };

    function onChangeBill(event){
        setBill(event.target.value);
      };

    function deleteAccount(){
      localStorage.clear();
      document.location = "/scan"
    }

      //checking if the inputs are completed before displaying OK button
    useEffect(()=>{
        if(cash && bill ){
            props.setFormCompleted(true);

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
    },[cash, bill])

    return(
        <div className="scan-container">
          <button className="btn_disconnect" title="Supprimer" onClick={()=>{deleteAccount()}}><FontAwesomeIcon icon={faUserAlt} /><sup style={{fontSize: "1rem", color:"#dc3545"}}><FontAwesomeIcon icon={faTrash} /></sup></button>
           <p style={{fontSize: "2rem", color:"#212529", fontWeight:"bold"}}>{props.firstName} {props.lastName}</p>
          <p className="form-text">Entrez les informations suivantes</p>
          <div>
            <input type="number" inputMode="numeric" className="text-input my-1" name="cash" placeholder="Caisse" value={cash} onChange={onChangeCash} required />
            <input type="number" inputMode="numeric" className="text-input my-1" name="bill" placeholder="Numéro de la facture" value={bill} onChange={onChangeBill} required />
          </div>
        </div>
    )
}

export default Bill;