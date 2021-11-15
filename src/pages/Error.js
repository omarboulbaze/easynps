import { useEffect, useState } from "react";
import Banner from "../components/banner/banner";
import Footer from "../components/footer/footer";
//importing text
import translations from "../translations/text.json";
//fetch URL paramaters
const params = new URLSearchParams(window.location.search);

function Error(){

    //dynamic language for the web application
    const [text,setText] = useState(translations.french);
    //determining which language to be displayed using the GET parameters provided in the URL
    useEffect(()=>{
     
        if(params.get('l')==="eng"){ 
          setText(translations.english) 
          document.title = "Easy NPS | Page not found"
        }else{ 
          setText(translations.french)
          document.title = "Easy NPS | Page introuvable"
        }
        },[])


    return(
        <>
        <Banner/>
             <div className="form-body"> 

            <p className="form-text-thanks">
            {text.errorTitle}
            </p>

            <p className="form-light-subtext">
            {text.errorDescription}
            </p>

        </div>
        <Footer/>
        </>
    )
}

export default Error;