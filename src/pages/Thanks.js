import { useState, useEffect } from "react";
import ProgressBar from "../components/progressBar/progressBar";
import Banner from "../components/banner/banner";
import Footer from "../components/footer/footer";
//importing text
import translations from "../translations/text.json";
//fetch URL paramaters
const params = new URLSearchParams(window.location.search);

function Thanks(){

    
    //dynamic language for the web application
    const [text,setText] = useState(translations.french);
    

    //determining which language to be displayed using the GET parameters provided in the URL
    useEffect(()=>{
     
    if(params.get('l')==="eng"){ 
      setText(translations.english) 
      document.title = "Easy NPS | Rate your experience!"
    }else{ 
      setText(translations.french)
      document.title = "Easy NPS | Notez votre expérience!"
    }
    },[])


    return(
        <>

         <Banner/>

         <ProgressBar percentage="100"/>

          <div className="form-body"> 

            <p className="form-text-thanks">
                {text.thanksTitle}
            </p>

            <p className="form-light-subtext">
                {text.thanksMessage}
            </p>

            <p className="form-light-subtext">
                {text.thanksAgain}
            </p>

            <p className="form-light-subtext">
                {text.bestBuyTeam}
            </p> 

        </div>

        <Footer/>

        </>
    )
}

export default Thanks;