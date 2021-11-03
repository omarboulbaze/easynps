
//style
import "./scanForm.css";

function ScanForm(props){

    return(
        <div className="scan-body">
         {props.scanPageTab[props.pageIndex]}
        <div className="container-ok">
            {props.formCompleted  ? <button onClick={()=>props.setPageIndex(props.pageIndex + 1)}>OK</button> : "" }
       
        </div>
        
        </div>
    )
}

export default ScanForm;