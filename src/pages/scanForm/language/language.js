import { useEffect, useState } from "react";


function Language(props){

    const [language, setLanguage] = useState("");


    function changeLanguage(l){
        setLanguage(l);
    }

    useEffect(()=>{
        props.setLanguage(language);
        props.setFormCompleted(true);
// eslint-disable-next-line react-hooks/exhaustive-deps
    },[language])

    return(
        <div className="scan-container">
        <p className="form-text big center">What language did you use during your interaction with the customer?</p>
        
        <div className="my-4">
        <button className={language==="fr" ? "scan-button active" : "scan-button"}  onClick={()=> changeLanguage("fr") } >French</button>
        <button className={language==="eng" ? "scan-button active" : "scan-button"}  onClick={()=> changeLanguage("eng")} >English</button>
        </div>

        </div>
    )
}

export default Language;