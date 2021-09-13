import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
// import "flickity/dist/flickity.min.css"

const Showcase = () => (
  <>
    <Helmet>
      <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
      <link
        rel="stylesheet"
        href="https://unpkg.com/flickity@2/dist/flickity.min.css"
      ></link>
    </Helmet>
    <div
      className="showcase js-flickity"
      data-flickity-options='{ "wrapAround": true }'
    >
      <div className="showcase-cell showcase-cell--1">
        <div className="showcase-cell__bg"></div>
        <div className="showcase-cell__gradient"></div>
        <StaticImage
          className="showcase-cell showcase-cell__image"
          src="../images/project4.jpeg"
          alt="News item 1"
        />
        <div className="showcase-cell__content">
          <h1 className="showcase-cell__content__company">Panasonic</h1>
          <h2 className="showcase-cell__content__project">
            Virtual Conference
          </h2>
        </div>
      </div>
      <div className="showcase-cell showcase-cell--2">
        <div className="showcase-cell__bg"></div>
        <div className="showcase-cell__gradient"></div>
        <StaticImage
          className="showcase-cell showcase-cell__image"
          src="../images/project5.jpeg"
          alt="News item 1"
        />
        <div className="showcase-cell__content">
          <h1 className="showcase-cell__content__company">Huawei</h1>
          <h2 className="showcase-cell__content__project">Rubik's Cube</h2>
        </div>
      </div>
      <div className="showcase-cell showcase-cell--3">
        <div className="showcase-cell__bg"></div>
        <div className="showcase-cell__gradient"></div>
        <StaticImage
          className="showcase-cell showcase-cell__image"
          src="../images/project1.jpeg"
          alt="News item 1"
        />
        <div className="showcase-cell__content">
          <h1 className="showcase-cell__content__company">Adidas</h1>
          <h2 className="showcase-cell__content__project">
            Retail Installation
          </h2>
        </div>
      </div>
      <div className="showcase-cell showcase-cell--4">
        <div className="showcase-cell__bg"></div>
        <div className="showcase-cell__gradient"></div>
        <StaticImage
          className="showcase-cell showcase-cell__image"
          src="../images/project2.jpeg"
          alt="News item 1"
        />
        <div className="showcase-cell__content">
          <h1 className="showcase-cell__content__company">Mini</h1>
          <h2 className="showcase-cell__content__project">
            All Electric Launch
          </h2>
        </div>
      </div>
      <div className="showcase-cell showcase-cell--5">
        <div className="showcase-cell__bg"></div>
        <div className="showcase-cell__gradient"></div>
        <StaticImage
          className="showcase-cell showcase-cell__image"
          src="../images/project3.jpeg"
          alt="News item 1"
        />
        <div className="showcase-cell__content">
          <h1 className="showcase-cell__content__company">UMA</h1>
          <h2 className="showcase-cell__content__project">Music Video</h2>
        </div>
      </div>
    </div>
  </>
)

export default Showcase
