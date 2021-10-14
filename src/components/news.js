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
        <Link to="/news/job-vacancies-at-immersive-av">
          <StaticImage
            className="news__item__image"
            src="../images/news1.jpg"
            alt="News item 1"
          />
          <div className="news__item__text">
            <h1 className="news__item__text__title">Job Vacancies</h1>
            <h2 className="news__item__text__date">18/08/21</h2>
            {/* <img src={ArrowRight} alt="" /> */}
          </div>
        </Link>
      </div>
      <div className="news__item news__item--2">
        <Link to="/news/av-hire-for-egx-2021">
          <StaticImage
            className="news__item__image"
            src="../images/news2.jpg"
            alt="News item 2"
          />
          <div className="news__item__text">
            <h1 className="news__item__text__title">AV Hire for EGX 2021</h1>
            <h2 className="news__item__text__date">21/08/21</h2>
            {/* <img src={ArrowRight} alt="" /> */}
          </div>
        </Link>
      </div>
      <div className="news__item news__item--3">
        <Link to="/news/thanks-for-joining-the-studiox-live-launch">
          <StaticImage
            className="news__item__image"
            src="../images/news3.jpg"
            alt="News item 3"
          />
          <div className="news__item__text">
            <h1 className="news__item__text__title">StudioX Live Launch</h1>
            <h2 className="news__item__text__date">21/08/21</h2>
            {/* <img src={ArrowRight} alt="" /> */}
          </div>
        </Link>
      </div>
    </div>
  )
}

export default News
