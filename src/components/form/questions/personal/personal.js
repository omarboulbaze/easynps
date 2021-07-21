

function Personal(props){

    return(
        <>
            <p className="form-text">
                {props.text.personal}
            </p>

            <p className="form-subtext">
                {props.text.gender}
            </p>

            <label className="radioContainer" htmlFor="woman">{props.text.woman}
                <input type="radio" name="gender" id="woman" value="woman"/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="man">{props.text.man}
                <input type="radio" name="gender" id="man" value="man"/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="other">{props.text.other}
                <input type="radio" name="gender" id="other" value="other"/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="preferNotToSay">{props.text.preferNotToSay}
                <input type="radio" name="gender" id="preferNotToSay" value="preferNotToSay"/>
                <span className="checkmark"></span>
            </label>
            
            <p className="form-subtext">
                {props.text.age}
            </p>

            <label className="radioContainer" htmlFor="lessThan18">{props.text.lessThan18}
                <input type="radio" name="age" id="lessThan18" value="lessThan18"/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="from18to24">{props.text.from18to24}
                <input type="radio" name="age" id="from18to24" value="from18to24"/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="from25to34">{props.text.from25to34}
                <input type="radio" name="age" id="from25to34" value="from25to34"/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="from35to44">{props.text.from35to44}
                <input type="radio" name="age" id="from35to44" value="from35to44"/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="from45to54">{props.text.from45to54}
                <input type="radio" name="age" id="from45to54" value="from45to54"/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="from55to64">{props.text.from55to64}
                <input type="radio" name="age" id="from55to64" value="from55to64"/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="from65plus">{props.text.from65plus}
                <input type="radio" name="age" id="from65plus" value="from65plus"/>
                <span className="checkmark"></span>
            </label>
            <label className="radioContainer" htmlFor="preferNotToSay2">{props.text.preferNotToSay}
                <input type="radio" name="age" id="preferNotToSay2" value="preferNotToSay2"/>
                <span className="checkmark"></span>
            </label>
            
            
        </>
    )
}

export default Personal;