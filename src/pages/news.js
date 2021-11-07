import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

import { ScrollTrigger } from "gsap/ScrollTrigger"

import Header from "../components/header"
import LowHero from "../components/lowHero"
import Pagination from "../components/pagination"
import PhoneEmail from "../components/phoneEmail"
import NewFooter from "../components/footerNew"
import Footer from "../components/footer"

import "../styles/styles.scss"
import { footerText } from "../utils/helper"

const News = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(5)

  const [updateKey, setUpdateKey] = useState(0)

  useEffect(() => {
    // const overlays = document.querySelectorAll(
    //   ".news-page__item__img-container__overlay"
    // )
    // const buttons = document.querySelectorAll(
    //   ".news-page__item__img-container__btn"
    // )
    // overlays.forEach((overlay, i) => {
    //   overlay.addEventListener("mouseenter", e => {
    //     buttons[i].style.opacity = 1
    //   })
    //   overlay.addEventListener("mouseleave", e => {
    //     buttons[i].style.opacity = 0
    //   })
    // })
  }, [])

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = pageNumber => {
    setCurrentPage(pageNumber)
    ScrollTrigger.refresh()
    ScrollTrigger.getAll().forEach(instance => {
      instance.kill()
    })
    setTimeout(() => {
      setUpdateKey(updateKey + 1)
    }, 500)
  }

  return (
    <div className="wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>News | ImmersiveAV</title>
      </Helmet>
      <Header />
      <LowHero key={updateKey} />
      <div className="news-page">
        <h1 className="news-page__h1">News</h1>
        {currentPosts.map((post, i) => {
          return (
            <div className="news-page__item" key={i}>
              {/* <Link
                // className="header__container__navigation__service-links link"
                className="news-page__item__link"
                to={`../${post.node.frontmatter.path}`}
              > */}
              <h1 className="news-page__item__link__title" key={i}>
                {post.node.frontmatter.title}
              </h1>
              {/* </Link> */}
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
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
        <PhoneEmail />
      </div>
      {/* <Footer /> */}
      <NewFooter />
      <div className="empty">
        {/* <SubHero /> */}
        <h1 className="empty__title">{footerText}</h1>
      </div>
    </div>
  )
}

export default News

export const pageQuery = graphql`
  query QueryNews {
    allMarkdownRemark(
      filter: { frontmatter: { path: { glob: "news/*" } } }
      sort: { fields: frontmatter___date, order: DESC }
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
