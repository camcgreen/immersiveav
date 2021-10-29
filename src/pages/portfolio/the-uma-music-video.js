import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../../components/header"
import LowHero from "../../components/lowHero"
import News from "../../components/news"
import NewFooter from "../../components/footerNew"

import HeroImage from "../../images/project3.jpeg"
import Image1 from "../../images/green-hero.jpeg"
import Image2 from "../../images/green-supp-1.jpg"
import Image3 from "../../images/led-supp-2.jpg"
import Image4 from "../../images/green-supp-2.jpg"
import Image5 from "../../images/projection-supp-1.png"
import Image6 from "../../images/led-hero.jpg"
import Image7 from "../../images/projection-hero.jpeg"
import Image8 from "../../images/green-1.jpeg"
import Image9 from "../../images/led-supp-1.jpg"

import { footerText } from "../../utils/helper"

import bgBlue from "../../svg/bg-blue.svg"
import bgOrange from "../../svg/bg-orange.svg"

import "../../styles/styles.scss"

const UMA = () => {
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
        <h1 className="portfolio-item__h1">The UMA Music Video</h1>
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
            <h3 className="portfolio-item__container__quote__h3">UMA</h3>
          </div>
          <div className="portfolio-item__container__challenge">
            <h2 className="portfolio-item__container__challenge__h2">
              Challenge
            </h2>
            <p className="portfolio-item__container__challenge__p">
              Bands releasing a new single in the middle of a global lockdown
              needed to find a creative way to reach their fans. Which is
              exactly what The UMA did when they used the{" "}
              <Link to="/services/studio/led-streaming-studios">
                LED studio
              </Link>{" "}
              at StudioX Telford to launch their single ‘Fire’ in summer 2020.
              During the first months of lockdown, the{" "}
              <Link to="/services/studio">StudioX</Link> team worked with
              Clearway Media to produce The UMA music video which helped to ease
              the pain of The UMA fans, unable to see their favourite band live.
            </p>
            <p className="portfolio-item__container__challenge__p">
              With no opportunity to play live gigs,{" "}
              <a
                href="https://www.facebook.com/theumaband/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The UMA
              </a>{" "}
              wanted to give their fans the next best thing, an atmospheric
              music video their fans could enjoy safely from home. The UMA
              worked closely with Cinematographer Matt Daleyy and the StudioX
              team to define the visual identity of the Fire video, which would
              replicate their live performances.
            </p>
          </div>
          <div className="portfolio-item__container__solution">
            <h2 className="portfolio-item__container__solution__h2">
              Solution
            </h2>
            <p className="portfolio-item__container__solution__p">
              The UMA used the 16M wide curved LED background at StudioX Telford
              to create an immersive visual experience with psychedelic video
              content, which complimented the trippy, upbeat melody of their
              song. Bypassing the need for extensive media server programming,
              The UMA stitched their video content together using a 6144 x 1344
              pixel powerpoint template to create a pixel-perfect reproduction
              of their visuals on the LED screen. The content was synchronised
              using timecode to trigger specific video clips at certain points
              in the song. As typical with most music videos, the footage was
              captured using a single HD video camera by Matt, with repeat takes
              for additional angles. Post-production editing was straightforward
              due to the quality of recording captured using the immersive LED
              background.
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
              The music video of Fire premiered in 2020, with over 5000 fans
              watching the video during the first week of release. The video was
              shared across social media platforms such as Facebook, Instagram
              and Twitter, helping the band bridge the gap between them and
              their fans. The video has amassed over 16,000 views on YouTube.
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

export default UMA
