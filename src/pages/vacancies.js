import React, { useState } from "react"
import { Link, graphql } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"

import "../styles/styles.scss"
import { contactEmail } from "../utils/helper"

const Vacancies = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  console.log(posts)

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
                      const icon = document.querySelectorAll(
                        ".vacancies-page__list__item__btn__icon"
                      )[i]
                      if (body.style.display == "none") {
                        body.style.display = "block"
                        icon.innerHTML = "-"
                      } else {
                        body.style.display = "none"
                        icon.innerHTML = "+"
                      }
                    }}
                  >
                    <p className="vacancies-page__list__item__btn__text">
                      {post.node.frontmatter.title}
                    </p>
                    <p className="vacancies-page__list__item__btn__icon">+</p>
                  </button>
                  <div
                    className="vacancies-page__list__item__body"
                    style={{ display: "none" }}
                  >
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
