
import {useState, useEffect} from 'react'

function Sweepstake(props){

const [formVisible, setFormVisible] = useState(false);
const [response, setResponse] = useState();

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [address, setAddress] = useState("");
const [app, setApp] = useState("");
const [city, setCity] = useState("");
const [province, setProvince] = useState("");
const [postalCode, setPostalCode] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");


function isFormComplete(){
    if(firstName && lastName && address && city && province && postalCode && phone && email){
        return true
    }else{
        return false
    }
}

useEffect(() => {
    if(response===undefined){
       props.setFormCompleted(false);
    }else{
        if(response==="no"){
            props.setFormCompleted(true)
        }else{
            if(isFormComplete()){
                props.setFormCompleted(true)
            }else{
                props.setFormCompleted(false)
            }
        }
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response, firstName, lastName, address, city, province, postalCode, phone, email]); 

useEffect(() => {
    if(response==="yes"){
        setFormVisible(true)
    }else{
        setFormVisible(false)
    }
  }, [response]); // Only re-run the effect if response changes

  function onChangeFirstName(event){
    setFirstName(event.target.value);
  };

  function onChangeLastName(event){
    setLastName(event.target.value);
  };

  function onChangeAddress(event){
    setAddress(event.target.value);
  };

  function onChangeApp(event){
    setApp(event.target.value);
  };

  function onChangeCity(event){
    setCity(event.target.value);
  };

  function onChangeProvince(event){
    setProvince(event.target.value);
  };

  function onChangePostalCode(event){
    setPostalCode(event.target.value);
  };

  function onChangePhone(event){
    setPhone(event.target.value);
  };

  function onChangeEmail(event){
    setEmail(event.target.value);
  };


  useEffect(()=> {
    props.setFirstName(firstName);
       // eslint-disable-next-line react-hooks/exhaustive-deps
},[firstName])

useEffect(()=> {
    props.setLastName(lastName);
       // eslint-disable-next-line react-hooks/exhaustive-deps
},[lastName])

useEffect(()=> {
    props.setAddress(address);
       // eslint-disable-next-line react-hooks/exhaustive-deps
},[address])

useEffect(()=> {
    props.setApp(app);
       // eslint-disable-next-line react-hooks/exhaustive-deps
},[app])

useEffect(()=> {
    props.setCity(city);
       // eslint-disable-next-line react-hooks/exhaustive-deps
},[city])

useEffect(()=> {
    props.setProvince(province);
       // eslint-disable-next-line react-hooks/exhaustive-deps
},[province])

useEffect(()=> {
    props.setPostal(postalCode);
       // eslint-disable-next-line react-hooks/exhaustive-deps
},[postalCode])

useEffect(()=> {
    props.setPhoneNumber(phone);
       // eslint-disable-next-line react-hooks/exhaustive-deps
},[phone])

useEffect(()=> {
    props.setEmail(email);
       // eslint-disable-next-line react-hooks/exhaustive-deps
},[email])

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
            <input type="text" className="text-input" name="firstName" placeholder={props.text.placeholder} value={firstName} onChange={onChangeFirstName}/>

            <p className="form-subtext mt-5">
                *{props.text.lastName}
            </p>
            <input type="text" className="text-input" name="lastName" placeholder={props.text.placeholder} value={lastName} onChange={onChangeLastName}/>

            <p className="form-subtext mt-5">
                *{props.text.address}
            </p>
            <input type="text" className="text-input" name="address" placeholder={props.text.placeholder} value={address} onChange={onChangeAddress}/>
            
            <p className="form-subtext mt-5">
                {props.text.appartement}
            </p>
            <input type="text" className="text-input" name="appartement" placeholder={props.text.placeholder} value={app} onChange={onChangeApp}/>

            <p className="form-subtext mt-5">
                *{props.text.city}
            </p>
            <input type="text" className="text-input" name="city" placeholder={props.text.placeholder} value={city} onChange={onChangeCity}/>

            <p className="form-subtext mt-5">
                *{props.text.province}
            </p>
            <input type="text" className="text-input" name="province" placeholder={props.text.placeholder} value={province} onChange={onChangeProvince}/>

            <p className="form-subtext mt-5">
                *{props.text.postalCode}
            </p>
            <input type="text" className="text-input" name="postalCode" placeholder={props.text.placeholder} value={postalCode} onChange={onChangePostalCode}/>

            <p className="form-subtext mt-5">
                *{props.text.phone}
            </p>
            <input type="text" className="text-input" name="phone" placeholder={props.text.placeholder} value={phone} onChange={onChangePhone}/>

            <p className="form-subtext mt-5">
                *{props.text.email}
            </p>
            <input type="text" className="text-input" name="email" placeholder={props.text.placeholder} value={email} onChange={onChangeEmail}/>

            <p className="form-subtext mt-5">
                {props.text.byClicking}
            </p>
            
                </>
            }
        </>
    )
}

export default Sweepstake;