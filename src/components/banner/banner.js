//importing style
import "./banner.css";


//importing logo
import bestbuyLogo from '../../img/bestbuyLogo.png'; 
function Banner() {
    
    return (

            <div className="banner">
            <img src={bestbuyLogo} alt="Besy Buy Logo" className="logo" />
            </div>
       
            );
        }

export default Banner;