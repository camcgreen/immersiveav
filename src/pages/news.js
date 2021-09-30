import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"

const News = ({ data }) => {
  // useEffect(() => {
  //   setTimeout(() => {
  // column.addEventListener("mouseenter", e => {
  //   }, 100)
  // }
  // const posts = data.allMarkdownRemark.nodes
  // const posts = data.allMarkdownRemark.edges

  // console.log(posts)
  // console.log(posts[0].node.frontmatter.date)

  const posts = data.allMarkdownRemark.edges

  useEffect(() => {
    // const posts = data.allMarkdownRemark.edges
    const overlays = document.querySelectorAll(
      ".news-page__item__img-container__overlay"
    )
    const buttons = document.querySelectorAll(
      ".news-page__item__img-container__btn"
    )

    overlays.forEach((overlay, i) => {
      overlay.addEventListener("mouseenter", e => {
        buttons[i].style.opacity = 1
      })
      overlay.addEventListener("mouseleave", e => {
        buttons[i].style.opacity = 0
      })
    })
  })
  return (
    <div className="wrapper">
      <Header />
      <div className="news-page">
        {posts.map((post, i) => {
          return (
            <div className="news-page__item">
              <Link
                // className="header__container__navigation__service-links link"
                className="news-page__item__link"
                to={`../${post.node.frontmatter.path}`}
              >
                <h1 className="news-page__item__link__title" key={i}>
                  {post.node.frontmatter.title}
                </h1>
              </Link>
              <div className="news-page__item__img-container">
                <Link
                  // className="header__container__navigation__service-links link"
                  className="news-page__item__link"
                  to={`../${post.node.frontmatter.path}`}
                >
                  <img
                    src={post.node.frontmatter.featuredImage}
                    alt=""
                    className="news-page__item__img-container__img"
                  />
                  <div className="news-page__item__img-container__overlay"></div>
                  <button className="news-page__item__img-container__btn">
                    {["Continue", "→"].join("    ")}
                  </button>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
      <Footer />
    </div>
  )
}

export default News

// export const pageQuery = graphql`
//   allMarkdownRemark(filter: {frontmatter: {path: {glob: "news/*"}}}) {
//     edges {
//       node {
//         html
//         frontmatter {
//           date
//           featuredImage
//           path
//           title
//         }
//       }
//     }
//   }
// `

export const pageQuery = graphql`
  query QueryNews {
    allMarkdownRemark(filter: { frontmatter: { path: { glob: "news/*" } } }) {
      edges {
        node {
          html
          frontmatter {
            date
            featuredImage
            path
            title
          }
        }
      }
    }
  }
`
