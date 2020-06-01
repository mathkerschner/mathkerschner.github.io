import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../sass/_resets.scss"
import "../sass/grid/bootstrap-grid.scss"
import "../sass/_colors.scss"
import "../sass/_margin.scss"
import "../sass/_text.scss"
import "../sass/_main.scss"
import Footer from "./footer"
import BtnTop from "./btntop"
// import Scrollable from "./scrollable"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
        <main>
          {children}
        </main>
        <Footer />
        <BtnTop />
        {/* <Scrollable /> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
