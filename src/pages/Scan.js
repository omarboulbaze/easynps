//importing react
import { useEffect, useState } from "react";

//importing components
import Banner from "../components/banner/banner";
import ScanForm from "./scanForm/scanForm";
//pages of scan
import Language from "./scanForm/language/language";
import Product from "./scanForm/product/product";
import Employee from "./scanForm/employee/employee";
import Bill from "./scanForm/bill/bill";
import Confirmation from "./scanForm/confirmation/confirmation";


function Scan(){

    

//setting a personnalized title
    useEffect(()=>{
        document.title = "Easy NPS | Scan!";
    });

    const [pageIndex, setPageIndex] = useState(0);
    const [formCompleted, setFormCompleted] = useState(false);

// The QR code will be generated using these fields (Employee First Name, Employee Last Name, Cash Number, Bill Number, Language spoken, Product Type)
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [cash, setCash] = useState("");
    const [bill, setBill] = useState("");
    const [language, setLanguage] = useState("");
    const [productType, setProductType] = useState("");
    const isSignedUp = localStorage.getItem('firstName') && localStorage.getItem('lastName');


    useEffect(()=>{
        setFormCompleted(false);
        if(pageIndex===1){
            localStorage.setItem('firstName',firstName);
            localStorage.setItem('lastName',lastName);
        }
    },[pageIndex])

    useEffect(()=>{
        if(isSignedUp){
            setFirstName(localStorage.getItem('firstName'));
            setLastName(localStorage.getItem('lastName'));
            setPageIndex(1);
        }else{
           setPageIndex(0)
        }
    },[])

    const scanPageTab = [<Employee setFormCompleted={setFormCompleted} setFirstName={setFirstName} setLastName={setLastName} />,
                        <Bill firstName={firstName} lastName={lastName} setFormCompleted={setFormCompleted} setCash={setCash} setBill={setBill} />,
                        <Language setFormCompleted={setFormCompleted} setLanguage={setLanguage} />,
                        <Product setFormCompleted={setFormCompleted} setProductType={setProductType} />,
                        <Confirmation firstName={firstName} lastName={lastName} cash={cash} bill={bill} language={language} productType={productType} />];

    
    


   
    return(
        <>

        <Banner link="/"/>
        <div className="scan-body">
        <ScanForm scanPageTab={scanPageTab} pageIndex={pageIndex} setPageIndex={setPageIndex} formCompleted={formCompleted}/>
        </div>
        
        </>
        ) 
            } 







export default Scan;