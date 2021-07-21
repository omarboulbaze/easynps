//css
import './alert.css'
//importing fontawesome
//it's better to import icons individually to avoid performance issues
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function Alert(props){

    return(
        props.alertVisible &&
        <>
        <div className="container-alert">
            {props.text.error}
            <div className="btn-close" onClick={()=> props.setAlertVisible(false)}>
            <FontAwesomeIcon icon={faTimes} />
            </div>
            
        </div>
        </>
    )
}

export default Alert;