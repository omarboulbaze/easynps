//Importing react-scroll
import { Link } from "react-scroll";
//Importing react
import { useEffect, useState } from "react";
//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faQrcode, faCommentDots } from '@fortawesome/free-solid-svg-icons'

//Importing CSS
import './Home.css'
//importing images
import easyNpsLogo from '../../images/easyNpsLogo.png';
import qrCodeScan from '../../images/qrCodeScan.png';
import checkMark from '../../images/checkmark.png';
import trophy from '../../images/trophy.png';
//fetch URL paramaters
const params = new URLSearchParams(window.location.search);

function Home(){

  const [page, setPage] = useState("reduced");

    //Changing theme color dynamically. Blue was by default in index.html
    document.head.querySelector('meta[name="theme-color"]').content = "#ffffff"

    //Checking if the URL is valid
    const urlValid = ()=>{
        if(params.get('l') && params.get('pt') && params.get('a') && params.get('b') && params.get('c')){
          return true
        }else{
          return false
        }
      }
  
      //checking if URL is valid
      useEffect(()=>{
       
        if(urlValid())
        { 
          window.location = `/bestbuy?l=${params.get('l')}&a=${params.get('a')}&b=${params.get('b')}&c=${params.get('c')}&pt=${params.get('pt')}`
        }
        },[])
  
        
return(
    <>

    <div className="banner-home">
      <div>
      <img src={easyNpsLogo} alt="Easy NPS Logo" className="logo"/>
      </div>
          
            {page === "expanded" 
            ? 
            <div className="slide_left">
            <a href="/scan"><button className="menu_button"><FontAwesomeIcon icon={faQrcode}/> Scan</button></a>
            <a href="/reviews"><button className="menu_button"><FontAwesomeIcon icon={faCommentDots}/> Reviews</button></a>
            <button className="user_button" onClick={()=> setPage("reduced")}><FontAwesomeIcon icon={faMinus}/></button>
            </div>
            : 
            <button className="user_button" onClick={()=> setPage("expanded")}><FontAwesomeIcon icon={faPlus}/></button>}
          
    </div>
    <Info/>
    </>
)
}


function Info(){
  return(
<>
    <div className="main center-body">
        <h1 style={{fontSize:"5rem"}}>NPS</h1>
        <h3>is now made simple.</h3>
        <div className="easynps_description">
          <p>Easy NPS is tool that makes filling online surveys easier for customers.</p>
        </div>
        
    </div>

    <div className="button center-body">
        <Link to="second" smooth={true}>
        <button className="learnMore">How does it work ?</button>
        </Link>
    </div>
    
    <div className="container_image_description reverse">

      <div className="image-container">
          <img alt="" src={qrCodeScan}/>
      </div>
      
      <div className="second" id="second">
          <h3>Scan the QR code</h3>
          <div className="center-body">
              <p>A QR code will be generated with each transaction. By scanning it, you automatically access the survey.</p>
          </div>
      </div>

    </div>

    <div className="container_image_description">

      <div className="second" id="second">
          <h3>Fill the survey</h3>
          <div className="center-body">
              <p>Your feedback is more important than ever. Tell us about your experience.</p>
          </div>
      </div>
      <div className="image-container">
          <img alt="" src={checkMark}/>
      </div>

    </div>

    <div className="container_image_description reverse">

      <div className="image-container">
          <img alt="" src={trophy}/>
      </div>
      
      <div className="second" id="second">
          <h3>Submit!</h3>
          <div className="center-body">
              <p>Congratulations! You just submitted your first Easy NPS survey.</p>
          </div>
      </div>

    </div>
    </>
  )
}

export default Home;