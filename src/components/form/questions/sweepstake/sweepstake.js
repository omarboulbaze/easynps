
import {useState, useEffect} from 'react'

function Sweepstake(props){

const [formVisible, setFormVisible] = useState(false);
const [response, setResponse] = useState();

useEffect(() => {
    if(response==="yes"){
        setFormVisible(true)
    }else{
        setFormVisible(false)
    }
  }, [response]); // Only re-run the effect if count changes

    return(
        <>
            <p className="form-text">
                {props.text.sweepStake}
            </p>

            <label className="radioContainer" htmlFor="yes">{props.text.yes}
                <input type="radio" name="response" id="yes" value="yes" onClick={()=> setResponse("yes")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="no">{props.text.no}
                <input type="radio" name="response" id="no" value="no" onClick={()=> setResponse("no")}/>
                <span className="checkmark"></span>
            </label>
           
            { formVisible &&
                <>
            <p className="form-text">
                {props.text.sweepStakeDescription}
            </p>

            <p className="form-light-subtext">
                * {props.text.required}
            </p>

            <br/>

            <p className="form-subtext">
                *{props.text.firstName}
            </p>
            <input type="text" className="text-input" name="firstName" placeholder={props.text.placeholder}/>

            <p className="form-subtext mt-5">
                *{props.text.lastName}
            </p>
            <input type="text" className="text-input" name="lastName" placeholder={props.text.placeholder}/>

            <p className="form-subtext mt-5">
                *{props.text.address}
            </p>
            <input type="text" className="text-input" name="address" placeholder={props.text.placeholder}/>
            
            <p className="form-subtext mt-5">
                {props.text.appartement}
            </p>
            <input type="text" className="text-input" name="appartement" placeholder={props.text.placeholder}/>

            <p className="form-subtext mt-5">
                *{props.text.city}
            </p>
            <input type="text" className="text-input" name="city" placeholder={props.text.placeholder}/>

            <p className="form-subtext mt-5">
                *{props.text.province}
            </p>
            <input type="text" className="text-input" name="province" placeholder={props.text.placeholder}/>

            <p className="form-subtext mt-5">
                *{props.text.postalCode}
            </p>
            <input type="text" className="text-input" name="postalCode" placeholder={props.text.placeholder}/>

            <p className="form-subtext mt-5">
                *{props.text.phone}
            </p>
            <input type="text" className="text-input" name="phone" placeholder={props.text.placeholder}/>

            <p className="form-subtext mt-5">
                *{props.text.email}
            </p>
            <input type="text" className="text-input" name="email" placeholder={props.text.placeholder}/>

            <p className="form-subtext mt-5">
                {props.text.byClicking}
            </p>
            
                </>
            }
        </>
    )
}

export default Sweepstake;