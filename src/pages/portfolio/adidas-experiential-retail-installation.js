import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../../components/header"
import LowHero from "../../components/lowHero"
import News from "../../components/news"
import NewFooter from "../../components/footerNew"

import HeroImage from "../../images/project1.jpeg"
import Image1 from "../../images/adidas1.jpg"
import Image2 from "../../images/adidas2.jpg"
import Image3 from "../../images/adidas3.jpg"
import Image4 from "../../images/adidas-new-2.jpg"
import Image5 from "../../images/adidas-new-1.jpg"
import Image6 from "../../images/adidas6.jpg"
import Image7 from "../../images/adidas7.jpg"
import Image8 from "../../images/adidas8.jpg"
import Image9 from "../../images/adidas9.jpg"

import { footerText } from "../../utils/helper"

import bgBlue from "../../svg/bg-blue.svg"
import bgOrange from "../../svg/bg-orange.svg"

import "../../styles/styles.scss"

const Adidas = () => {
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
        <h1 className="portfolio-item__h1">
          Adidas Experiential Retail Installation
        </h1>
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
            <h3 className="portfolio-item__container__quote__h3">Adidas</h3> */}
          </div>
          <div className="portfolio-item__container__challenge">
            <h2 className="portfolio-item__container__challenge__h2">
              Challenge
            </h2>
            <p className="portfolio-item__container__challenge__p">
              How do you generate a buzz in store, when footfall is at an all
              time low because of a global pandemic? Adidas wanted to set the
              standard for what an experiential retail installation could
              achieve. Working with The Marketing Store, Immersive AV helped
              Adidas attract more customers through the doors and keep them
              inside for longer with some clever tech experiences.
            </p>
            <p className="portfolio-item__container__challenge__p">
              When experiential retail specialists{" "}
              <a
                href="https://www.themarketingstore.com/?redirected=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Marketing Store
              </a>{" "}
              were tasked with creating an interactive brand experience at
              Adidas’ flagship store on Oxford Street, they enlisted the{" "}
              <Link to="/our-services">technical production services</Link> of
              Immersive AV to produce a semi-permanent installation that would
              attract attention and maximise customer engagement.
            </p>
            <p className="portfolio-item__container__challenge__p">
              The theme of the store takeover was the heightened sense of speed,
              to promote the launch of the new Adidas x Ghosted football boot.
              The brief from our client was to create several immersive
              environments throughout the store, which would portray a physical
              representation of speed for shoppers to interact with.
            </p>
          </div>
          <div className="portfolio-item__container__solution">
            <h2 className="portfolio-item__container__solution__h2">
              Solution
            </h2>
            <p className="portfolio-item__container__solution__p">
              Audience engagement was a key element of all our solutions for
              Adidas. One of the most eye-catching installations was an
              automated lighting animation with nine transparent screens, with
              images of footballer Mo Salah which were illuminated sequentially
              and created an illusion of the Liverpool striker sprinting through
              the store.
            </p>
            <p className="portfolio-item__container__solution__p">
              We also created interactive content for a ghost wall, which
              displayed an animated visualisation of speed on a video wall.
              Users triggered generative content via movement sensors,
              generating an avatar which raced across the screen in real time.
            </p>
            <p className="portfolio-item__container__solution__p">
              Elsewhere, Immersive AV accessorised Adidas mannequins with
              digital goggles, displaying a custom animation, and provided
              atmospheric lighting and audio around the store.
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
            {/* <h1 className="portfolio-item__container__quote__h1">
              Lorem ipsum dolor sit amet
            </h1> */}
          </div>
          <div className="portfolio-item__container__result">
            <h2 className="portfolio-item__container__result__h2">Result</h2>
            <p className="portfolio-item__container__result__p">
              The experience was installed in the store for six weeks,
              attracting a lot of attention and generating a palpable buzz on
              social media.
            </p>
            <p className="portfolio-item__container__result__p">
              From the crowd-gathering ghost wall, to Mo Salah racing through
              the store in a 21st Century take on flipbook animation—our
              experiential retail installation with The Marketing Store for
              Adidas was a roaring success.
            </p>
            <p className="portfolio-item__container__result__p">
              One of the reasons for commissioning the installation was to
              offset the reduced footfall in the store due to the pandemic. Both
              Adidas and The Marketing Store were delighted with the enhanced
              levels of shopper engagement.
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

export default Adidas
