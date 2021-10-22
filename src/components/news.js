import React, { useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import ArrowRight from "../svg/arrow-right.svg"

const News = () => {
  // useEffect(() => {

  // }, [])
  return (
    <div className="news">
      <div className="news__item news__item--1">
        <Link to="/news/immersive-av-at-event-tech-live-2021">
          <StaticImage
            className="news__item__image"
            src="../images/news6.jpeg"
            alt="News item 1"
          />
          <div className="news__item__text">
            <h1 className="news__item__text__title">
              Immersive AV at Event Tech Live 2021
            </h1>
            <h2 className="news__item__text__date">21/10/21</h2>
            {/* <img src={ArrowRight} alt="" /> */}
          </div>
        </Link>
      </div>
      <div className="news__item news__item--2">
        <Link to="/news/christmas-event-av-hire">
          <StaticImage
            className="news__item__image"
            src="../images/news5.jpeg"
            alt="News item 2"
          />
          <div className="news__item__text">
            <h1 className="news__item__text__title">Christmas Event AV Hire</h1>
            <h2 className="news__item__text__date">20/10/21</h2>
            {/* <img src={ArrowRight} alt="" /> */}
          </div>
        </Link>
      </div>
      <div className="news__item news__item--3">
        <Link to="/news/rob-adams-returns-to-immersive-av">
          <StaticImage
            className="news__item__image"
            src="../images/news4.jpeg"
            alt="News item 3"
          />
          <div className="news__item__text">
            <h1 className="news__item__text__title">
              Rob Adams Returns to Immersive AV
            </h1>
            <h2 className="news__item__text__date">13/10/21</h2>
            {/* <img src={ArrowRight} alt="" /> */}
          </div>
        </Link>
      </div>
    </div>
  )
}

export default News
