import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../../components/header"
import LowHero from "../../components/lowHero"
import News from "../../components/news"
import NewFooter from "../../components/footerNew"

import HeroImage from "../../images/project2.jpeg"
import Image1 from "../../images/mini-new-1.jpg"
import Image2 from "../../images/mini-new-7.jpg"
import Image3 from "../../images/mini-new-3.jpg"
import Image4 from "../../images/mini-new-2.jpg"
import Image5 from "../../images/mini-new-5.jpg"
import Image6 from "../../images/mini-new-6.jpg"
import Image7 from "../../images/projection-hero.jpeg"
import Image8 from "../../images/mini-new-8.jpg"
import Image9 from "../../images/mini-new-9.jpg"
import Image10 from "../../images/mini-new-4.jpg"

import { footerText } from "../../utils/helper"

import bgBlue from "../../svg/bg-blue.svg"
import bgOrange from "../../svg/bg-orange.svg"

import "../../styles/styles.scss"

const Mini = () => {
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
        <h1 className="portfolio-item__h1">Mini All Electric Launch</h1>
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
            {/* <h1 className="portfolio-item__container__quote__h1">
              {'" Lorem ipsum dolor sit amet, consecteur adipiscing'}
            </h1>
            <h3 className="portfolio-item__container__quote__h3">Mini</h3> */}
          </div>
          <div className="portfolio-item__container__challenge">
            <h2 className="portfolio-item__container__challenge__h2">
              Challenge
            </h2>
            <p className="portfolio-item__container__challenge__p">
              Mini wanted to celebrate the global launch of the Mini Cooper SE,
              the first all-electric Mini on the market. So we partnered with
              Unit 9 to build the ElectriCity, an interactive mural powered by
              touch and the technology itself.
            </p>
          </div>
          <div className="portfolio-item__container__solution">
            <h2 className="portfolio-item__container__solution__h2">
              Solution
            </h2>
            <p className="portfolio-item__container__solution__p">
              Like the all-electric Mini, the mural was charged with passion.
              Inspired by the wonder of electricity, we worked with legendary
              Dutch artist Franky Sticks to paint a futuristic city—including
              art, music, and fashion districts—that ran on electricity in the
              heart of Rotterdam.
            </p>
            <p className="portfolio-item__container__solution__p">
              The mural put viewers in the driver’s seat and offered them a
              multi-sensory experience. It combined familiar aspects of city
              life like flickering street lights and dogs chasing their tails,
              one-of-a-kind moments like spectacular DJ sets and glitzy runway
              shows, and references to some of Rotterdam’s most iconic
              landmarks, resulting in a true urban slice of life.
            </p>
            <p className="portfolio-item__container__solution__p">
              Franky Sticks created the mural with conductive paint responsive
              to human touch. He designed “hot spots” within the mural that lit
              up, animated (with the help of projectors), and played sound
              effects when people touched them, making the mural a truly
              theatrical experience. There was even a hidden camera to capture
              the perfect selfies. The team had just three weeks to bring the
              seven-meter-long mural to life from start to finish, but we worked
              around the clock with Franky Sticks to make it happen. The final
              product was a testament to what you can achieve with a little bit
              of electricity and a lot of imagination.
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
              The ElectriCity mural generated buzz—literally! It allowed people
              to preview the new all-electric car, rediscover the power of
              electricity, and consider how both can transform city life for the
              better. By embedding the technology into the mural itself, we
              reminded people that the future of mobility lies in electricity.
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

export default Mini
