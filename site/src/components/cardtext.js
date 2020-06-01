import React from "react"
import "../sass/_icon.scss"

const CardText = (props) => (
    <div className="row">
        <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
            <i className="icon">
                {props.children}
            </i>
        </div>
        <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10">
            <h5 className="color-purepink">{props.title}</h5>
            <div>{props.text}</div>
        </div>
    </div>
)
export default CardText