import * as React from "react"
import { Link, graphql } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"

import { contactEmail } from "../utils/helper"

const Vacancies = ({ data }) => {
  // const posts = data.allMarkdownRemark.nodes
  const posts = data.allMarkdownRemark.edges

  console.log(posts)
  // console.log(posts[0].node.frontmatter.date)

  return (
    <div className="wrapper">
      <Header />
      <div className="vacancies-page">
        <h1 className="vacancies-page__h1">Vacancies</h1>
        <div className="vacancies-page__list">
          {posts.length > 0 ? (
            posts.map((post, i) => {
              return (
                <div className="vacancies-page__list__item">
                  <button
                    className="vacancies-page__list__item__btn"
                    onClick={() => {
                      const body = document.querySelectorAll(
                        ".vacancies-page__list__item__body"
                      )[i]
                      if (body.style.display == "none") {
                        body.style.display = "block"
                        // body.style.pointerEvents = "all"
                      } else {
                        body.style.display = "none"
                        // body.style.pointerEvents = "none"
                      }
                    }}
                  >
                    {post.node.frontmatter.title}
                  </button>
                  <div className="vacancies-page__list__item__body">
                    <div
                      className="vacancies-page__list__item__body__info"
                      dangerouslySetInnerHTML={{ __html: post.node.html }}
                    />
                    <a
                      className="vacancies-page__list__item__apply"
                      href={`mailto:${contactEmail}?subject=Job application: ${post.node.frontmatter.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply
                    </a>
                  </div>
                </div>
              )
            })
          ) : (
            <p>There are no posts.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )

  // return posts.length > 0 ? (
  //   <>
  //     <p>There are vacancies.</p>
  //   </>
  // ) : (
  //   <>
  //     <p>There are no vacancies.</p>
  //   </>
  // )

  // return (
  //   <>
  //     <p>Vacancies (in development)</p>
  //   </>
  // )
}

export default Vacancies

export const pageQuery = graphql`
  query QueryVacancies {
    allMarkdownRemark(
      filter: { frontmatter: { path: { glob: "vacancies/*" } } }
    ) {
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
