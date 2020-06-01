import React from "react"
import TitleSection from "./titlesection"
import CardText from "./cardtext"
import Curriculum from "../docs/MatheusKerschner-curriculo.pdf"

const Experience = () => (
    <div id="experience" className="container-fluid mb-30">
        <div className="row justify-content-center mb-160">
            <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-30">
                        <TitleSection title="Experiências" />
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 mb-30">
                            <CardText
                                title="UI / UX Designer" 
                                text={[<h6><strong>Freelancer</strong></h6>,
                                <p>Atuo em desenvolver projetos de produtos digitais para diferentes clientes, faço
                                a produção de artefatos de UX (personas, wireframes, jornadas de usuários, avaliações
                                de interface, design de interfaces, estudos de usabilidade e testes). Como UI Designer faço
                                a criação de interfaces no Adobe XD e Figma, também executo a criação das interfaces em código
                                utilizando html, css, js e bibliotecas como React entre outras.
                                </p>]}
                                />
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 mb-30">
                            <CardText
                                title="UI / UX Designer / Desenvolvedor" 
                                text={[<h6><strong>Conceptu protótipos e sistemas</strong></h6>,
                                <p>Junto com o time de desenvolvimento e trabalhando com metodologias ágeis, 
                                    desempenhei o papel de UX/UI Designer realizando estudos e melhorias nas experiência 
                                    das interfaces dos produtos digitais, gerando artefatos como jornadas de usuário, 
                                    wireframes, personas, fluxos, mockups entre outros.</p>]}
                                />
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 mb-30">
                            <CardText
                                title="UX / UI Designer" 
                                text={[<h6><strong>Prismatec</strong></h6>,
                                <p>Exercendo o papel de UX/UI Designer realizei estudos para melhoria nos produtos da empresa, 
                                    com o auxílio de questionários e escutas de atendimento, para desenvolver padrões de interação 
                                    para sites, sistemas e aplicativos móveis, também realizei o desenvolvimento de algumas interfaces utilizando html, css e js. 
                                    Cultivei a cultura de UX dentro da empresa.</p>]}
                                />
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 mb-30">
                            <CardText
                                title="Web Designer" 
                                text={[<h6><strong>D Loja Virtual</strong></h6>,
                                <p>Trabalhando como web designer fui o responsável por realizar estudos e a criação do layout mobile 
                                    padrão para duas plataformas de e-commerce, desenvolvendo e entregando documentos e técnicas como card sorting, 
                                    protótipos em papel, testes de usabilidade, wireframes e os códigos em html, css e js para os layouts.</p>]}
                                />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-30">
                        <a href={Curriculum} target="_blank" rel="noopener noreferrer" className="link">Ver currículo completo <i className="icon icon-new-tab"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default Experience