import React from "react"
import "../sass/_text.scss"
const TitleSection = ( props ) => (
    <h4 className="title-section">
        {props.title}
        <i className="line mt-65 mb-30"></i>
    </h4>
)
export default TitleSection