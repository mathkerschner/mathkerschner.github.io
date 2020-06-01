import React from "react"
import TitleSection from "./titlesection"
import TitleSecun from "./titlesecun"
import CardText from "./cardtext"

import LayoutSvg from "../images/icons/layout.svg"
import ThinkSvg from "../images/icons/think.svg"
import CodingSvg from "../images/icons/coding.svg"
import PencilSvg from "../images/icons/pencil.svg"

const WeDo = () => (
    <div id="wedo" className="container-fluid mb-30">
        <div className="row justify-content-center mb-160">
            <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 mb-30">
                        <TitleSection title="O que fazemos" />
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 mb-30">
                        <TitleSecun title="Somos uma empresa que desenvolve produtos e negócios digitais com foco na usabilidade e no usuário." />
                        <div className="row">
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 mb-30">
                                <CardText 
                                    title="Design de interfaces"
                                    text={[<p>Desenvolvemos projetos de UX e UI centrados nos usuários,
                                        atuando na concepção de produtos novos ou reestruturando
                                        sistemas já existentes.</p>]}>
                                    <img src={LayoutSvg} alt="icone LayoutSvg" />
                                </CardText>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 mb-30">
                                <CardText
                                    title="Negócios digitais"
                                    text={[<p>Criação e desenvolvimento de negócios digitais,
                                        entregamos tecnologia,
                                        design, estratégia e inteligencia
                                        para o seu negócio.</p>]}>
                                    <img src={ThinkSvg} alt="icone ThinkSvg" />
                                </CardText>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 mb-30">
                                <CardText
                                    title="Coding"
                                    text={[<p>Desenvolvimento de projetos web e aplicativos móveis.</p>]}>
                                    <img src={CodingSvg} alt="icone CodingSvg" />
                                </CardText>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 mb-30">
                                <CardText
                                    title="Design"
                                    text={[<p>Identidade visual, Design de documentação, Interfaces de usuário,
                                          Criação de Websites.</p>]}>
                                    <img src={PencilSvg} alt="icone PencilSvg" />
                                </CardText>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default WeDo