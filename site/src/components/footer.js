import React from "react"
import { Link } from "gatsby"
import Nav from "./nav"
import FacebookIcon from "../images/icons/social-facebook.svg"
import InstagramIcon from "../images/icons/social-instagram.svg"
import LinkedinIcon from "../images/icons/social-linkedin.svg"
import Curriculum from "../docs/MatheusKerschner-curriculo.pdf"


const Footer = () => (
    <footer id="footer" className="container-fluid">
        <div className="row justify-content-center">
            <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10 text-center">
                <h5 className="color-purepink">Você me encontra aqui</h5>
                <ul className="social-footer">
                    <li>
                        <a href="https://www.linkedin.com/in/matheuskerschner/" rel="noopener noreferrer" target="_blank">
                            <img src={LinkedinIcon} alt="icon Linkedin" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/matheus.kerschner" rel="noopener noreferrer" target="_blank">
                            <img src={FacebookIcon} alt="icon facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/mathkerschner/" rel="noopener noreferrer" target="_blank">
                            <img src={InstagramIcon} alt="icon instagram" />
                        </a>
                    </li>
                </ul>
                <p>
                    <a href="tel:(51) 982.264.591">(51) 982.264.591</a> | 
                    <a href="mailto:matheus.kerschner.v@gmail.com">matheus.kerschner.v@gmail.com</a>
                </p>
                <Nav>
                    <li><Link activeClassName="active-link" to="/portfolio/">Portfólio</Link></li>
                    <li><Link activeClassName="active-link" to="/contato/">Contato</Link></li>
                    <li><a href={Curriculum} target="_blank" rel="noopener noreferrer">Currículo</a></li>
                </Nav>
                <span className="copyright">Copyright ©2020 All rights reserved - Developed by Matheus Kerschner</span>
            </div>
        </div>
    </footer>
)
export default Footer
