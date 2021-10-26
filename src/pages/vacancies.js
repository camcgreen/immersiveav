import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header"
import LowHero from "../components/lowHero"
import News from "../components/news"
import PhoneEmail from "../components/phoneEmail"
import NewFooter from "../components/footerNew"

import { ScrollTrigger } from "gsap/ScrollTrigger"

import "../styles/styles.scss"
import { contactEmail, footerText } from "../utils/helper"

const Vacancies = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  // const posts = []

  // console.log(posts)

  return (
    <div className="wrapper">
      <Header />
      <LowHero />
      <div className="vacancies-page">
        <h1 className="vacancies-page__h1">Vacancies</h1>
        <li className="vacancies-page__list" style={{ paddingLeft: 0 }}>
          {posts.length > 0 ? (
            posts.map((post, i) => {
              return (
                <li className="vacancies-page__list__item">
                  <button
                    className="vacancies-page__list__item__btn"
                    style={{ marginBottom: i === posts.length - 1 ? 0 : 80 }}
                    onClick={() => {
                      const body = document.querySelectorAll(
                        ".vacancies-page__list__item__body"
                      )[i]
                      const icon = document.querySelectorAll(
                        ".vacancies-page__list__item__btn__icon"
                      )[i]
                      if (body.style.display === "none") {
                        body.style.display = "block"
                        icon.innerHTML = "-"
                        ScrollTrigger.refresh()
                      } else {
                        body.style.display = "none"
                        icon.innerHTML = "+"
                        ScrollTrigger.refresh()
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
                </li>
              )
            })
          ) : (
            <p className="vacancies-page__list__none">
              There are no vacancies at the moment.
            </p>
          )}
        </li>
      </div>
      <PhoneEmail />
      {/* <Footer /> */}
      <News />
      <NewFooter />
      <div className="empty">
        {/* <SubHero /> */}
        <h1 className="empty__title">{footerText}</h1>
      </div>
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
