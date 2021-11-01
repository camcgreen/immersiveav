import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../../components/header"
import LowHero from "../../components/lowHero"
import News from "../../components/news"
import NewFooter from "../../components/footerNew"

import HeroImage from "../../images/project9.jpeg"
import Image1 from "../../images/services-top-5.jpeg"
import Image2 from "../../images/services-top-4.jpeg"
import Image3 from "../../images/news3.jpg"
import Image4 from "../../images/stream-1.jpeg"
import Image5 from "../../images/services-hero-3.jpeg"
import Image6 from "../../images/gesture-hero.jpg"
import Image7 from "../../images/services-hero-1.jpeg"
import Image8 from "../../images/thales1.jpeg"
import Image9 from "../../images/stream-2.jpeg"

import { footerText } from "../../utils/helper"

import bgBlue from "../../svg/bg-blue.svg"
import bgOrange from "../../svg/bg-orange.svg"

import "../../styles/styles.scss"

const Ceremony = () => {
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
  ]
  return (
    <div className="wrapper">
      <Header />
      <LowHero />
      <div className="portfolio-item">
        <div className="bg-av">
          <img className="bg-av__img bg-av__img--blue" src={bgBlue} alt="" />
          <img
            className="bg-av__img bg-av__img--orange"
            src={bgOrange}
            alt=""
          />
        </div>
        <h1 className="portfolio-item__h1">World Skills Opening Ceremony</h1>
        <div className="portfolio-item__container">
          {/* <StaticImage
            className="portfolio-item__container__hero-image"
            src={heroImage}
            // src={"../images/news1.jpg"}
            alt=""
          /> */}
          <img
            src={HeroImage}
            alt=""
            className="portfolio-item__container__hero-image"
          />
          <div className="portfolio-item__container__hero-array">
            <img
              src={images[0]}
              alt=""
              className="portfolio-item__container__hero-array__img portfolio-item__container__hero-array__img--1"
            />
            <img
              src={images[1]}
              alt=""
              className="portfolio-item__container__hero-array__img portfolio-item__container__hero-array__img--2"
            />
            <img
              src={images[2]}
              alt=""
              className="portfolio-item__container__hero-array__img portfolio-item__container__hero-array__img--3"
            />
            <img
              src={images[3]}
              alt=""
              className="portfolio-item__container__hero-array__img portfolio-item__container__hero-array__img--4"
            />
            <img
              src={images[5]}
              alt=""
              className="portfolio-item__container__hero-array__img portfolio-item__container__hero-array__img--5"
            />
            <img
              src={images[4]}
              alt=""
              className="portfolio-item__container__hero-array__img portfolio-item__container__hero-array__img--6"
            />
          </div>
          <div className="portfolio-item__container__quote">
            <h1 className="portfolio-item__container__quote__h1">
              {'" Lorem ipsum dolor sit amet, consecteur adipiscing'}
            </h1>
            <h3 className="portfolio-item__container__quote__h3">
              World Skills
            </h3>
          </div>
          <div className="portfolio-item__container__challenge">
            <h2 className="portfolio-item__container__challenge__h2">
              Challenge
            </h2>
            <p className="portfolio-item__container__challenge__p">
              To consult on the opening and closing Ceremonies for Abu Dhabi and
              to oversee systems design and delivery with the chosen AV
              contractor for the live experience agency People. The venue being
              custom built within the Du Arena, Abu Dhabi and the opening
              Ceremony to consist of a central screen 21mx 12m, two side screens
              of 14m x 8m, a 4.5m globe for projection and floor projection to a
              section of the performance space. Camera feeds are required for
              both events together with a results feed to the side screens for
              the closing ceremony. All screens require independent playback
              capability and the system had to be capable of following timecode.
            </p>
          </div>
          <div className="portfolio-item__container__solution">
            <h2 className="portfolio-item__container__solution__h2">
              Solution
            </h2>
            <p className="portfolio-item__container__solution__p">
              Using Disguise designer allowed luminance planning across the
              different projection surfaces together with the ability to plot
              available heights for aerial artistes, potential shadowing and so
              forth. The system to deliver the show was based around 4×4 and 2×4
              Pro servers driving 30 projectors of differing lumens to deliver
              content to the required surfaces. One particular challenge which
              had to be overcome was the fact that the 4.5m globe was to be
              assembled and finished on site which removed the opportunity to
              model it before hand. To solve this a specific model and map was
              created with the real world positions of the vertices calculated
              and the globe was marked up with these key positions to get a
              rapid ‘close fit’ which could then be finessed.
            </p>
          </div>
          <div className="portfolio-item__container__supplementary-images">
            <img
              src={images[1]}
              alt=""
              className="portfolio-item__container__supplementary-images__img portfolio-item__container__supplementary-images__img--1"
            />
            <img
              src={images[7]}
              alt=""
              className="portfolio-item__container__supplementary-images__img portfolio-item__container__supplementary-images__img--2"
            />
            <img
              src={images[8]}
              alt=""
              className="portfolio-item__container__supplementary-images__img portfolio-item__container__supplementary-images__img--3"
            />
          </div>
          <div className="portfolio-item__container__quote portfolio-item__container__quote--bottom">
            <h1 className="portfolio-item__container__quote__h1">
              Lorem ipsum dolor sit amet
            </h1>
          </div>
          <div className="portfolio-item__container__result">
            <h2 className="portfolio-item__container__result__h2">Result</h2>
            <p className="portfolio-item__container__result__p">
              The use of the Disguise range allowed for greater planning, at
              earlier stages, with clients and technical departments. The
              solution allowed the process of content production and technical
              layout to happen independently without either one delaying the
              other. This meant that scenarios could be planned out well in
              advance and many potential on site problems eliminated before the
              build. The event was attended by over 8,000 people and streamed
              live worldwide.
            </p>
          </div>
        </div>
      </div>
      <News />
      <NewFooter />
      <div className="empty">
        <h1 className="empty__title">{footerText}</h1>
      </div>
    </div>
  )
}

export default Ceremony
