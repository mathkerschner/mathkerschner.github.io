import React from "react"
import "../sass/card.scss"
import { Link } from "gatsby"

const Card = (props) => (
    <div className="card justify-content-center" style={{ backgroundColor: props.bgColor }}>
        <Link to={props.link} className="full-link">{props.titlejob}</Link>
        {props.children}
        <div className="hover-desc">
            <span className="desc-job">
                <h3>{props.titlejob}</h3>
                {props.descjob}
            </span>
        </div>
    </div>
)
export default Card