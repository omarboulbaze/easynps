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
        <p className="form-text">Laquelle des catégories ci-dessous décrit le mieux le ou les produits achetés?</p>
        
        <div>
            <label className="radioContainer" htmlFor="large_appliances">Électroménagers - Gros
                <input type="radio" name="product-type" id="large_appliances" value="large_appliances" onClick={() => changeProductType("large_appliances")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="small_appliances">Électroménagers - Petit
                <input type="radio" name="product-type" id="small_appliances" value="small_appliances" onClick={() => changeProductType("small_appliances")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="camera">Appareils photo/caméscopes et accessoires connexes
                <input type="radio" name="product-type" id="camera" value="camera" onClick={() => changeProductType("camera")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="phone">Téléphones cellulaires et accessoires connexes
                <input type="radio" name="product-type" id="phone" value="phone" onClick={() => changeProductType("phone")}/>
                <span className="checkmark"></span>
            </label>
            
            <label className="radioContainer" htmlFor="computer">Ordinateurs et accessoires connexes
                <input type="radio" name="product-type" id="computer" value="computer" onClick={() => changeProductType("computer")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="gaming">Jeux vidéos et accessoires connexes
                <input type="radio" name="product-type" id="gaming" value="gaming" onClick={() => changeProductType("gaming")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="speaker">Écouteurs/Haut-parleurs portatifs et accessoires connexes
                <input type="radio" name="product-type" id="speaker" value="speaker" onClick={() => changeProductType("speaker")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="mp3">Lecteurs MP3 et accessoires connexes
                <input type="radio" name="product-type" id="mp3" value="mp3" onClick={() => changeProductType("mp3")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="office">Fournitures de bureau ou scolaire et accessoires connexes
                <input type="radio" name="product-type" id="office" value="office" onClick={() => changeProductType("office")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="smart">Maison intelligente et accessoires connexes
                <input type="radio" name="product-type" id="smart" value="smart" onClick={() => changeProductType("smart")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="tablet">Tablette et lecteurs électronique et accessoires connexes
                <input type="radio" name="product-type" id="tablet" value="tablet" onClick={() => changeProductType("tablet")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="tv">Téléviseurs, cinéma maison et accessoires connexes
                <input type="radio" name="product-type" id="tv" value="tv" onClick={() => changeProductType("tv")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="wearable">Techno prêt-à-porter et accessoires connexes
                <input type="radio" name="product-type" id="wearable" value="wearable" onClick={() => changeProductType("wearable")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="toys">Jouets et accessoires connexes
                <input type="radio" name="product-type" id="toys" value="toys" onClick={() => changeProductType("toys")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="other">Autres
                <input type="radio" name="product-type" id="other" value="other" onClick={() => changeProductType("other")}/>
                <span className="checkmark"></span>
            </label>
        </div>

        </div>
    )
}

export default Product;