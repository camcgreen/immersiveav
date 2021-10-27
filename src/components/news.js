import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const News = () => {
  const data = useStaticQuery(graphql`
    query QueryMostRecentNewsGlobal {
      allMarkdownRemark(
        filter: { frontmatter: { path: { glob: "news/*" } } }
        sort: { fields: frontmatter___date, order: DESC }
        limit: 3
      ) {
        edges {
          node {
            frontmatter {
              date
              featuredImage
              title
            }
          }
        }
      }
    }
  `)
  const posts = data.allMarkdownRemark.edges
  const formatDate = date => {
    const breakStr = date.split("-")
    const third = breakStr[2].split("T")
    const newStr = [third[0], breakStr[1], breakStr[0]]
    return newStr.join("/")
  }
  return (
    <div className="news">
      <div className="news__item news__item--1">
        <Link to="/news/immersive-av-at-event-tech-live-2021">
          <img
            className="news__item__image"
            src={posts[0].node.frontmatter.featuredImage}
            alt="News item 1"
          />
          <div className="news__item__text">
            <h1 className="news__item__text__title">
              {posts[0].node.frontmatter.title}
            </h1>
            <h2 className="news__item__text__date">
              {formatDate(posts[0].node.frontmatter.date)}
            </h2>
          </div>
        </Link>
      </div>
      <div className="news__item news__item--2">
        <Link to="/news/christmas-event-av-hire">
          <img
            className="news__item__image"
            src={posts[1].node.frontmatter.featuredImage}
            alt="News item 2"
          />
          <div className="news__item__text">
            <h1 className="news__item__text__title">
              {posts[1].node.frontmatter.title}
            </h1>
            <h2 className="news__item__text__date">
              {formatDate(posts[1].node.frontmatter.date)}
            </h2>
            {/* <img src={ArrowRight} alt="" /> */}
          </div>
        </Link>
      </div>
      <div className="news__item news__item--3">
        <Link to="/news/rob-adams-returns-to-immersive-av">
          <img
            className="news__item__image"
            src={posts[2].node.frontmatter.featuredImage}
            alt="News item 3"
          />
          <div className="news__item__text">
            <h1 className="news__item__text__title">
              {posts[2].node.frontmatter.title}
            </h1>
            <h2 className="news__item__text__date">
              {formatDate(posts[2].node.frontmatter.date)}
            </h2>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default News
