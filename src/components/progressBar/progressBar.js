import './progressBar.css';

function ProgressBar(props){


    return(
<div>
    <div className="background">
        <div className="progress">
            <div className="progress-bar progress-bar-animated bg-success" role="progressbar" style={{width:props.percentage + "%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div className="progress-text">{props.percentage}%</div>
    </div>
</div>
    )

}

export default ProgressBar;