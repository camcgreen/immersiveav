import React from "react"
import { Link } from "gatsby"

import Header from "../../components/header"
import LowHero from "../../components/lowHero"
import News from "../../components/news"
import NewFooter from "../../components/footerNew"

import { footerText } from "../../utils/helper"

import bgBlue from "../../svg/bg-blue.svg"
import bgArrowOrange from "../../svg/bg-arrow-orange.svg"

import HeroImage from "../../images/live-1.jpeg"
import Live1 from "../../images/news1.jpg"
import Live2 from "../../images/live-2.jpeg"
import Live3 from "../../images/live-3.jpeg"
import Live4 from "../../images/project1.jpeg"
import Live5 from "../../images/project2.jpeg"
import Live6 from "../../images/project3.jpeg"
import Live7 from "../../images/project4.jpeg"
import Live8 from "../../images/project5.jpeg"
import Live9 from "../../images/hire.jpg"
import Live10 from "../../images/expo.jpg"

const Studio = () => {
  const images = [
    Live1,
    Live2,
    Live3,
    Live4,
    Live5,
    Live6,
    Live7,
    Live8,
    Live9,
    Live10,
  ]

  return (
    <div className="wrapper">
      <Header />
      <LowHero />
      <div className="service-item">
        <div className="bg-av">
          <img className="bg-av__img bg-av__img--blue" src={bgBlue} alt="" />
          <img
            className="bg-av__img bg-av__img--arrow-orange"
            src={bgArrowOrange}
            alt=""
          />
        </div>
        <h1 className="service-item__h1">Event Live Streaming</h1>
        <div className="service-item__container">
          <div className="service-item__container__hero-array">
            <img
              src={images[0]}
              alt=""
              className="service-item__container__hero-array__img service-item__container__hero-array__img--1"
            />
            <img
              src={images[1]}
              alt=""
              className="service-item__container__hero-array__img service-item__container__hero-array__img--2"
            />
            <img
              src={images[2]}
              alt=""
              className="service-item__container__hero-array__img service-item__container__hero-array__img--3"
            />
            <img
              src={images[3]}
              alt=""
              className="service-item__container__hero-array__img service-item__container__hero-array__img--4"
            />
            <img
              src={images[4]}
              alt=""
              className="service-item__container__hero-array__img service-item__container__hero-array__img--5"
            />
            <img
              src={images[5]}
              alt=""
              className="service-item__container__hero-array__img service-item__container__hero-array__img--6"
            />
            <img
              src={images[6]}
              alt=""
              className="service-item__container__hero-array__img service-item__container__hero-array__img--7"
            />
          </div>
          <img
            src={HeroImage}
            alt=""
            className="service-item__container__hero-image"
          />
          <div className="service-item__container__empty"></div>
          <div className="service-item__container__quote">
            <h1 className="service-item__container__quote__h1">
              Broadcast-quality, live-streamed productions.
            </h1>
          </div>
          <div className="service-item__container__challenge">
            <p className="service-item__container__challenge__p">
              The demands of producing a live stream can be a minefield of
              challenges. Let us take the headache away, and help you deliver
              your most successful live streamed event.
            </p>
            <p className="service-item__container__challenge__p">
              Our studio services are as broad as your imagination. From{" "}
              <Link to="/services/studio/led-streaming-studios">
                LED streaming studios
              </Link>
              {" and "}
              <Link to="/services/studio/green-screen-recording">
                green screen recording studios
              </Link>
              ,{" "}
              <Link to="/services/studio/stream-management-services">
                stream management services
              </Link>
              {" and "}
              <Link to="/services/studio/event-streaming-microsites">
                event streaming microsites
              </Link>{" "}
              , we have all your live streaming needs covered.
            </p>
          </div>
          <div className="service-item__container__supplementary-images">
            <img
              src={images[4]}
              alt=""
              className="service-item__container__supplementary-images__img service-item__container__supplementary-images__img--1"
            />
            <img
              src={images[5]}
              alt=""
              className="service-item__container__supplementary-images__img service-item__container__supplementary-images__img--2"
            />
          </div>
          <div className="service-item__container__result">
            <p className="service-item__container__result__p">
              Our studio servicers can be a fully-remote solution, or utilise
              one of our broadcast studios in London or Telford. Our streaming
              specialists will take care of all technical requirements:
              directing your event, switching between remote presenters,
              enabling live audience interaction and integrating presentation
              content into the live streamed production. Our services can also
              be used for pre-recorded content to be used at a later date.
            </p>
          </div>
          <div className="service-item__container__quote service-item__container__quote--end">
            <h1 className="service-item__container__quote__h1">
              Our streaming solutions ease the stress, delivering high quality,
              secure and engaging live-streamed experiences.
            </h1>
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

export default Studio
