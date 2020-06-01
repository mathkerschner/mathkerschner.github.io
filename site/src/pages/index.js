import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroArea from "../components/heroarea"
import JobsArea from "../components/jobarea"
import WeDo from "../components/wedo"
import ClientArea from "../components/clientarea"
import Stripe from "../components/stripe"
import Experience from "../components/experience"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroArea herotext="Eu sou o Matheus, designer de experiências digitais, e às vezes Dev. Front-end" />
    <JobsArea />
    <Experience />
    <WeDo />
    <ClientArea />
    <Stripe text="Começar um projeto" />    
  </Layout>
)

export default IndexPage