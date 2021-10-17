//importing style
import "./banner.css";


//importing logo
import bestbuyLogo from '../../images/bestbuyLogo.png'; 
function Banner(props) {
    
    return (

            <div className="banner">
            <a href={props.link}><img src={bestbuyLogo} alt="Besy Buy Logo" className="logo" /></a>
            </div>
       
            );
        }

export default Banner;