import React from "react"
import { Helmet } from "react-helmet"
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
import Live2 from "../../images/adidas3.jpg"
import Live3 from "../../images/services-top-2.jpg"
import Live4 from "../../images/project1.jpeg"
import Live5 from "../../images/contact.jpg"
import Live6 from "../../images/adidas7.jpg"
import Live7 from "../../images/services-top-5.jpeg"
import Live8 from "../../images/project5.jpeg"
import Live9 from "../../images/hire.jpg"
import Live10 from "../../images/expo.jpg"

const Live = () => {
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Live Events | ImmersiveAV</title>
      </Helmet>
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
        <h1 className="service-item__h1">Live Events</h1>
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
              We’re a full service technical production supplier for live
              events.
            </h1>
          </div>
          <div className="service-item__container__challenge">
            <p className="service-item__container__challenge__p">
              Our innovations create experiences which attract attention,
              maximise engagement and collect data to help you accurately assess
              the ROI of your live event.
            </p>
            <p className="service-item__container__challenge__p">
              Examples of our experiential installations include:{" "}
              <Link to="/services/live/interactive-walls">
                interactive touch walls
              </Link>
              ,{" "}
              <Link to="/services/live/projection-mapping">
                projection mapping
              </Link>
              ,{" "}
              <Link to="/services/live/gesture-controlled-content">
                gesture-controlled content
              </Link>
              , large scale video walls,{" "}
              <Link to="/services/live/generative-content">
                generative content
              </Link>{" "}
              and other scalable interactions between physical technology and
              digital content.
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
              Want to attract attention at your live event? We’ll create a
              solution which makes you stand out from the crowd and attract more
              visitors than ever before.
            </p>
            <p className="service-item__container__result__p">
              Engagement is king—what better way to enhance the time people
              spend in your space than through interactivity?{" "}
              <Link to="/services/live/custom-games">Custom games</Link>
              {", "}
              <Link to="/services/live/interactive-walls">
                interactive walls
              </Link>
              , and{" "}
              <Link to="/services/live/generative-content">
                responsive content
              </Link>{" "}
              are all proven methods of capturing people’s attention. Whatever
              your interactive dreams, we’ll make them a reality!
            </p>
          </div>
          <div className="service-item__container__quote service-item__container__quote--end">
            <h1 className="service-item__container__quote__h1">
              You dream, we do.
            </h1>
          </div>
        </div>
        <Link
          className="cms-container__post__back"
          to="/"
          style={{ textDecoration: "none", marginBottom: 100, zIndex: 7 }}
        >
          <btn>← Home</btn>
        </Link>
      </div>
      <News />
      <NewFooter />
      <div className="empty">
        <h1 className="empty__title">{footerText}</h1>
      </div>
    </div>
  )
}

export default Live
