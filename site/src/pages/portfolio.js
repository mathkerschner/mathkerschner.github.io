import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroArea from "../components/heroarea"
import Card from "../components/card"


const PortfolioPage = ({ data }) => (
    <Layout>
        <SEO title="Portfólio" />
        <HeroArea herotext="Aqui você encontra um pouco do meu trabalho." />
        <div id="portfoliopage" className="container-fluid mb-160">
            <div className="row justify-content-center">
                <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10">
                    <div className="row">
                        {data.allMarkdownRemark.edges.map(({ node }) => (
                            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 mb-30" key={node.id}>
                                <Card bgColor={node.frontmatter.coverColor}
                                    link={node.frontmatter.link}
                                    titlejob={node.frontmatter.title}
                                    descjob={node.frontmatter.describe}>
                                    <Img fluid={node.frontmatter.coverImage.childImageSharp.fluid} />    
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)
export default PortfolioPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: {order: ASC, fields: frontmatter___date}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            link
            describe
            coverColor
            coverImage {
              childImageSharp {
                fluid(maxWidth: 225, pngQuality: 100, quality: 100) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`