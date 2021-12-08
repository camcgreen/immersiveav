import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../../components/header"
import LowHero from "../../components/lowHero"
import News from "../../components/news"
import NewFooter from "../../components/footerNew"

import HeroImage from "../../images/project6.jpeg"
import Image1 from "../../images/candy-new-3.jpg"
import Image2 from "../../images/candy-new-5.jpg"
import Image3 from "../../images/candy-new-6.jpg"
import Image4 from "../../images/candy-new-8.jpg"
import Image5 from "../../images/candy-new-1.jpg"
import Image6 from "../../images/candy-new-2.jpg"
import Image7 from "../../images/candy-new-7.jpg"
import Image8 from "../../images/candy-new-4.jpg"
import Image9 from "../../images/stream-supp-1.jpg"

import { footerText } from "../../utils/helper"

import bgBlue from "../../svg/bg-blue.svg"
import bgOrange from "../../svg/bg-orange.svg"

import "../../styles/styles.scss"

const Candy = () => {
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
        <h1 className="portfolio-item__h1">Candy Crush Live Stream</h1>
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
              src={images[4]}
              alt=""
              className="portfolio-item__container__hero-array__img portfolio-item__container__hero-array__img--5"
            />
            <img
              src={images[5]}
              alt=""
              className="portfolio-item__container__hero-array__img portfolio-item__container__hero-array__img--6"
            />
          </div>
          <div className="portfolio-item__container__quote">
            {/* <h1 className="portfolio-item__container__quote__h1">
              {'" Lorem ipsum dolor sit amet, consecteur adipiscing'}
            </h1>
            <h3 className="portfolio-item__container__quote__h3">
              Candy Crush
            </h3> */}
          </div>
          <div className="portfolio-item__container__challenge">
            <h2 className="portfolio-item__container__challenge__h2">
              Challenge
            </h2>
            <p className="portfolio-item__container__challenge__p">
              Immersive AV provided stream management services for the Candy
              Crush live stream. Passionate about connecting with their loyal
              fans, Candy Crush had ambitious plans for the grand finale of
              their All Stars contest. Live recording 10 contestants and six
              celebrities from remote locations brought a range of
              challenges—all of which we rose to.
            </p>
            <p className="portfolio-item__container__challenge__p">
              When you take on the ambitious project of inviting six celebrities
              to cheer on 10 Candy Crush fanatics playing the popular game
              simultaneously in a virtual environment, for a big-budget digital
              advertising campaign— you need an exceptional technical production
              team to ensure everything goes to plan.
            </p>
            <p className="portfolio-item__container__challenge__p">
              Working in partnership with Unit 9 Films, Immersive AV handled all
              technical production and systems integration for the live
              recording of the{" "}
              <a
                href="https://community.king.com/en/candy-crush-saga/discussion/311940/%EF%B8%8F-%EF%B8%8F-candy-crush-saga-all-stars-tournament"
                target="_blank"
                rel="noopener noreferrer"
              >
                Candy Crush All Stars Grand Finale
              </a>
              .
            </p>
          </div>
          <div className="portfolio-item__container__solution">
            <h2 className="portfolio-item__container__solution__h2">
              Solution
            </h2>
            <p className="portfolio-item__container__solution__p">
              The key element to the Candy Crush project was technical know-how.
              Whilst we provided a small amount of IT hardware to support the
              infrastructure, the main deliverable from Immersive AV was our
              experience of systems integration and live streaming.
            </p>
            <p className="portfolio-item__container__solution__p">
              We provided 11 streaming engineers at various venues around the
              UK, including celebrity and contestant houses, as well as the Unit
              9 HQ, where all the streams were mixed into a single production. A
              digital feed from each device and webcam was processed through a
              combination of platforms including{" "}
              <a
                href="https://www.vmix.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                vMix
              </a>
              , Zoom and ChromeCast. Even though the production wasn’t broadcast
              live, it needed to be treated as such, so the interactions between
              all 16 participants was authentic.
            </p>
          </div>
          <div className="portfolio-item__container__supplementary-images">
            <img
              src={images[6]}
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
            {/* <h1 className="portfolio-item__container__quote__h1">
              Lorem ipsum dolor sit amet
            </h1> */}
          </div>
          <div className="portfolio-item__container__result">
            <h2 className="portfolio-item__container__result__h2">Result</h2>
            <p className="portfolio-item__container__result__p">
              With over 270 million active monthly players, it’s no surprise the
              impact of the Candy Crush All Stars campaign was massive. The
              Candy Crush All Stars grand finale was published on YouTube and
              amassed over 300,000 views in just two weeks. A collection of
              highlight clips racked up an additional 230,000 views.
            </p>
            <p className="portfolio-item__container__result__p">
              The footage was also used to create a 3 minute digital advert
              which was used across social media platforms, directing traffic to
              the main Candy Crush site.
            </p>
          </div>
        </div>
      </div>
      <News />
      {/* <Footer /> */}
      <NewFooter />
      <div className="empty">
        {/* <SubHero /> */}
        <h1 className="empty__title">{footerText}</h1>
      </div>
    </div>
  )
}

export default Candy
