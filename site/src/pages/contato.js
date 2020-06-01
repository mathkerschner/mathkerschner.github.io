import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroArea from "../components/heroarea"
import FormContato from "../components/formcontato"
import TitleSection from "../components/titlesection"
import ProfileImg from "../images/profile-img.png"

const ContactPage = () => (
    <Layout>
        <SEO title="Contato - Matheus Kerschner" />
        <HeroArea herotext="Envie uma mensagem pelo formulário ou nos contatos abaixo." />
        <div className="container-fluid">
            <div className="row justify-content-center mb-160 mt-65">
                <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10">
                    <div className="row">
                        <div className="col-sm-7 col-md-7 col-lg-7 col-xl-7 mb-30">
                            <TitleSection title="Vamos conversar" />
                            <div className="row align-items-center mt-65">
                                <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                    <img src={ProfileImg} alt="" />
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <p>Estou sempre pronto para ouvir sobre novos negócios e conversar.
                                    A questão é como fornecer algo significativo e valioso para o seu negócio e seu público.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                    <h6 className="color-purepink">Experiência</h6>
                                    <ul>
                                        <li>6 anos</li>
                                    </ul>
                                </div>
                                <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                    <h6 className="color-purepink">Trabalho com</h6>
                                    <ul>
                                        <li>FIgma</li>
                                        <li>Adobe XD</li>
                                        <li>Illustrator</li>
                                        <li>Photoshop</li>
                                        <li>Html, css & js</li>
                                        <li>React.js</li>
                                    </ul>
                                </div>
                                <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                    <h6 className="color-purepink">Background</h6>
                                    <ul>
                                        <li>UX Design</li>
                                        <li>UX Research</li>
                                        <li>UI Design</li>
                                        <li>Dev. Front-end</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5 mb-30">
                            <FormContato />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)
export default ContactPage