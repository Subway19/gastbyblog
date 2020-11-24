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
          I'm Sumant Bagade, a computer scientist living in the Bay Area. I'm interested in making machine learning work in the real world. 
        </p>

        <p>  
          Currently, I work at <a href="https://www.viaduct.ai/">Viaduct</a>. Previously, I did research at <a href="https://ai.google/research/teams/brain">Google Brain</a>, learned about investing with <a href="https://amplifypartners.com/">Amplify Partners</a>, and software engineering at <a href="https://www.facebook.com">Facebook</a>.
        </p> 
        <p>
          I graduated from Stanford University with a B.S. in computer science, concentrating in systems. I'm finishing my M.S. in computer science, concentrating in artificial intelligence. At Stanford, I helped run a nonprofit called <a href="http://www.sheplusplus.com/">SHE++</a>, an organization that helps to empower underrepresented minorities in technology. I also spent a lot of time as a section leader and teaching assistant for <a href="https://cs198.stanford.edu/cs198/">CS198</a>.
        </p>
        <p>
          To reach me, you can email <a href="mailto:sumantbagade19@gmail.com">sumantbagade19@gmail.com</a>. I am also fairly active on <a href="https://twitter.com/sh_reya">Twitter.</a> 
        </p>
      </Layout>
    )
  }
}