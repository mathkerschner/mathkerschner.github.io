import React, { useState } from "react"
import "../sass/nav.scss"

const Nav = (props) => {
    const [isExpanded, toggleExpansion] = useState(false)
    return (
        <nav className={props.classname + " " + `${isExpanded ? `block` : `hidden`}`}>
            <ul className="mobile-menu">
                {props.children}
            </ul>
            <span className="close-nav-mobile" aria-hidden="true" onClick={() => toggleExpansion(!isExpanded)}>Fechar</span>
            <span className="nav-mobile" aria-hidden="true" onClick={() => toggleExpansion(!isExpanded)}>Menu</span>
        </nav>   
    )
}
export default Nav