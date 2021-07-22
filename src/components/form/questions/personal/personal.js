import { useEffect, useState} from 'react'

function Personal(props){

    const [gender, setGender] = useState("Prefer not to answer");
    const [age, setAge] = useState("Prefer not to answer");

    useEffect(()=>{

props.setGender(gender)

       // eslint-disable-next-line react-hooks/exhaustive-deps
    },[gender]);

    useEffect(()=>{

props.setAge(age)

       // eslint-disable-next-line react-hooks/exhaustive-deps
    },[age]);

    return(
        <>
            <p className="form-text">
                {props.text.personal}
            </p>

            <p className="form-subtext">
                {props.text.gender}
            </p>

            <label className="radioContainer" htmlFor="female">{props.text.woman}
                <input type="radio" name="gender" id="female" value="female" onClick={() => setGender("Female")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="male">{props.text.man}
                <input type="radio" name="gender" id="male" value="male" onClick={() => setGender("Male")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="other">{props.text.other}
                <input type="radio" name="gender" id="other" value="other" onClick={() => setGender("Other")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="preferNotToSay">{props.text.preferNotToSay}
                <input type="radio" name="gender" id="preferNotToSay" value="preferNotToSay" onClick={() => setGender("Prefer not to answer")}/>
                <span className="checkmark"></span>
            </label>
            
            <p className="form-subtext">
                {props.text.age}
            </p>

            <label className="radioContainer" htmlFor="lessThan18">{props.text.lessThan18}
                <input type="radio" name="age" id="lessThan18" value="lessThan18" onClick={() => setAge("Under 18 years old")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="from18to24">{props.text.from18to24}
                <input type="radio" name="age" id="from18to24" value="from18to24" onClick={() => setAge("18-24 years old")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="from25to34">{props.text.from25to34}
                <input type="radio" name="age" id="from25to34" value="from25to34" onClick={() => setAge("25-34 years old")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="from35to44">{props.text.from35to44}
                <input type="radio" name="age" id="from35to44" value="from35to44" onClick={() => setAge("35-44 years old")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="from45to54">{props.text.from45to54}
                <input type="radio" name="age" id="from45to54" value="from45to54" onClick={() => setAge("45-54 years old")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="from55to64">{props.text.from55to64}
                <input type="radio" name="age" id="from55to64" value="from55to64" onClick={() => setAge("55-64 years old")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="from65plus">{props.text.from65plus}
                <input type="radio" name="age" id="from65plus" value="from65plus" onClick={() => setAge("65+")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="preferNotToSay2">{props.text.preferNotToSay}
                <input type="radio" name="age" id="preferNotToSay2" value="preferNotToSay2" onClick={() => setAge("Prefer not to answer")}/>
                <span className="checkmark"></span>
            </label>
            
            
        </>
    )
}

export default Personal;