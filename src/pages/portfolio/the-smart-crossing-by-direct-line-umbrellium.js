import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../../components/header"
import LowHero from "../../components/lowHero"
import News from "../../components/news"
import NewFooter from "../../components/footerNew"

import HeroImage from "../../images/project10.jpeg"
import Image1 from "../../images/smart-new-4.jpg"
import Image2 from "../../images/smart-new-3.jpg"
import Image3 from "../../images/smart-new-8.jpg"
import Image4 from "../../images/smart-new-6.jpg"
import Image5 from "../../images/project11.jpeg"
import Image6 from "../../images/crossing1.png"
import Image7 from "../../images/smart-new-2.jpg"
import Image8 from "../../images/smart-new-7.jpg"
import Image9 from "../../images/smart-new-5.jpg"
import Image10 from "../../images/crossing2.jpeg"

import { footerText } from "../../utils/helper"

import bgBlue from "../../svg/bg-blue.svg"
import bgOrange from "../../svg/bg-orange.svg"

import "../../styles/styles.scss"

const SmartCrossing = () => {
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
    Image10,
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
        <h1 className="portfolio-item__h1">
          The Smart Crossing by Direct Line
        </h1>
        <div className="portfolio-item__container">
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
              style={{ height: 350 }}
            />
            <img
              src={images[6]}
              alt=""
              className="portfolio-item__container__hero-array__img portfolio-item__container__hero-array__img--6"
            />
          </div>
          <div className="portfolio-item__container__quote">
            {/* <h1 className="portfolio-item__container__quote__h1">
              {'" Lorem ipsum dolor sit amet, consecteur adipiscing'}
            </h1>
            <h3 className="portfolio-item__container__quote__h3">
              Direct Line
            </h3> */}
          </div>
          <div className="portfolio-item__container__challenge">
            <h2 className="portfolio-item__container__challenge__h2">
              Challenge
            </h2>
            <p className="portfolio-item__container__challenge__p">
              To create the world’s first responsive road. Led by the team at{" "}
              <a
                href="https://umbrellium.co.uk/initiatives/starling-crossing/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Umbrellium
              </a>{" "}
              in association with{" "}
              <a
                href="https://saatchi.co.uk/en-gb/work/direct-line-the-smarter-crossing-integrated/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Saatchi & Saatchi
              </a>{" "}
              on behalf of{" "}
              <a
                href="http://www.thesmartcrossing.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Direct Line
              </a>
              . We set about designing an expansive 22m x 7.5m digital road
              surface that responded dynamically in real-time to make
              pedestrians, cyclists and motorists safer and more aware of each
              other.
            </p>
            <p className="portfolio-item__container__challenge__p">
              The surface needed to handle any weather condition thrown at it as
              well withstand the weight and constant stress of up to 2 tonne
              vehicles driving over it. We also needed to visibly differentiate
              the road from the footpaths and ensure content was still seamless
              across the entire surface. The system design needed to capture 4k
              at 25fps and output at 50hz across 4 1920×1080 displays.
            </p>
          </div>
          <div className="portfolio-item__container__solution">
            <h2 className="portfolio-item__container__solution__h2">
              Solution
            </h2>
            <p className="portfolio-item__container__solution__p">
              The 22m x 5.5m main road surface was made up utilising Uniview’s
              6.2mm LED floor tiles, which are IP65 rated and can withstand a
              weight of 2 tonne per square metre. We then used Uniview’s 7.8mm
              LED floor tiles for the two 22m x 1m footpaths which ran parallel
              to the main surface. The Uniview 7.8mm product was again IP65
              rated, however can withstand a weight of 2.5 tonnes per square
              metre. We were able to capture Umbrellium’s 4k camera feed at
              25fps and split into 4 full HD sources over HD-SDI into our 2×4 D3
              Media Server, whilst genlocking via a Nanosync HD.
            </p>
            <p className="portfolio-item__container__solution__p">
              Output from the D3 server was then handled via 4 Datapath FX4’s
              and then genlocked at 50hz before being distributed across 8
              Novastar MCTRL660 LED processors. The D3 Media Server was able to
              map across the two different pixel pitches seamlessly. In total
              the solution generated a minimal 3fps of lag from source to
              surface to ensure the digital road surface reacted in real time
              with the camera capture.
            </p>
          </div>
          <div className="portfolio-item__container__supplementary-images">
            <img
              src={images[7]}
              alt=""
              className="portfolio-item__container__supplementary-images__img portfolio-item__container__supplementary-images__img--1"
            />
            <img
              src={images[8]}
              alt=""
              className="portfolio-item__container__supplementary-images__img portfolio-item__container__supplementary-images__img--2"
            />
            <img
              src={images[9]}
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
              The opportunity to use technology far beyond it’s intended use for
              a greater purpose is essentially the core ethos of Immersive AV.
              We delivered above and beyond the initial outline brief and
              designed a bullet proof system which could handle the long filming
              days and rigorous testing. Our ability to innovate whilst being
              budget conscience were tested to limit on this project, however
              the results were as spectacular as the idea at it’s core.
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

export default SmartCrossing
