import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../components/header"
import News from "../components/news"
import Footer from "../components/footer"

const Portfolio = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="portfolio-page">
        <h1 className="portfolio-page__h1">Case Studies</h1>
        <div className="portfolio-page__container">
          <div className="portfolio-page__container__item"></div>
          <div className="portfolio-page__container__item">
            <StaticImage
              className="showcase__img"
              src="../images/project1.jpeg"
              alt="Huawei Rubik's Cube"
            />
          </div>
          <div className="portfolio-page__container__item">
            <StaticImage
              className="showcase__img"
              src="../images/project1.jpeg"
              alt="Huawei Rubik's Cube"
            />
          </div>
          <div className="portfolio-page__container__item">
            <StaticImage
              className="showcase__img"
              src="../images/project1.jpeg"
              alt="Huawei Rubik's Cube"
            />
          </div>
          <div className="portfolio-page__container__item"></div>
          <div className="portfolio-page__container__item">
            <StaticImage
              className="showcase__img"
              src="../images/project1.jpeg"
              alt="Huawei Rubik's Cube"
            />
          </div>
          <div className="portfolio-page__container__item">
            <StaticImage
              className="showcase__img"
              src="../images/project1.jpeg"
              alt="Huawei Rubik's Cube"
            />
          </div>
          <div className="portfolio-page__container__item">
            <StaticImage
              className="showcase__img"
              src="../images/project1.jpeg"
              alt="Huawei Rubik's Cube"
            />
          </div>
          <div className="portfolio-page__container__item">
            <StaticImage
              className="showcase__img"
              src="../images/project1.jpeg"
              alt="Huawei Rubik's Cube"
            />
          </div>
          {/* <div className="portfolio-page__container__item"></div> */}
          <div className="portfolio-page__container__item">
            <StaticImage
              className="showcase__img"
              src="../images/project1.jpeg"
              alt="Huawei Rubik's Cube"
            />
          </div>
          <div className="portfolio-page__container__item"></div>
          <div className="portfolio-page__container__item">
            <StaticImage
              className="showcase__img"
              src="../images/project1.jpeg"
              alt="Huawei Rubik's Cube"
            />
          </div>
          <div className="portfolio-page__container__item"></div>
          <div className="portfolio-page__container__item">
            <StaticImage
              className="showcase__img"
              src="../images/project1.jpeg"
              alt="Huawei Rubik's Cube"
            />
          </div>
          <div className="portfolio-page__container__item"></div>
          <div className="portfolio-page__container__item"></div>
          <div className="portfolio-page__container__item">
            <StaticImage
              className="showcase__img"
              src="../images/project1.jpeg"
              alt="Huawei Rubik's Cube"
            />
          </div>
          <div className="portfolio-page__container__item"></div>
          <div className="portfolio-page__container__item">
            <StaticImage
              className="showcase__img"
              src="../images/project1.jpeg"
              alt="Huawei Rubik's Cube"
            />
          </div>
          <div className="portfolio-page__container__item">
            <StaticImage
              className="showcase__img"
              src="../images/project1.jpeg"
              alt="Huawei Rubik's Cube"
            />
          </div>
        </div>
      </div>
      <News />
      <Footer />
    </div>
  )
}

export default Portfolio
