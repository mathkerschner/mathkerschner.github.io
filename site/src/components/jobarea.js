import React from "react"
import { Link } from "gatsby"

import Card from "./card"
import JuntasCover from "../images/jobs/juntas/juntas-cover.png"
import TeachrCover from "../images/jobs/teachr/teachr-cover.png"
import MettingsCover from "../images/jobs/mettings/mettings-cover.png"
import UnicredCover from "../images/jobs/unicred/unicred-cover.png"
import AssisCover from "../images/jobs/assis/assis-cover.png"


const JobsArea = () => (
    <div id="jobsarea" className="container-fluid mb-160">
        <div className="row justify-content-center">
            <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10">
                <div className="row justify-content-center">
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 mb-30">
                        <Card
                            link="projeto-juntas"
                            titlejob="Juntas"
                            descjob="Uma rede de proteção e empoderamento">
                            <img src={JuntasCover} alt="juntas capa" />
                        </Card>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 mb-30">
                        <Card
                            link="projeto-teachr"
                            titlejob="Teachr"
                            descjob="Encontre professores particulares perto de você">
                            <img src={TeachrCover} alt="Teachr capa" />
                        </Card>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 mb-30">
                        <Card
                            link="projeto-mettings"
                            titlejob="Mettings"
                            descjob="Conecte-se com seus contatos, crie sua network">
                            <img src={MettingsCover} alt="Mettings" />
                        </Card>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 mb-30">
                        <Card
                            link="projeto-unicred"
                            titlejob="Unicred App"
                            descjob="Redesign de tela - arte conceito">
                            <img src={UnicredCover} alt="unicred capa" />
                        </Card>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 mb-30">
                        <Card
                            link="assis"
                            titlejob="Assis"
                            descjob="Seu assistente para compras saudáveis">
                            <img src={AssisCover} alt="" />
                        </Card>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-30">
                        <Link to="/portfolio/" className="link">Veja todos os trabalhos</Link>
                    </div>
                    </div>
            </div>
        </div>
    </div>
)
export default JobsArea