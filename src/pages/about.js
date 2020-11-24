import React from "react"

import Links from "../components/links"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Image from "gatsby-image"

// import { rhythm } from "../utils/typography"

export default class About extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title="Sumant Bagade">
        <SEO
          title="About"
          keywords={[`about`]}
        />
        <Links/>
        <div style={{marginBottom: '40px'}}></div>
        <p>
          I'm Sumant Bagade. This website is a collection of all my readings. 
        </p>
        <p>
          Inspired by <i>Document, Don't Create. </i>. Read about it <a href="https://www.garyvaynerchuk.com/creating-content-that-builds-your-personal-brand/">here</a>
        </p>

        <p>  
          Previously work experience as developer at <a href="https://vested.co.in/">Vested</a>, <a href="https://www.orowealth.com/">Orowealth</a> and software engineering at <a href="https://www.iiitm.ac.in">IIITM Gwalior</a>.
        </p> 
        <p>
          To reach me, you can email <a href="mailto:sumantbagade19@gmail.com">sumantbagade19@gmail.com</a>. Connect with me on <a href="https://twitter.com/sh_reya">Twitter</a> and <a href="https://linkedin.com/sumantbagade">LinkedIn</a>
        </p>
      </Layout>
    )
  }
}