//importing react
import { useState } from "react";

import Banner from "../components/banner/banner";
import "./Scan.css";

function Scan(){

    const [question, setQuestion] = useState(0);
    console.log(question);

    return(
        <>
        <Banner link="/"/>
        <div className="scan-body">
        <Questions number="1"/>
        <button onClick={()=>setQuestion(question+1)}>OK</button>
        </div>
        </>
        ) 
            }

function Questions(props){
    return(
        <>
        
        </>
        )
                    }






export default Scan;