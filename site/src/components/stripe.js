import React from "react"
import { Link } from "gatsby"


const Stripe = (props) => (
    <div id="start-project" className="full-card">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
           <Link to="contato" className="title-start">{props.text}</Link>
        </div>
    </div>

)
export default Stripe