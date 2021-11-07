import { useState } from "react";
import QRCode from "react-qr-code";

//importing style
import "./confirmation.css";

function Confirmation(props){

    const [qrCodeVisible, setQrCodeVisible] = useState(false);

    //declaring variable used to make the group A,B,C numbers

    const firstNameArray = props.firstName.split('');
    const lastNameArray = props.lastName.split('');
    const cashArray = props.cash.split('');
    const billArray = props.bill.split('');

    const today = new Date(Date.now());

    const monthArray = ()=>{
        //JavaScript method getMonth() in this case starts a month at 0 (January) and finish at December (11), so I manually added one to avoid confusions and bugs
        let getMonthPlusOne = today.getMonth() + 1
        if(getMonthPlusOne.toString().length === 1) {
            return "0"+ getMonthPlusOne
        }else{
            return getMonthPlusOne.toString().split('');
        }
    }

    const dayArray = ()=>{
        if(today.getDate().toString().length === 1) {
            return "0"+today.getDate()
        }else{
            return today.getDate().toString().split('');
        }
    }

    const yearArray = ()=>{
       return today.getFullYear().toString().split('');
    }

    
    //creating the NPS code based on the informations entered
    const groupA = dayArray()[0]+"9"+dayArray()[1]+cashArray[1]+cashArray[2]+billArray[0] || "";
    const groupB = 6+billArray[1]+billArray[2]+billArray[3] || "";
    const groupC = monthArray()[0]+"2"+monthArray()[1]+yearArray()[2]+yearArray()[3]+0+firstNameArray[2]+lastNameArray[0]+firstNameArray[0]+firstNameArray[1]+"00" || "";
    
    //Data stored in the QR code : l= Language, pt= Product Type, a= Group A, b= Group B, c= Group C
    const qrCodeLink = window.location.origin + `/?l=${props.language}&a=${groupA}&b=${groupB}&c=${groupC}&pt=${props.productType}`
    return(
        <div className="scan-container">
        <p className="form-text">Confirmez les informations suivantes :</p>
        
        <div className="confirmation-container">
            <div className="input-group">
                <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Groupe A</span>
                </div>
                <input type="text" className="form-control" value={groupA} readOnly/>
            </div>
            <div className="input-group">
                <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Groupe B</span>
                </div>
                <input type="text" className="form-control" value={groupB} readOnly/>
            </div>
            <div className="input-group">
                <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Groupe C</span>
                </div>
                <input type="text" className="form-control" value={groupC} readOnly/>
            </div>
        </div>

        <div className="container-ok">
        {!qrCodeVisible && <button className="scan-button" onClick={()=>setQrCodeVisible(true)}>Générer le code QR</button>}
        {qrCodeVisible && <QRCode value={qrCodeLink} />}
        </div>

       
        

        </div>
    )
}

export default Confirmation;