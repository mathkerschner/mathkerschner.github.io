import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../sass/header.scss"
import Nav from "./nav"
import Curriculum from "../docs/MatheusKerschner-curriculo.pdf"

const Header = ({ siteTitle }) => (
  <header id="header" className="container-fluid mb-60">
    <div className="row justify-content-center">
      <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10">
        <div className="row align-items-center">
          <div className="col-sm-8 col-md-6 col-lg-6 col-xl-6">
            <h1 id="logo">
              <Link to="/">
                {siteTitle}
              </Link>
            </h1>
          </div>
          <div className="col-sm-4 col-md-6 col-lg-6 col-xl-6 ">
            <Nav classname="text-right">
              <li><Link activeClassName="active-link" to="/">Inicio</Link></li>
              <li><Link activeClassName="active-link" to="/portfolio/">Portfólio</Link></li>
              <li><Link activeClassName="active-link" to="/contato/">Contato</Link></li>
              <li><a href={Curriculum} target="_blank" rel="noopener noreferrer">Currículo</a></li>
            </Nav>
          </div>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
