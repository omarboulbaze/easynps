import { useEffect, useState } from "react";

//importing style
import "./product.css";

function Product(props){

// eslint-disable-next-line
    const [productType, setProductType] = useState("");

    function changeProductType(product){
        setProductType(product);
    }

    useEffect(()=>{
        props.setProductType(productType)
        props.setFormCompleted(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[productType])


    return(
        <div className="scan-container">
        <p className="form-text">Which of the categories below best describes the product(s) purchased?</p>
        
        <div>
            <label className="radioContainer" htmlFor="large_appliances">Appliances - Large
                <input type="radio" name="product-type" id="large_appliances" value="large_appliances" onClick={() => changeProductType("large_appliances")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="small_appliances">Appliances - Small
                <input type="radio" name="product-type" id="small_appliances" value="small_appliances" onClick={() => changeProductType("small_appliances")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="camera">Cameras/Camcorders and Related Accessories
                <input type="radio" name="product-type" id="camera" value="camera" onClick={() => changeProductType("camera")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="phone">Cell Phones and Related Accessories
                <input type="radio" name="product-type" id="phone" value="phone" onClick={() => changeProductType("phone")}/>
                <span className="checkmark"></span>
            </label>
            
            <label className="radioContainer" htmlFor="computer">Computers and Related Accessories
                <input type="radio" name="product-type" id="computer" value="computer" onClick={() => changeProductType("computer")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="gaming">Gaming and Related Accessories
                <input type="radio" name="product-type" id="gaming" value="gaming" onClick={() => changeProductType("gaming")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="speaker">Headphones/Portable Speakers and Related Accessories
                <input type="radio" name="product-type" id="speaker" value="speaker" onClick={() => changeProductType("speaker")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="mp3">MP3 players and related accessories
                <input type="radio" name="product-type" id="mp3" value="mp3" onClick={() => changeProductType("mp3")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="office">Office or school supplies and related accessories
                <input type="radio" name="product-type" id="office" value="office" onClick={() => changeProductType("office")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="smart">Smart home and related accessories
                <input type="radio" name="product-type" id="smart" value="smart" onClick={() => changeProductType("smart")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="tablet">Tablet and electronic readers and related accessories
                <input type="radio" name="product-type" id="tablet" value="tablet" onClick={() => changeProductType("tablet")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="tv">Televisions, home theater and related accessories
                <input type="radio" name="product-type" id="tv" value="tv" onClick={() => changeProductType("tv")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="wearable">Techno ready-to-wear and related accessories
                <input type="radio" name="product-type" id="wearable" value="wearable" onClick={() => changeProductType("wearable")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="toys">Toys and related accessories
                <input type="radio" name="product-type" id="toys" value="toys" onClick={() => changeProductType("toys")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="other">Other
                <input type="radio" name="product-type" id="other" value="other" onClick={() => changeProductType("other")}/>
                <span className="checkmark"></span>
            </label>
        </div>

        </div>
    )
}

export default Product;