import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../../components/header"
import LowHero from "../../components/lowHero"
import News from "../../components/news"
import NewFooter from "../../components/footerNew"

import HeroImage from "../../images/project5.jpeg"
import Image1 from "../../images/r-1.jpg"
import Image2 from "../../images/r-3.jpg"
import Image3 from "../../images/r-4.jpg"
import Image4 from "../../images/services-1.jpeg"
import Image5 from "../../images/projection-supp-1.png"
import Image6 from "../../images/r-2.jpg"
import Image7 from "../../images/r-5.jpg"
import Image8 from "../../images/r-6.jpg"
import Image9 from "../../images/huawei-1.jpeg"

import { footerText } from "../../utils/helper"

import bgBlue from "../../svg/bg-blue.svg"
import bgOrange from "../../svg/bg-orange.svg"

import "../../styles/styles.scss"

const Huawei = () => {
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
        <h1 className="portfolio-item__h1">Interactive Rubik's Cube</h1>
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
              style={{ height: 350 }}
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
            <h3 className="portfolio-item__container__quote__h3">Huawei</h3> */}
          </div>
          <div className="portfolio-item__container__challenge">
            <h2 className="portfolio-item__container__challenge__h2">
              Challenge
            </h2>
            <p className="portfolio-item__container__challenge__p">
              When Huawei launched their latest smartphone, they wanted to
              create a spectacle and get people talking. Working with{" "}
              <a
                href="https://www.kerve.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kerve Creative
              </a>
              , Immersive AV designed and built a 4.5M high interactive Rubik’s
              cube which used the device’s groundbreaking AI to help users
              complete the famously difficult puzzle. That got people talking!
            </p>
            <p className="portfolio-item__container__challenge__p">
              Tasked with creating an interactive spectacle for the launch of
              the Huawei Mate 20 Pro, Kerve Creative utilised{" "}
              <Link to="/services/live">event production services</Link> from
              Immersive AV to bring their ambitions to life. What better way to
              demonstrate the Mate 20 Pro’s ground-breaking AI capabilities than
              to use it to help solve a Rubik’s Cube, a conundrum with 43
              quintillion possible combinations? The challenge was to design and
              build a digital Rubik’s cube, providing the systems integration to
              connect it to the Huawei Mate 20 Pro, allowing members of the
              public to interact with the cube over a two-day period on London’s
              Southbank.
            </p>
          </div>
          <div className="portfolio-item__container__solution">
            <h2 className="portfolio-item__container__solution__h2">
              Solution
            </h2>
            <p className="portfolio-item__container__solution__p">
              Immersive AV provided all the technical support to assist Kerve
              Creative achieving their ambitions. The most visual element of the
              installation was the 3M3 Rubik’s cube, which standing at 4.6M tall
              was sure to attract attention. We designed and built the framework
              for the cube, using Unilumin 4.8mm LED panels to portray the
              coloured squares of the Rubik’s cube. The installation was active
              for 10 hours a day, so needed to be reliable and weatherproof. We
              took care of all systems integration needs, using ultra-high spec
              computers to connect the Huawei Mate 20 Pro via a temporary
              wireless internet connection, provided by Immersive AV. Kerve
              developed an app, which offered prompts to help users complete the
              cube far quicker than they would be able to without the
              game-changing AI of the Mate 20 Pro.
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
              The brightly-lit Rubik’s cube was visible from a distance along
              both banks of the River Thames, attracting attention as an
              interactive beacon of the Huawei brand. Thousands of passers by
              stopped to look at the cube, with the app registering hundreds of
              different interactions from Huawei customers engaging with the
              experience. As well as generating an enviable amount of attention
              to people actually there, the impact resonated across social media
              too, with brand ambassador,{" "}
              <a
                href="https://www.instagram.com/georgiatoffolo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Georgia Toffolo
              </a>{" "}
              from Made in Chelsea attracting 50,000 likes to a post on her
              personal instagram profile.
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

export default Huawei
