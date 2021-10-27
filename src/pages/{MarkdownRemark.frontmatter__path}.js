import React from "react"
import { Helmet } from "react-helmet"
import "../styles/styles.scss"
import { graphql } from "gatsby"

import Header from "../components/header"
import LowHero from "../components/lowHero"
import News from "../components/news"
import NewFooter from "../components/footerNew"
import { footerText } from "../utils/helper"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{frontmatter.title} | ImmersiveAV</title>
      </Helmet>
      <Header />
      <LowHero />
      <div className="cms-container">
        <div className="cms-container__post">
          <h1 className="cms-container__post__title">{frontmatter.title}</h1>
          <h2 className="cms-container__post__date">{frontmatter.date}</h2>
          <img
            className="cms-container__post__img"
            src={frontmatter.featuredImage}
            alt=""
          />
          <div
            className="cms-container__post__body"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <btn
            onClick={() => window.history.back()}
            className="cms-container__post__back"
          >
            ← Back
          </btn>
        </div>
      </div>
      <News />
      <NewFooter />
      <div className="empty">
        {/* <SubHero /> */}
        <h1 className="empty__title">{footerText}</h1>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        featuredImage
      }
    }
  }
`
