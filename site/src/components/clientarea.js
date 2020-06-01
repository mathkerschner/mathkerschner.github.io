import React from "react"
import TitleSection from "./titlesection"

import ConceptuLogoSvg from "../images/clientes/conceptu-logo.svg"
import PrismatecLogoSvg from "../images/clientes/prismatec-logo.svg"
import PortalOficinaLogoSvg from "../images/clientes/portal-da-oficina-logo.svg"
import ClubewattLogoSvg from "../images/clientes/clubewatt-logo.svg"
import WattpanelLogoSvg from "../images/clientes/wattpanel-logo.svg"
import Top3LogoSvg from "../images/clientes/top3-logo.svg"
import AcceptoreLogoSvg from "../images/clientes/acceptore-logo.svg"
import XmaisnutricaoLogoSvg from "../images/clientes/3xmaisnutricao-logo.svg"
import AndressaLogoSvg from "../images/clientes/andressa-coelho-logo.svg"

const ClientArea = (props) => (
    <div id="clientarea" className="container-fluid">
        <div className="row justify-content-center mb-160">
            <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                        <TitleSection title="Parceiros e clientes" />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="row" id="client">
                            <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                <img src={ConceptuLogoSvg} alt="Logo sConceptu" />
                            </div>
                            <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                <img src={PrismatecLogoSvg} alt="Logo Prismastec" />
                            </div>
                            <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                <img src={PortalOficinaLogoSvg} alt="Logo Portal da Oficina" />
                            </div>
                            <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                <img src={ClubewattLogoSvg} alt="Logo Clubewatt" />
                            </div>
                            <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                <img src={WattpanelLogoSvg} alt="Logo Wattpanel" />
                            </div>
                            <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                <img src={Top3LogoSvg} alt="Logo Top3" />
                            </div>
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <img src={AcceptoreLogoSvg} alt="Logo Acceptore" />
                            </div>
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <img src={XmaisnutricaoLogoSvg} alt="Logo 3x Mais nutrição" />
                            </div>
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <img src={AndressaLogoSvg} alt="Logo Andressa Coelho Nutricionista" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default ClientArea