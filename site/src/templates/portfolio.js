import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

import "../sass/portfolio.scss"
import Stripe from "../components/stripe"


export default ({ data }) => {
  let post = data.markdownRemark
  let coverImageFluid = post.frontmatter.coverImage.childImageSharp.fluid
  const bgcolor = post.frontmatter.coverColor

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div id="portfolio-templ" className="row justify-content-center mb-30" style={{ backgroundColor: bgcolor }}>
        <div className="col-sm-10">
          <div className="row justify-content-end align-items-center">
            <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10">
              <h2 className="title-proj">{post.frontmatter.title}</h2>
              <h3 className="title-describe">{post.frontmatter.describe}</h3>
            </div>
            <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
              <Img fluid={coverImageFluid} className="proj-cover" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center mb-96">
          <div className="row col-sm-10 col-md-10 col-lg-10 col-xl-10 justify-content-center">
            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 mb-30">
              <h5 className="mb-10 color-purepink upper-text">Tarefa</h5>
              <p>{post.frontmatter.type}</p>
              <i className="line mt-20"></i>
            </div>
            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 mb-30">
              <h5 className="mb-10 color-purepink upper-text">Meu papel neste projeto</h5>
              <p>{post.frontmatter.myrole}</p>
              <i className="line mt-20"></i>
            </div>
            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 mb-30">
              <h5 className="mb-10 color-purepink upper-text">O que foi feito</h5>
              <p>{post.frontmatter.wwdone}</p>
              <i className="line mt-20"></i>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10">
            <div className="portfolio-content" dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
      </div>

      <Stripe text="Começar um projeto" />
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        describe
        coverColor
        type
        myrole
        wwdone
        coverImage {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`